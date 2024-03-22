import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";

const Header = ({ darkMode, onToggle }) => {
  return (
    <div className=" container mx-auto h-20 flex items-center justify-center">
      <button onClick={onToggle}>
        {darkMode ? <IoSunnyOutline /> : <GoMoon />}
      </button>
    </div>
  );
};

export default Header;
