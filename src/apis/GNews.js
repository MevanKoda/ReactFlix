const API_KEY = import.meta.env.VITE_GNEWS_API_KEY


export const fetchNews = async()=>{
    try{
        const res = await fetch(`https://api.mediastack.com/v1/news?access_key=${API_KEY}&keywords=movies&countries=us,gb,de&limit=10`)
        const data = await res.json()
        return data.data
        console.log(data)
    }catch(err){
        console.error("Failed to fetch data", err)
    }


}