import { Schema, model, models } from "mongoose";

const ExpenseSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  user:{
    type: String,
    ref:'User',
    required:true
  }
});

const AllExpense = models.AllExpense || model("AllExpense", ExpenseSchema);

export default AllExpense;
