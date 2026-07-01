import {NavLink,BrowserRouter} from 'react-router-dom'

import { IoMdShare} from "react-icons/io";
import { GoVideo } from "react-icons/go";
import { LiaChromecast } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";





function Footer(){
    return(

        <>
        <div className="p-8 py-20 w-full bg-gray-900" >
        <div className="lg:flex lg:items-baseline lg:justify-between">
            <div className="lg:w-1/3">
                <h1 className="text-2xl text-blue-400 font-semibold text-center lg:text-left">ReactFlix</h1>
                <p className="hidden lg:block  pt-4 text-gray-400">The Ultimate Cinematic Destination for the modern viewer, Quality Content, Beautifully Delivered</p>

                <div className="lg:flex items-center hidden gap-3 pt-5">
                    <div className="inline-flex justify-center items-center border-2 border-gray-700 rounded-[50%] p-1"><IoMdShare className="text-gray-300 size-5" /></div>
                    <div className ="inline-flex justify-center items-center border-2 border-gray-700 rounded-[50%] p-1"><GoVideo className="text-gray-300 size-5" /></div>
                    <div className ="inline-flex justify-center items-center border-2 border-gray-700 rounded-[50%] p-1"><LiaChromecast className="text-gray-300 size-5" /></div>
                </div>
            </div>
            <div className="pt-6 lg:flex lg:w-1/3 lg:justify-center">
                <ul className="flex justify-center gap-6 text-gray-400">
                    <li><NavLink to="/ReactFlix/">Home</NavLink></li>
                    <li><NavLink to="/ReactFlix/movies">Movies</NavLink></li>
                    <li><NavLink to="/ReactFlix/news">News</NavLink></li>
                </ul>

            </div>
            <div className="lg:w-1/3 hidden lg:flex lg:justify-end">
                <div>
                    <h1 className="lg:block hidden text-white text-right pr-8">Follow us on</h1>
                    <ul className="flex gap-4 pt-4">
                        <li><FaFacebook className="size-6 text-white" /></li>
                        <li><IoLogoInstagram className="size-6 text-white" /></li>
                        <li><FaThreads className="size-6 text-white"/></li>
                    </ul>
                </div>
                </div>
            
        </div>
            <p className="text-center pt-6 text-white">{'\u00A9'} 2026 ReactFlix. By MevanKoda</p>
        </div>

        </>
    )

}

export default Footer
