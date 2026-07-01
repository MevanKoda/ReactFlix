import {useState, useEffect, useRef} from 'react'
import {fetchData} from '../apis/fetchShows.js'

const CACHE_KEY = "ReactFlix_Shows"
const CACHE_TTL = 1000 * 60 * 10

export function useShows(){
    const hasFetched = useRef(false)
    const [shows, setShows] = useState([])
    


    useEffect(()=>{
        async function fetchShows(){
        if(hasFetched.current) return
        hasFetched.current = true

        //Check if cache available
        const cached = localStorage.getItem(CACHE_KEY)
        if(cached){
            const {data,timestamp} = JSON.parse(cached)

            if((Date.now()-timestamp) < CACHE_TTL){
                setShows(data)
                return
            }
        }

        try{
            const data = await fetchData()

            //Caching layer
            localStorage.setItem(CACHE_KEY, JSON.stringify({data : (data.results) , timestamp : Date.now()}))
            setShows(data.results)

        }catch(err){
            console.error("Error setting show data", err)
        }
    }

    fetchShows()
    },[])
        
    return shows

}