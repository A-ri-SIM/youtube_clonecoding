import { IoMenu } from 'react-icons/io5';

export default function HambergerMenu({ isClick, setIsClick }) {
  const toggleMenu = () => {
    setIsClick(!isClick);
  };
  return (
    <div>
      <IoMenu
        className="text-3xl mr-4 cursor-pointer hover:scale-110 duration-300"
        onClick={toggleMenu}
      />
    </div>
  );
}
