import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "./hooks/useGif";

export default function Tag() {

  const [tag,setTag] = useState('bot');

  const {gif,isLoading,fetchData} = useGif(tag);


  return (
    <div className="w-1/2  bg-lime-200 gap-y-5 mt-[15px] rounded-lg border-black-700 flex flex-col items-center">
      <h1 className="text-3xl underline uppercase font-semibold">Search Gifs</h1>
      {
        isLoading ? 
        (<Spinner></Spinner>) :
        (<img
        src={gif}
        width={450}
        ></img>)
      }
      <input
      type="text"
      className="w-10/12 text-center border-solid rounded-[8px] border-collapse py-[8px] px-[12px] font-medium text-richblack-900"
      value={tag}
      onChange={(event)=>{setTag(event.target.value)}}></input>
      <button onClick={fetchData}
      className='w-10/12 mt-1 mb-6 rounded-[8px] bg-yellow-300 py-[8px] px-[12px] font-medium text-richblack-900'>
        Generate
      </button>
    </div>  );
}
