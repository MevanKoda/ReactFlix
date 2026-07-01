import NewsCard from "../components/NewsCard.jsx";
import { FaArrowRight } from "react-icons/fa";
import {useNews} from "../hooks/useNews.js"
import {releaseDate} from '../utils/dateFix.js'


import banner from "../assets/Wick.png";
function News() {
  const newsPosts = useNews()



  return (
    <>
      <div className="bg-[url('./assets/Wick.png')] w-full lg:h-[80vh] h-[60vh] bg-cover bg-center">
        <div className="lg:pt-80 lg:relative lg:pl-20 pt-45 pl-5">
          <p className="absolute  text-white bg-red-400 opacity-70 px-2 py-1 rounded-md text-sm">
            Box Office
          </p>
          <h1 className="lg:text-4xl text-white pt-8 font-bold text-2xl">
            Did you ever watched a masterpiece ?
          </h1>
          <button className="bg-blue-400 lg:text-lg items-center text-white lg:px-5 lg:py-3 rounded-lg lg:mt-6 text-xs px-2 py-1 hidden lg:flex lg:gap-2 lg:items-center cursor-pointer">
            Read Article
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      <div className="relative hidden">
        <div className="flex absolute right-15 top-8 gap-2 items-center">
          <p className="text-white">Sort By : </p>
          <select className="text-blue-600">
            <option>Box Office</option>
            <option>Box Office</option>
            <option>Box Office</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 lg:p-20 p-10  gap-4">

      
        

        {newsPosts.map(post => (
          <NewsCard
          tag={post.category}
          title={post.title}
          description={post.description}
          author={post.author ? post.author : "Anonymous Writer"}
          time={releaseDate(post.published_at)}
          />
        ))}
      
      
      </div>
    </>
  );
}

export default News;
