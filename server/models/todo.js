var mongoose=require('mongoose');
var Todo=mongoose.model('Todo',{
  text:{
    type:String,
    required: true,
    minlength: 1,
    trim: true //removes leading and trailing spaces of a string
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default:null
  }
});

module.exports={
  Todo:Todo
};
