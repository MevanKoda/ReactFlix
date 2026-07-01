import newsCover from '../assets/supernatural.png'

function NewsCard(props){
    return(
        <div className="text-white w-full h-[100%] relative bg-gray-800 rounded-lg cursor-pointer mt-20 ">
            <p className="absolute float-left top-4 left-4 bg-gray-800 px-2 py-1 rounded-md text-sm">{props.tag}</p>
            <img className="w-full rounded-t-lg" src={newsCover} />
            <h1 className="text-xl font-bold pt-4 px-5">{props.title}</h1>
            <p className="text-sm text-gray-400 px-5 pt-4">{props.description}</p>
            <div className="pt-4 flex gap-4 text-sm text-gray-300 p-5 absolute bottom-2">
                <p>By: {props.author}</p>
                <p>{props.time}</p>
            </div>
        </div>
    )


}

export default NewsCard