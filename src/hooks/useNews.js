import {useState, useEffect,useRef} from 'react'
import {fetchNews} from '../apis/GNews.js'

const CACHE_KEY = "ReactFlix_News"
const CACHE_TTL = 1000 * 60 * 1



export const useNews = () =>{
    const hasFetched = useRef(false)
    const [news, setNews] = useState([])


    useEffect(()=>{
        async function fetchNewsData(){
        if (hasFetched.current) return
        hasFetched.current = true

        const cached = localStorage.getItem(CACHE_KEY)
        if(cached){
            const {data, timestamp} = JSON.parse(cached)

            if((Date.now()- timestamp) < CACHE_TTL){
                setNews(data)
                return
            }
        }

        try{
            const data = await fetchNews()
            
            localStorage.setItem(CACHE_KEY,JSON.stringify({
                data : data,
                timestamp : Date.now()
            }))

            setNews(data)

        }catch(err){
            console.error("Failed to fetch news",err)

        }
    }

    fetchNewsData()

    },[])


    return news

}