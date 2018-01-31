// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');



// var user={name:'Mike',age:30};
// var {name}=user; //looks for name property in user and sets name to the name property value
// console.log(name);//will return Mike




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //     text: 'Something to do',
  //     completed: false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Mike',
  //   age: 30,
  //   location:'Riverview'
  // }, (err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo');
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // })

  db.close();
});
