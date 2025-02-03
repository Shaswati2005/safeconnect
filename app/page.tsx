import Navbar from "@/components/Navbar";
import Image from "next/image";
import About from "@/components/About";
import Link from "next/link";



export default function Home() {
  return (
    <div className="w-full h-full px-4 py-y bg-blue-100">
      <Navbar/>
      <div className="flex flex-col justify-between lg:flex-row gap-20 py-20 items-center lg:gap-40 lg:px-20">
      <Image src={'/home-bg.png'} alt='home' width={450} height={500} className="bg-pink-50 border rounded-full shadow-lg shadow-pink-100"/>
      <div className="flex flex-col gap-10">
        <div>
        <h1 className="text-blue-400 text-xl">keep your <span className="text-5xl font-bold text-pink-600">family safe</span></h1>
        <h1  className="text-blue-400 text-xl">with <span className="text-5xl font-bold text-pink-600">SAFECONEECT</span></h1>

        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <Link color="primary" href="/signup"  className=" p-4 flex items-center justify-center border rounded-full bg-blue-400 hover:scale-105 transition-all w-[250px] text-xl text-white shadow-lg shadow-blue-300 border-blue-500">
            Sign Up
          </Link>
          <Link color="primary" href="/login" className=" p-4 flex items-center justify-center border rounded-full bg-blue-400 hover:scale-105 transition-all w-[250px] text-xl text-white shadow-lg shadow-blue-300 border-blue-500">
            login
          </Link>

          
      

        </div>


      </div>
      <div>
      
      </div>
     

      </div>

      <About/>
      
      
    </div>
  );
}
