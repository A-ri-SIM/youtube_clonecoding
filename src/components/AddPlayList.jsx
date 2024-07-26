import { GoPlusCircle } from 'react-icons/go';
import { useOutletContext } from 'react-router-dom';

export default function AddPlayList({ video }) {
  const { setAddVideo } = useOutletContext();

  const click = (e) => {
    e.stopPropagation();
    console.log(video);
    setAddVideo((addVideo) => {
      if (addVideo.findIndex((item) => video.id === item.id) === -1) {
        return [...addVideo, video];
      }
      return addVideo;
    });
  };

  return (
    <div>
      <button className="text-2xl hover:scale-110 duration-200">
        <GoPlusCircle onClick={click} />
      </button>
    </div>
  );
}
