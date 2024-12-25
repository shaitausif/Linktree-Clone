"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Bounce } from "react-toastify";
import { useSearchParams } from "next/navigation";

const Generate = () => {
  const searchParams = useSearchParams()
  const [handle, sethandle] = useState(searchParams.get('handle'));
  // const [link, setlink] = useState("");
  // const [linktext, setlinktext] = useState("");
  const [links, setlinks] = useState([{link : "", linktext : ""}])
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("")


  const handleChange = (index, link, linktext) => {
    setlinks((initialLinks)=>{
      return initialLinks.map((item,i)=>{
        if(i == index){
          return {link, linktext}
        }
        else{
          return item
        }
      })
    })
    
  }

  const addLink = () => {
    setlinks(links.concat([{link : "" , linktext : ""}]))
    
  }
  
  


  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      handle: handle,
      pic: pic,
      links : links,
      desc : desc
    });

    console.log(raw)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let r = await fetch("http://localhost:3000/api/add", requestOptions);
    let result = await r.json();
    
    if(result.success){
      toast.success(result.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
     setlinks([{link : "", linktext : ""}])
     setpic("")
     sethandle("")
     setdesc("")
    }
    else{
      toast.error(result.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  
      
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="bg-[#225abf] min-h-[110vh] grid grid-cols-2 ">
        <div className="col1 flex flex-col gap-5 justify-center items-center my-32">
          <h1 className="text-[#ffffffe6] font-bold text-4xl">
            Create your Bittree
          </h1>

          <div className="flex flex-col gap-3 ">
            <h2 className="text-[#ffffffe6] font-semibold text-xl">
              Step 1: Claim your Handle
            </h2>
            <div className="mx-3">
              <input
                value={handle || ""}
                onChange={(e) => sethandle(e.target.value)}
                className="px-4 py-2 mx-2 rounded-full focus:outline-blue-600"
                type="text"
                placeholder="Choose a Handle"
              />
            </div>

            <h2 className="text-[#ffffffe6] font-semibold text-xl">
              Step 2: Add Links
            </h2>
            {links && links.map((item,index)=>{
              return (
                <div key={index} className="mx-3">
                <input

                  value={item.linktext}
                  onChange={(e) => handleChange(index,item.link,e.target.value)}
                  className="px-4 py-2 mx-2 rounded-full focus:outline-blue-600"
                  type="text"
                  placeholder="Enter link text"
                />
  
                <input
                  value={item.link}
                  onChange={(e) => handleChange(index,e.target.value,item.linktext)}
                  className="px-4 py-2 mx-2 rounded-full focus:outline-blue-600"
                  type="text"
                  placeholder="Enter link"
                />
                
              </div>
              )
            })}
           
            <button
                onClick={() => addLink()}
                className="signup w-fit mx-auto font-semibold bg-gray-800 hover:bg-gray-700 text-[#ffffffe6] px-3 py-2 rounded-full"
              >
               + Add Link
              </button>
              

            <h2 className="text-[#ffffffe6] font-semibold text-xl">
              Step 3: Add Picture and Description
            </h2>
            <div className="mx-3 flex flex-col">
              <input
                value={pic}
                onChange={(e) => setpic(e.target.value)}
                className="px-4 py-2 mx-2 rounded-full focus:outline-blue-600"
                type="text"
                placeholder="Enter link to your Picture"
              />
              <input
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
                className="px-4 py-2 mx-2 mt-3 rounded-full focus:outline-blue-600"
                type="text"
                placeholder="Enter Description"
              />
              
              <button 
               disabled={
                pic === "" || 
                handle === "" || 
                desc === "" || 
                links.some((item) => item.link === "" || item.linktext === "")
              }
               onClick={()=>submitLinks()} className="disabled:bg-slate-600 signup font-semibold w-fit mx-2 my-5 bg-gray-800 hover:bg-gray-700 text-[#ffffffe6] px-3 py-2 rounded-full">
                Create your BitTree
              </button>
            </div>
          </div>
        </div>
        <div className="col2 ">
          <img
            className="h-screen w-full object-contain"
            src="/banner.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Generate;
