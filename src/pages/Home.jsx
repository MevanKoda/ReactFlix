import MovieCard from "../components/MovieCard.jsx";
import {useMovies} from '../hooks/useMovies.js'
import {useShows} from '../hooks/useShows.js'
import Widget from "../components/Widget.jsx";
import { FaPlus } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import {GenreDecoder} from '../utils/genreMap.js'


function Home() {

const {movies} = useMovies()
const shows = useShows()

console.log(import.meta.env)
return (
<>
      <div>
        <div className="h-screen w-full bg-[url('./assets/hero1.png')] bg-cover bg-center">
          <div className="pt-80 p-8 lg:w-1/2">
            <ul className="flex gap-2">
              <li className="bg-gray-800 px-4 p-0.5 rounded-xl border-2 border-blue-500 text-blue-500 text-sm opacity-90">
                SCI-FI
              </li>
              <li className="bg-gray-800 px-4 p-0.5 rounded-xl border-2 border-blue-500 text-blue-500 text-sm opacity-90">
                New SEASON
              </li>
            </ul>

            <h1 className="text-5xl text-white font-extrabold pt-4">
              THE BOYS
            </h1>

            <p className="text-white pt-4">
              When the world got corrupted by superpowered humans, a chaotic
              team formed to save the world from the chaos
            </p>

            <div className="pt-4 flex gap-1">
              <button className="bg-blue-400 py-3 px-8 text-white rounded-xl text-md flex items-center gap-2">
                <FaPlay />
                Watch Now
              </button>
              <button className="bg-gray-600  border-1 border-white p-4 text-white rounded-xl text-md ml-2">
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-20 lg:p-18 p-4">
        <h1 className="text-lg text-white">Trending Now</h1>
        <h1 className="absolute float-right top-20 lg:right-25 right-10 text-blue-300">
          See All
        </h1>
        <div className="pt-4 grid grid-cols-2 lg:grid lg:grid-cols-6 place-items-center gap-4">
            

    
        {movies.map(result=>(
          <MovieCard key={result.id} name={result.title} genre={GenreDecoder(result.genre_ids[0])} year={result.release_date} rating={Number(result.vote_average).toFixed(1)} cover={result.poster_path} />
        ))}  
      
         
        </div>
      </div>

      <div className="p-4  relative pb-10 lg:p-20">
        <h1 className="text-lg text-white">Popular Picks</h1>
        <h1 className="absolute float-right top-4 right-5 lg:top-20 lg:right-20 text-blue-300">
          View More
        </h1>
        <div className="block lg:grid lg:grid-cols-6 lg:place-items-center gap-2 pt-4 grid grid-cols-2 place-items-center">
              {shows.map(show=>(
                 <Widget
            tag="Trending"
            title={show.name}
            cover={show.poster_path}
            />
              ))}
          
        </div>
      </div>

</>
  );
}

export default Home;
