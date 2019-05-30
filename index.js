const express=require("express")
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const server=express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

mongoose.connect('mongodb://localhost:27017/test')

const taskSchema= new Schema({
title:String,
status:Boolean,
age: {type:Number, default:18, min:18, max:65},
date:{type:Date, default: Date.now}
})

const Task=mongoose.model('Task',taskSchema);

server.post("/task",function(req,res){

    let  task= new Task();

    task.title=req.body.title;
    task.status=true;
    task.age=18;
    task.date=new Date();

    console.log(task);
    task.save();
    res.json(task);

})

server.get("/tasks/:name",function(req,res){
Task.findOne({title:req.params.name}, function(err,doc){
    console.log(doc);
    res.json(doc);
})
})

server.get("/read",function(req,res){
    Task.find({},function(err,doc){
        console.log(doc);
        res.json(doc);
    })
})

server.put("/update/:name",(req,res)=>{
    Task.findOneAndUpdate({title:req.params.name},{title:"WOPAHH!!"},{overwrite:true},function(err,doc){
        console.log(doc);
        res.json(doc);
    })
})

server.delete("/delete/:name",(req,res)=>{
Task.findOneAndDelete({title:req.params.name},function(err,doc){
    console.log(doc);
    res.json(doc);
})
})

server.listen(8080,()=>{
    console.log("server has started")
})