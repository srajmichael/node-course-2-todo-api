var express=require('express');
var bodyParser=require('body-parser');


var{mongoose}=require('./db/mongoose.js');
var {User}=require('./models/user.js');
var {Todo}=require('./models/todo.js');


var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});





app.listen(3000,()=>{
  console.log('Started on port 3000');
});















// var nextTodo=  new Todo({
//   text: '  Edit this video   '
// });
//
// nextTodo.save().then((doc)=>{
//   console.log('New saved todo',doc);
// }, (err)=>{
//   console.log('Unable to save todo', err);
//
// });




//
// var firstUser= new User({
//   email: 'mike@gmail.com'
// });
// var secondUser=new User();
//
// secondUser.save().then((doc)=>{
//   console.log('User saved',doc);
// },(err)=>{
//   console.log('Unable to save', err)
// });
