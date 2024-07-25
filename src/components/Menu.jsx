import { Link } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { MdSubscriptions } from 'react-icons/md';
import { GoHistory } from 'react-icons/go';
import { RiPlayList2Fill } from 'react-icons/ri';
import { BsYoutube } from 'react-icons/bs';
import { SiYoutubestudio, SiYoutubemusic, SiYoutubekids } from 'react-icons/si';

export default function Menu({ isClick }) {
  return (
    <nav className={isClick ? 'min-w-52 mx-6 h-screen' : 'mx-6 h-screen'}>
      <div>
        <Link
          to={'/'}
          className="flex items-center mb-6 hover:scale-105 duration-300"
        >
          <IoMdHome className="w-7 h-7" />
          <p className={isClick ? 'block ml-4' : 'hidden'}>Home</p>
        </Link>
        <Link
          to={'/videos/subscribe'}
          className="flex items-center mb-6 hover:scale-105 duration-300"
        >
          <MdSubscriptions className="w-7 h-7" />
          <p className={isClick ? 'block ml-4' : 'hidden'}>구독</p>
        </Link>
        <Link
          to={'/videos/viewinghistory'}
          className="flex items-center mb-6 hover:scale-105 duration-300"
        >
          <GoHistory className="w-7 h-7" />
          <p className={isClick ? 'block ml-4' : 'hidden'}>시청기록</p>
        </Link>
        <Link
          to={'/videos/watchlater'}
          className="flex items-center mb-8 hover:scale-105 duration-300"
        >
          <RiPlayList2Fill className="w-7 h-7" />
          <p className={isClick ? 'block ml-4' : 'hidden'}>나중에 볼 동영상</p>
        </Link>
      </div>

      {isClick && (
        <div className="pt-6 border-t">
          <h2 className="mb-6">YouTube 더보기</h2>
          <a
            href="https://www.youtube.com/premium"
            target="_blank"
            className="flex items-center mb-3"
          >
            <BsYoutube className="text-xl text-brand" />
            <p className="ml-4 text-sm">YouTube Premium</p>
          </a>
          <a
            href="https://studio.youtube.com/channel/UCJzvstG3SKveHyi-kur0k8A"
            target="_blank"
            className="flex items-center mb-3"
          >
            <SiYoutubestudio className="text-xl text-brand" />
            <p className="ml-4 text-sm">YouTube Studio</p>
          </a>
          <a
            href="https://www.youtube.com/musicpremium"
            target="_blank"
            className="flex items-center mb-3"
          >
            <SiYoutubemusic className="text-xl text-brand" />
            <p className="ml-4 text-sm">YouTube Music</p>
          </a>
          <a
            href="https://www.youtubekids.com/?source=youtube_web"
            target="_blank"
            className="flex items-center mb-3"
          >
            <SiYoutubekids className="text-xl text-brand" />
            <p className="ml-4 text-sm">YouTube Kids</p>
          </a>
        </div>
      )}
    </nav>
  );
}
