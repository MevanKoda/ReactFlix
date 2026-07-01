import {NavLink,BrowserRouter, useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import { MdCancel } from "react-icons/md";

function Sidebar({isOpened, setIsOpened}){
    const location = useLocation()
    useEffect(()=>{
        setIsOpened(false)
    },[location.pathname])


    return(
    
        <div className={`relative lg:hidden ${isOpened ? "block" : "hidden"}`}>
            <button className="absolute top-10 right-10 text-4xl text-white" onClick={()=> setIsOpened(false)} ><MdCancel /></button>
        <div className="h-[100vh] flex justify-center items-center">
            <ul className="text-2xl text-blue-300 h-[50%]">
                <li className="mt-10" ><NavLink to="/ReactFlix/" >Home</NavLink></li>
                <li className="mt-10"><NavLink to="/ReactFlix/movies" >Movies</NavLink></li>
                <li className="mt-10"><NavLink to="/ReactFlix/news" >News</NavLink></li>
                <li className="mt-10"><NavLink to="/ReactFlix/news" onClick ={()=>setIsOpened(false)}>Forums</NavLink></li>

            </ul>

        </div>

        </div>

        
    )
}

export default Sidebar