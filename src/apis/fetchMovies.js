const URL ='https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN


export const fetchData = async(endpoint)=>{
    try{
        const res = await fetch(`${URL}/movie/popular`,{
            headers : {
                Authorization : `Bearer ${TOKEN}`,
                "Content-Type" : "application/json"
            }
        })

        console.log(res.json)
        return res.json()
    }catch(err){
        console.error(err)
    }
}