
function Widget(props){
    return(
        <div className=" lg:w-full h-0.2 m-2 rounded py-4 relative w-0.8">
            <img src={`https://image.tmdb.org/t/p/w500${props.cover}`} className="h-2/3"></img>
            <p className="text-white bg-blue-800 text-center px-2 py-1 rounded text-sm absolute top-8 left-4">{props.tag}</p>
    
        </div>
    )

}

export default Widget