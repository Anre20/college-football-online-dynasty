const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 5000;
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require("path");

// app.use(cors({ origin: 'http://localhost:5173' }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "dist")));


async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to MongoDB!');

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDb();

app.use('/user', require('./routes/userRoutes'));


app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message});
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
