"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [text, settext] = useState("")
  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }
  

  return (
   <>
  <main>
    <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
      <div className=" flex flex-col gap-5 justify-center ml-[10vw] mr-[2vw]">
        <p className="text-yellow-200 font-bold text-5xl">Everything you are. In one, simple link in bio.</p>
        <p className="text-yellow-200">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        <div className="input flex gap-3">
          <input value={text} onChange={(e)=>settext(e.target.value)} className="px-4 py-3 rounded-md focus:outline-green-300" type="text" placeholder="Enter your Handle"/>
          <button onClick={()=>createTree()} className="font-semibold bg-[#e9c0e9] px-5 hover:bg-[#d9a3e1] py-3 rounded-full">Claim your Bittree</button>
        </div>
      </div>
      <div className="mt-[15vh] flex flex-col gap-5 items-center justify-center mr-[10vw] ml-[2vw]">
        <img src="/home.jpg" alt="Homepage Image" />
      </div>
    </section>
    <section className="bg-[#e9c0e9] min-h-[100vh]">
      
    </section> 
  </main>

   </>
  );
}
