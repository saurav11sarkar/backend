const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express()
app.use(cors());
app.use(express.json())

const port = process.env.PORT || 5000;

// car-doctorDB
// rVql2QVOIGvdIZZ6


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vxgcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const carCollection = client.db('carDoctorDB').collection('carservice');
    const carBookCollection = client.db('carDoctorDB').collection('bookService');

    app.get('/carservice', async(req, res)=>{
        const curser = carCollection.find()
        const result = await curser.toArray()
        res.send(result)
    })

    app.get('/carservice/:id', async(req, res)=>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const option = {projection:{service_id: 1, title: 1, img: 1, price:1}}
      const result = await carCollection.findOne(query,option)
      res.send(result)
    })

    app.get('/booking', async(req,res)=>{
      let query = {};
      if(req.query?.email){
        query = {email: req.query.email}
      }
      const coster =  carBookCollection.find(query);
      const result = await coster.toArray()
      res.send(result)
    })

    app.post('/booking', async(req,res)=>{
      const book = req.body;
      const result = await carBookCollection.insertOne(book)
      res.send(result)
    })

    app.patch('/booking/:id', async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const updateBooking = req.body;
      const updateDoc = {
        $set:{
          status:updateBooking.status
        }
      }
      const result = await carBookCollection.updateOne(filter,updateDoc)
      res.send(result)
    })

    app.delete('/booking/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await carBookCollection.deleteOne(query)
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req,res)=>{
    res.send("Server is running");
})

app.listen(port, ()=>{
    console.log(`Server is running PORT: ${port}`);
})