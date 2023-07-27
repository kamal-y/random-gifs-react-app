import { useEffect, useState } from "react";
import gotNothingGif from "./i-got-nothing-calvin-payne.gif"
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const useGif = (tag) => {

  const [gif,setGif] = useState("");
  const [isLoading,setIsLoading] = useState(true);

  async function fetchData(){
    setIsLoading(true);
    let {data} = await axios.get(tag ? `${url}&tag=${tag}` : url)
    console.log("data ",data.data)
    let imageSource = data.data.images?.downsized_large?.url;

    if(!imageSource){
      imageSource = gotNothingGif
    }

    setGif(imageSource);
    setIsLoading(false);
    // console.log(data.data.images.downsized_large.url);
  }

  useEffect(()=>{
    fetchData('bot')
  },[])

  return {gif,isLoading,fetchData}
}

export default useGif