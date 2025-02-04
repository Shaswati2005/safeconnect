"use client"


import Navbar from "@/components/Navbar";
import Image from "next/image";
import About from "@/components/About";
import Link from "next/link";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div className="w-full h-full  py-y bg-blue-100">
      <Navbar/>
      <div className="flex flex-col gap-25 items-center justify-start">
      <div className="flex flex-row items-center justify-between flex-wrap gap-20 py-20  lg:gap-40 lg:px-20">
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

      <div className="pt-10  flex flex-col items-center justify-between gap-10">
        <h2 className="font-bold text-3xl text-pink-400 hover:scale-105 transition all border p-5 rounded-xl hover:shadow-xl hover:shadow-pink-200 bg-pink-100">Frequently Asked Questions</h2>
      <Faqs question="afjafa aetaetaewta gagfawrawt" answer="lorem /lorem ahuaraerawruth      aeruaeofbaigag         riawhobafaweogae    awaiothawotiabgkajbog awriawoethaowtgaoga gaoireaoieiwigbagfoawe eaoiroatheawgfakegio faoirhaoefbaoifnaowea oairhaotehaotnta oariaoethrafoaei" />

      </div>

      </div>

     <Footer/>
     
      
      
    </div>
  );
}
