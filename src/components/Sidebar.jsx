import {NavLink,BrowserRouter, useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import { MdCancel } from "react-icons/md";

function Sidebar({isOpened, setIsOpened}){
    const location = useLocation()
    useEffect(()=>{
        setIsOpened(false)
    },[location.pathname])


    return(
    
        <div className={`fixed inset-0 bg-blue-950 z-40 transition-opacity duration-100
                    ${isOpened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
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