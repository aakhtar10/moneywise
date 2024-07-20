const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
    amount: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
    userID: { type: String, required: true } 
    
},{
    versionKey: false
}) 

const ExpenseModel = mongoose.model("Expense", expenseSchema);

module.exports = {
    ExpenseModel
}