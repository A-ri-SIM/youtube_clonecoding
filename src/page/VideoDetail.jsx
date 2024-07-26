import { useLocation, useOutletContext } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import SameChannelVideo from '../components/SameChannelVideo';
import Description from '../components/Description';
import Comment from '../components/Comment';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { formatAgo } from '../utll/data';
import AddPlayList from '../components/AddPlayList';
import Loding from './Loading';
import NotFound from './NotFound';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description, publishedAt } =
    video.snippet;
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: comments,
  } = useQuery({
    queryKey: ['commentThreads', video.id],
    queryFn: () => youtube.commentThreads(video.id),
    staleTime: 1000 * 60 * 5,
  });
  const { setWatched } = useOutletContext();

  useEffect(() => {
    if (video) {
      const item = video;
      console.log(item);
      setWatched((watched) => {
        if (watched.findIndex((item) => video.id === item.id) === -1) {
          return [...watched, video];
        }
        return watched;
      });
    }
  }, []);

  return (
    <>
      {isLoading && <Loding />}
      {error && <NotFound />}
      {video && (
        <section className="w-full m-auto flex flex-col lg:flex-row">
          <article className="basis-4/6 mr-8">
            <iframe
              id="player"
              type="text/html"
              width="100%"
              height="700"
              src={`http://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              className="rounded-lg"
              title={title}
            />
            <div className="p-4 relative">
              <h2 className="text-xl font-bold">{title}</h2>
              <ChannelInfo
                id={channelId}
                name={channelTitle}
                publishedAt={publishedAt}
              />
              <p className="text-sm opacity-80 mb-4 pl-14">
                {formatAgo(publishedAt, 'ko')}
              </p>
              <div className="absolute right-5 top-5">
                <AddPlayList />
              </div>
              <Description description={description} />
              {comments && (
                <ul>
                  {comments.map((comment) => (
                    <Comment key={video.id} comment={comment} />
                  ))}
                </ul>
              )}
            </div>
          </article>
          <section className="basis-1/4">
            <SameChannelVideo id={channelId} />
          </section>
        </section>
      )}
    </>
  );
}
