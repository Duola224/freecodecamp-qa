const express = require("express");
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const studentRoute = require('./routes/student.route.js');

const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.use('/products', productRoute);
app.use('/students', studentRoute);

app.get('/', (req, resp) => resp.send('Welcome to my crup-api project from FCC!'));


mongoose.connect('mongodb+srv://dbAdmin:VcvSjBiPbAkek26V@backend-db.eznzib6.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('Atlas DB Connected!');
        app.listen(3000, () => console.log("CRUD API For absolute beginners!"));
    })
    .catch((e) => console.log(`connection failed with message: ${e.message}`));