import {useState, useEffect,useRef} from 'react'
import {fetchData} from '../apis/fetchMovies.js'

const CACHE_KEY = "ReactFlix_Movies"
const CACHE_TTL = 1000 * 60 * 10

export function useMovies(){
    const hasFetched = useRef(false)
    const[loading, setLoading] = useState(true)
    const[movies, setMovies]= useState([])


    useEffect(()=>{
        async function FetchMovies(){
        if (hasFetched.current) return
        hasFetched.current = true

        //Check if cache available
        const cached = localStorage.getItem(CACHE_KEY)
        if(cached){
            const {data, timestamp} = JSON.parse(cached)

            if((Date.now()-timestamp) < CACHE_TTL){
                setMovies(data)
                setLoading(false)
                return
            }
            
        }

        try{
        const data = await fetchData()

        localStorage.setItem(CACHE_KEY, JSON.stringify({
            data : (data.results),
            timestamp : Date.now() })
        )

        setMovies(data.results)

        }catch(err){
            console.log("Error fetching data", err)
        }finally{
            setLoading(false)
        }
    }

    FetchMovies()
    },[])

    return {movies, loading}
}