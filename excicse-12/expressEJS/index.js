import express from "express";
import path from "path";  // Import path to handle view directory properly

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the directory for your views (assuming it's in a folder called 'views')
const dir = path.resolve()
app.set('views', path.join(dir, 'views'));

app.get('/', (req, res) => {
    const products = [
        { title: "Iphone", price: 20000 },
        { title: "Oneplus", price: 29000 },
        { title: "Sony", price: 29300 }
    ];
    res.render('index', { products });  // Pass 'products' array to the view
    console.log('Server rendered EJS file');
});

const port = 3000;
app.listen(port, () => console.log(`Express EJS is running on port: ${port}`));
