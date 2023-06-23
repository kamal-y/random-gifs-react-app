import Spinner from "./Spinner";
import useGif from "./hooks/useGif";


export default function Random() {

  const {gif,isLoading,fetchData} = useGif();

  return (
    <div className="w-1/2  bg-rose-200 gap-y-5 mt-[15px] rounded-lg border-black-700 flex flex-col items-center">
      <h1 className="text-3xl underline uppercase font-semibold">Random Gifs</h1>
      {
        isLoading ? 
        (<Spinner></Spinner>) :
        (<img
        src={gif}
        width={450}
        ></img>)
      }
      <button onClick={fetchData}
      className='w-10/12 mt-6 mb-6 rounded-[8px] bg-yellow-300 py-[8px] px-[12px] font-medium text-richblack-900'>
        Surprise me
      </button>
    </div>  );
}
