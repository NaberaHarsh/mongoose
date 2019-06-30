// const express=require("express")
// const bodyParser=require("body-parser");
// const mongoose=require("mongoose");
// const Schema=mongoose.Schema;
// const cors=require("cors")

// const server=express();
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded());
// server.use(cors());

// mongoose.connect('mongodb://localhost:27017/todo')

// const taskSchema= new Schema({
// name:String,
// status:Boolean,
// date:{type:Date, default: Date.now}
// })

// const Task=mongoose.model('Task',taskSchema);

// server.post("/task",function(req,res){

//     let  task= new Task();

//     task.name=req.body.name;
//     task.status=req.body.status;
//         task.date=new Date();

//     console.log(task);
//     task.save();
//     res.json(task);

// })

// server.get("/tasks/:name",function(req,res){
// Task.findOne({title:req.params.name}, function(err,doc){
//     console.log(doc);
//     res.json(doc);
// })
// })

// server.get("/read",function(req,res){
//     Task.find({},function(err,doc){
//         console.log(doc);
//         res.json(doc);
               
//     })
// })

// server.put("/update/:name",(req,res)=>{
//     Task.findOneAndUpdate({_id:req.params.name},{status:req.body.status},function(err,doc){
//         console.log(doc);
//         res.json(doc);
//     })
// })

// server.delete("/delete/:name",(req,res)=>{
// Task.findOneAndDelete({_id:req.params.name},function(err,doc){
//     console.log(doc);
//     res.json(doc);
// })
// })

// server.listen(8080,()=>{
//     console.log("server has started")
// })



// Blog starts here

const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require('cors');


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true});


const blogSchema = new Schema({
    title:  {type:String,required:true},
    desc:  {type:String,required:true},
    image:  {type:String,required:true},   
    uid:  {type:String,required:true}
  });

const Blog = mongoose.model('Blog', blogSchema);


server.use(bodyParser.urlencoded())
server.use(bodyParser.json())
server.use(cors());


server.post("/blog",function(req,res){
    
    let b = new Blog();
    b.title = req.body.title;
    b.desc = req.body.desc;
    b.image = req.body.image;
    b.uid = req.body.uid;
    b.save().then((doc)=>{
        res.json(doc);
    })

})   

server.get("/blogs",function(req,res){
    
 Blog.find({uid:req.query.uid}).then((docs)=>{
    res.json(docs);
 })


})   


server.listen(8080,function(){
    console.log("server started");
})