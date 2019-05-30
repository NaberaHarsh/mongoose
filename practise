const express=require("express")
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const server=express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());



mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const taskSchema = new Schema({
    title:  {type:String, required:true},
    status: {type:Boolean, required:true},
    age: {type:Number, min:18, max:65, required:true},
    date: { type: Date, default: Date.now },    
  });

  const Task=mongoose.model('Task',taskSchema);

  server.post("/task",function(req,res){
      let task=new Task();

      task.title=req.body.title;
      task.status=true;
      task.date= new Date();
      task.age=18;
    
      task.save();
      console.log(task);
      res.json(task);
      
  })


// server.get("/task/:name",function(req,res){
//     Task.findOne({title:req.params.name}, function(err,doc){
//         console.log(doc);
//         res.json(doc);
//     })

// })

server.get("/tasks",function(req,res){
    Task.find({},function(err,docs){
        console.log(docs);
        res.json(docs);  // this is an array which contains all task objects
    })
})

server.put("/update/:name",function(req,res){
    Task.findOneAndUpdate({_id:req.params.name}, {$set:{title:'jjj'}}, function(err,doc){
        console.log(doc);
            })

})

server.delete("/delete/:id", function(req,res){
    Task.findOneAndDelete({_id:req.params.id}, function(err,doc){
        console.log(doc);
        })
})

server.listen(8080,()=>{
    console.log("Server Has Started")
})