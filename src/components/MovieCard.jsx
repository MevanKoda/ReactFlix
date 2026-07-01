import poster from '../assets/hero1.png'
import { FaStar } from "react-icons/fa";


function MovieCard(props){
    return(
        <div className="lg:max-w-80  box-border relative m-2 bg-gray-800  rounded w-0.7 cursor-pointer">
            <img src={`https://image.tmdb.org/t/p/w500${props.cover}`} alt="movie poster" className="rounded w-fit" ></img>
            <p className="absolute flex items-center gap-1 top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded"><span><FaStar /></span>{props.rating}</p>
            <h1 className="text-white text-md mt-2 px-3">{props.name}</h1>
            <div className="flex items-baseline gap-1 mt-2 mb-1 p-2">
                <p className="text-gray-400 bg-gray-900 px-2 rounded text-sm">{props.genre}</p>
                <p className="text-gray-400 text-sm">{props.year}</p>
            </div>
        </div>
    )
}

export default MovieCard