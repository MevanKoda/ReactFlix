const URL ='https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN
export const fetchData = async()=>{
   

    try{
        const res = await fetch(`${URL}/tv/top_rated`,{
            headers:{
                Authorization : `Bearer ${TOKEN}`,
                'Content-Type' : 'application/json'
            }
        })

        const data = await res.json()
        return data
        console.log(data.results)
    }catch(err){
        console.log("Error fetching trending show data", err)
    }
}