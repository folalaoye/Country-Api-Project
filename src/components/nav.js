import { FaRegMoon } from 'react-icons/fa'
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from '@/context/themeContext';
export default function Nav() {
    const { theme, toggleTheme } = useTheme();
    return (
        <nav className={`w-full py-3 px-10 flex justify-between shadow-md`}>
        <h3 className='font-bold text-[12px] md:text-[16px]'>Where in the world?</h3>
        <button  onClick={toggleTheme} className='flex gap-1 items-center text-[12px] md:text-[16px]'>
            {theme === 'light' ?  <IoSunnyOutline /> :  <FaRegMoon className='text-md' /> }
            {theme === "light" ? "Light " : "Dark"} Mode
        </button>
    </nav>
    );
}