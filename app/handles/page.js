import Link from "next/link";
import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({}) {
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  const item = await collection.find({}).toArray();
  if (!item) {
    return notFound();
  }

  return (
    <>
    
      <div className="bg-sky-500 flex w-screen h-screen justify-center items-start py-16">
        <div className="handles rounded-md p-5">
            <h2 className="font-bold text-center mb-2 text-2xl pb-3">Handles</h2>
            {item.length == 0 && <div className="text-center">No Handles in the Database</div>}
          {item.map((item, index) => {
            return (
              <div key={index} className="list">
              <Link href={`/${item.handle}`}> <div className="hover:scale-105 transition-all my-2 min-w-72 p-2 rounded-md text-center bg-white">
                {item.handle}
              </div></Link> 
            </div>
            )
            
          })}
        </div>
      </div>
    </>
  );
}
