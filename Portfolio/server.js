// server.js

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

main();

async function main(){
    mongoose.connect('mongodb://localhost/newdb');

    const userSchema = new mongoose.Schema({
        points: {type: String, required: true}, 
    }) 
}