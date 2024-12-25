import clientPromise from "@/lib/mongodb"


export async function POST(request) {
      const body = await request.json()
      const client = await clientPromise;
      const db = client.db("bittree") 
      const collection = db.collection("links")

    // Check if the bittree already exists or not in the database
    const doc = await collection.findOne({handle : body.handle})
    if(doc){
      return Response.json({success : false, error : true, result : null, message: 'This Bittree already exists!' })
    }
    const result = await collection.insertOne(body)
    return Response.json({success : true, error : false, result, message: 'Your Bittree has been generated.' })
  }