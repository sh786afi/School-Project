var express = require('express');
var bodyParser=require('body-parser');
var {mongoose}= require('./db/mongoose');
var {Class}=require('./models/class');
//var {users}=require('./models/users');
var {ObjectID}=require('mongodb')
var _=require('lodash');

var app=express();
app.use(bodyParser.json());
app.post('/class',(req,res)=>{
    console.log(req.body);
    var newClass=new Class({
        ClassName: req.body.ClassName,
        CapcityOfStudent:req.body.CapcityOfStudent
    });
    newClass.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});
app.get('/class',(req,res)=>{
    Class.find().then((allClasses)=>{
        res.send({allClasses});
    },(e)=>{
        res.status(400).send(e);
    })
});

app.get('/class/:id',(req,res)=>{
    var id=req.params.id;
    // res.send(req.params);
    console.log('kdflassssssj',id);

if(!ObjectID.isValid(id)){
    res.send(404).send();
    
}
 Class.findById(id).then((newClass)=>{
     if(!newClass){
        console.log('kdflassssssj');
         return res.status(404).send();
     }
    res.send({newClass});
 }).catch((e)=>{
     res.status(400).send();
})
});
app.delete('/class/:id',(req,res)=>{
    var id =req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }
    Class.findByIdAndRemove(id).then((todo)=>{
        if(!newClass){
            return res.status(404).send();
        }
        res.send({newClass});
    }).catch((e)=>{
        res.status(400).send();
    })
});
app.patch('/class/:id',(req,res)=>{
    var id =req.params.id;
    var body=_.pick(req.body, ['ClassName','CapcityOfStudent']);
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Class.findByIdAndUpdate(id,{$set:body},{new:true}).then((newClass)=>{
        if(!newClass){
            return res.status(404).send();
        }
        res.send({newClass});
    }).catch((e)=>{
        res.status(400).send();
    })
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Started on port ${PORT}`);
});
module.exports={app};