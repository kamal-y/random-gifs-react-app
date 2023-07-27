import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return(
    <div className="relative flex w-full h-full flex-col background">
      <h1 className=' bg-blue-50 text-center mx-auto rounded-lg mt-[40px] ml-[25px] font-bold mr-[25px] p-3 text-xl text-stone-950'>RANDOM GIFS</h1>

      <div className="flex flex-col items-center gap-x-5 w-full mt-[30px] mb-[30px] p-4">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
