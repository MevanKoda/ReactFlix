import {useState, useMemo} from 'react'
import MovieCard from '../components/MovieCard'
import {useMovies} from '../hooks/useMovies.js'
import { IoSearch } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";

import {GenreDecoder} from '../utils/genreMap.js'




function Movies(){
    const {movies,loading} = useMovies()
    const [activeGenre, setActiveGenre] = useState('All')
    const [query,setQuery] = useState('')
    const [dropSelection, setDropSelection] = useState('Popularity')

    const filtered = useMemo(()=>{
        let result = movies.filter((movie)=>{
            const genreMatches =activeGenre == 'All' ? movies : activeGenre == '' || GenreDecoder(movie.genre_ids[0]) == activeGenre
            const searchResult = movie.title.toLowerCase().includes(query.toLowerCase())
            return genreMatches && searchResult
        })
            if(dropSelection === 'Popularity'){
                result = [...result].sort((a,b)=> b.popularity - a.popularity)
            }else if(dropSelection === 'Top-Rated'){
                result = [...result].sort((a,b)=> b.vote_average - a.vote_average)
            }else if(dropSelection === 'Latest'){
                result = [...result].sort((a,b)=> Date.parse(b.release_date) - Date.parse(a.release_date))
        }

        return result
        
    
    },[movies,activeGenre,query,dropSelection])

  
    const isFound = filtered.length > 0 ? true : false

    if (loading) return <p className="text-white text-center p-20 text-2xl">Loading...</p>


    return(
        <>
        <h1 className="text-white text-7xl text-center p-10 font-bold">MOVIE COLLECTION</h1>
        <div className="grid grid-cols-12 p-10 place-items-center gap-2">
            <div className="relative grid col-span-11 w-full lg:grid lg:col-span-4">
                <input 
                    type="text" 
                    placeholder="Search movies..." 
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" value={query} onChange={(e)=>setQuery(e.target.value)}
                />
            </div>
            <button className="bg-blue-400 grid col-span-1 p-2 rounded-lg lg:hidden ">
                <IoFilter />
            </button>

            <div className="lg:grid lg:col-span-5 hidden w-full">
                <div className="flex gap-2">
                    <button className="bg-blue-400 px-3 py-1 rounded-md text-white cursor-pointer" onClick = {()=>setActiveGenre("All")}>All</button>
                    <button className="bg-blue-400 px-3 py-1 rounded-md text-white cursor-pointer" onClick = {()=>setActiveGenre("Action")}>Action</button>
                    <button className="bg-blue-400 px-3 py-1 rounded-md text-white cursor-pointer" onClick = {()=>setActiveGenre("Adventure")}>Adventure</button>
                    <button className="bg-blue-400 px-3 py-1 rounded-md text-white cursor-pointer" onClick = {()=>setActiveGenre("Romance")}>Romance</button>
                    <button className="bg-blue-400 px-3 py-1 rounded-md text-white cursor-pointer" onClick = {()=>setActiveGenre("Horror")}>Horror</button>
                    <button className="bg-blue-400 px-3 py-1 rounded-md text-white cursor-pointer" onClick = {()=>setActiveGenre("Crime")}>Crime</button>
                    <button className="bg-blue-400 px-3 py-1 rounded-md text-white cursor-pointer" onClick = {()=>setActiveGenre("Drama")}>Drama</button>

                    
                </div>

            </div>

            <div className="lg:grid lg:grid-col-span-3 hidden  text-md text-left w-full text-gray-300">
                <div className="w-full lg:flex gap-4">
                <p>Sort </p>
                <select className="text-blue-400" onChange={(e)=> setDropSelection(e.target.value)}>
                    <option value="Popularity">Popularity</option>
                    <option value="Top-Rated">Top Rated</option>
                    <option value="Latest">Latest</option>

                </select>
                </div>
            </div>
            
        </div>
        <hr className="text-gray-500 opacity-40"></hr>

        
        
            
            {
            isFound ? 
            <div className="grid grid-cols-2 m-8 lg:grid lg:grid-cols-6  lg:gap-6 place-items-center">
            {filtered.map((movie)=>(
                <MovieCard key={movie.id} name={movie.title} genre={GenreDecoder(movie.genre_ids[0])} year={movie.release_date} rating={Number(movie.vote_average).toFixed(1)} cover={movie.poster_path} />
            ))} 
            </div>
            :
            <h1 className="text-white text-center text-2xl p-20">No Results Found</h1>
        
            }

</>
    )
}

export default Movies