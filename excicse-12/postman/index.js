const express = require('express');
const app = express();

app.use(express.json())

const books = [
    {
        "id": 1,
        "name": "To Kill a Mockingbird",
        "price": 9.99
    },
    {
        "id": 2,
        "name": "1984",
        "price": 8.49
    },
    {
        "id": 3,
        "name": "The Great Gatsby",
        "price": 10.29
    },
    {
        "id": 4,
        "name": "Pride and Prejudice",
        "price": 7.99
    },
    {
        "id": 5,
        "name": "Moby Dick",
        "price": 11.50
    },
    {
        "id": 6,
        "name": "War and Peace",
        "price": 12.99
    },
    {
        "id": 7,
        "name": "The Catcher in the Rye",
        "price": 8.79
    },
    {
        "id": 8,
        "name": "Crime and Punishment",
        "price": 10.50
    },
    {
        "id": 9,
        "name": "The Odyssey",
        "price": 9.49
    },
    {
        "id": 10,
        "name": "Jane Eyre",
        "price": 7.59
    }
]


app.get('/', (req, res) => {
    res.send('Hello world')
    console.log('Hello')
})


app.get('/books', (req, res) => {
    if (req.query.show === 'all') {
        return res.json(books)
    }

    if (req.query.price == '8') {
        const filterBook = books.filter(pri => pri.price <= 8)
        return res.json(filterBook)
    }
    
    res.json(books)
})

app.post('/books', (req,res)=>{
    const book = req.body;
    books.push(book)
    res.json(books)
})


app.listen(3000, () => {
    console.log('Surver is running 3000')
})