// server.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
//import express from "express";
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

import path from "path";
import { fileURLToPath } from "url";

main();

async function main(){
   mongoose.connect('mongodb://localhost/newdb');
   
   app.use(express.json());
   app.use(cors());
   
   

   const PORT = 5000;
   //app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


   // const __filename = fileURLToPath(import.meta.url);
   // const __dirname = path.dirname(__filename);app.use(express.static(path.join(__dirname, "../frontend/dist")));app.get('/{*any}', (req, res) => {
   // res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
   // });



   const userSchema = new mongoose.Schema({
      name: {type: String, required: false},
      emeralds: { type: [String], default: [] }
   })
   
   const User = mongoose.model("User", userSchema);

   app.get("/api", (req, res) => {
      res.json({ message: "Hello from Express backend!" });
   });
   
   app.get("/", function(req, res) {
      res.send("<h1>Welcome to the player list!</h1>");
   });
   
   app.get("/api/user/:id", async function(req, res) {
      try {
         const user = await User.findById(req.params.id);
         if (!user) {
            return res.status(404).send({ error: 404, msg: "User not found" });
         }
         res.send(user);
      } catch (error) {
         console.error(error);
         res.status(500).send({ error: 500, msg: "Server error" });
      }
      
   });
   
   app.put("/api/user/:id", async function(req, res){
      newUser = req.body;
      console.log(newUser);
      id = req.params.id;
      let user = await User.findById(id);
      
      if(user){
         await User.updateOne({_id: id}, {$set: newUser});
         user = await User.findById(id);
         res.send({"id": id, "user":user});
      }else{
         res.status(404).send({"error": 404,
            "msg": "User not found"});
         }
      });
      
   app.delete("/api/user/:id", async function (req, res){
      id = req.params.id;
      let user = await User.findById(id);
      
      if(user){
         try{
            await User.deleteOne({_id: id});
            res.send({"messpoints":`deleted user of id=${id}`, 
               "response_code":200})
            } catch (err){
               console.log(err);
               res.status(500).send(err);
            }
         }else{
            res.status(404).send({"error": 404,
               "msg": "User not found"});
            }
         })
         
   app.delete("/api/users", async function (req,res){
      let users = await User.find();
      if(users){
         try{
            await User.deleteMany();
         } catch (err){
            console.log(err);
            res.status(500).send(err);
            
         }
      }else{
         res.status(404).send({"error": 404,
            "msg": "User not found"});
         }
      })
            
   app.post("/api/user", async function (req, res){
      let user = await User.create(req.body);
      res.send({"id": user["_id"], "user":user});
   });
         
   app.get("/api/users/:filter", async function(req,res) {
      const filter = JSON.parse(req.params.filter);
      let users;
      users = await User.find(filter);
      res.send(users);
      
   });
   
   app.get("/user/:pos", function(req, res) {
      index = req.params.pos;
      if(index > users.length - 1) {
         res.send("<h1>User Not Found</h1>", 404);
      }
      res.send(`<p>Name: ${users[index].name}</p><p>Emeralds: ${users[index].emeralds}</p>`);
   });
   
   app.get("/api/users", async function(req, res){
      let users = await User.find();
      res.send(users);
   })
   
   app.patch("/api/user/:id/emeralds", async function(req,res){
      const { emerald } = req.body;
      try {
         const user = await User.findById(req.params.id);
         if (!user) return res.status(404).send({ error: 404, msg: "User not found" });
         
         if (!user.emeralds.includes(emerald)) {
            user.emeralds.push(emerald);
            await user.save();
         }
         
         res.send(user);
      } catch (err) {
         console.error(err);
         res.status(500).send({ error: 500, msg: "Server error" });
      }
   });
   
   
   
   //app.listen(5000, function(){console.log("Listening on port 5000...")})
   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);app.use(express.static(path.join(__dirname, "../frontend/dist")));app.get('/{*any}', (req, res) => {
   res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
   });
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

}
      
         