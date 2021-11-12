const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors')

dotenv.config();
const app = express();

mongoose.connect(`mongodb+srv://admin:${process.env.PASSWORD}@cluster0.ksaud.mongodb.net/Sample?retryWrites=true&w=majority`);
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', require('./routes/api'));
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message})
});

app.listen(process.env.port || 8080, () => {console.log("Listening to 8080")})