const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// mongo db

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vxgcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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

    const coffeeCollection = client.db('coffeeDB').collection('coffee');
    const userCollection = client.db('userDB').collection('user');

    app.get('/coffee', async(req,res)=>{
        const custer = coffeeCollection.find();
        const result = await custer.toArray();
        res.send(result);
    })

    app.get('/coffee/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await coffeeCollection.findOne(query)
        res.send(result);
    })

    app.post('/coffee', async(req,res)=>{
        const user = req.body;
        console.log(user)
        const result = await coffeeCollection.insertOne(user);
        res.send(result);
    })

    app.put('/coffee/:id', async(req,res)=>{
        const updatedCoffee = req.body;
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)}
        const option = {upsert: true};
        const coffeeUpdate = {
            $set: {
                name: updatedCoffee.name,
                quentity: updatedCoffee.quentity,
                supplier: updatedCoffee.supplier,
                teste: updatedCoffee.teste,
                category: updatedCoffee.category,
                details: updatedCoffee.details,
                photo: updatedCoffee.photo
            }
        }
        const result = await coffeeCollection.updateOne(filter,coffeeUpdate,option)
        res.send(result)

    })

    app.delete('/coffee/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await coffeeCollection.deleteOne(query);
        res.send(result);
    })

    // User database

    app.get('/user', async(req,res)=>{
      const coster = userCollection.find();
      const result = await coster.toArray();
      res.send(result)
    })

    app.post('/user', async(req, res)=>{
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result)
    })

    app.patch('/user', async(req,res)=>{
      const user = req.body;
      const filter = {email: user.email}
      const updateDoc = {
        $set:{
          loginAt: user.loginAt
        }
      }
      const result = await userCollection.updateOne(filter,updateDoc)
      res.send(result);
    })

    app.delete('/user/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id) }
      const result = await userCollection.deleteOne(query);
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

// sever chack

app.get('/', (req,res)=>{
    res.send('sarver is running')
})

app.listen(port, ()=>{
    console.log(`server is running port: ${port}`);
})