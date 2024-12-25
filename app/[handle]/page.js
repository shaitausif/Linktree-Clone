import Link from "next/link"
import { notFound } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const handle = decodeURIComponent(await params.handle);
  
    const client = await clientPromise;
    const db = client.db("bittree") 
    const collection = db.collection("links")

    const item = await collection.findOne({handle : handle})
    if(!item){
        return notFound()
    }

    return (
        <div className="bg-sky-500 bg-gradient-to-r from-violet-500 to-fuchsia-500 flex min-h-screen  justify-center items-start py-20">
   
           
            <div className="photo flex flex-col justify-center items-center">
                <img className="rounded-full w-24 h-24 object-cover"  src={item.pic} alt="" />
                <span className="font-semibold text-xl">@{item.handle}</span>
                <span className="desc w-80 text-center">{item.desc}</span>
                <div className="links my-2">
                    {item.links.map((item, index)=>{
                        return (
                           <Link key={index} href={item.link}><div className="hover:scale-105 transition-all hover:opacity-95 bg-white p-3 min-w-96  text-center shadow-lg rounded-md my-3" >
                                {item.linktext}
                                
                            </div></Link>
                        )
                    })}
                </div>
            </div>

        </div>
    )
  }