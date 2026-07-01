import {useState,React} from 'react'
import {NavLink,BrowserRouter} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

import SideBar from '../components/Sidebar'


function Header(){

    const [isOpened, setIsOpened] = useState(false)




    return(
        <>
            <div className={`justify-between items-center w-full p-8 bg-gray-900 flex`}>
                <div className="flex items-center gap-6"> 
                    <button onClick={()=>setIsOpened(!isOpened)}><GiHamburgerMenu className='scale-140 text-blue-400 lg:hidden' /></button>
                    <h1 className="text-2xl font-semibold text-blue-400">ReactFlix</h1>
                    <ul className="hidden lg:flex lg:ml-4 lg:gap-8 lg:text-md text-gray-300">
                        <li><NavLink to="/ReactFlix/">Home</NavLink></li>
                        <li><NavLink to="/ReactFlix/movies">Movies</NavLink></li>
                        <li><NavLink to="/ReactFlix/news">News</NavLink></li>
                    

                    </ul>
                </div>

                <div className="flex items-center gap-3">
                    <IoSearch className="block lg:hidden size-6 text-white"/>
                    <div className="relative">
                    <IoSearch className="hidden lg:absolute lg:block float-left top-3 left-4 text-gray-400"/>
                    <input 
  type="text"
  placeholder="Search anything..."
  className="hidden lg:block bg-gray-800 text-white placeholder-gray-400 rounded-full pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400 w-64"
/>

                    </div>
                    <FaRegCircleUser className="size-6 text-white"/>
                </div>
            </div>


        <SideBar isOpened={isOpened} setIsOpened={setIsOpened}></SideBar>
        
        </>
    )

}

export default Header