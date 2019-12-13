import mongoose from 'mongoose';

export interface Todo extends mongoose.Document {
  title : String,
  description : String,
  city : Boolean
}

const todoSchema = new mongoose.Schema({
  title: {
    type :String,
    required : true
  },
  description: {
    type :String,
    required : true
  },
  done : {
    type :Boolean,
    required : false
  }

}) 


const todo = mongoose.model('todos',todoSchema)

export default todo