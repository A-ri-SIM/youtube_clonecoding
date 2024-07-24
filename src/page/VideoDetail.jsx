import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import SameChannelVideo from '../components/SameChannelVideo';
import Description from '../components/Description';
import Comment from '../components/Comment';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  const { youtube } = useYoutubeApi();
  const { data: comments } = useQuery({
    queryKey: ['commentThreads', video.id],
    queryFn: () => youtube.commentThreads(video.id),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <section className="max-w-7xl m-auto flex flex-col lg:flex-row">
      <article className="basis-4/6 mr-4">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="500"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          className="rounded-lg"
          title={title}
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
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
      <section className="basis-2/6">
        <SameChannelVideo id={channelId} />
      </section>
    </section>
  );
}
