const mongoose = require("mongoose");

const budgetSchema = mongoose.Schema({
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    userID: { type: String, required: true } 
    
},{
    versionKey: false
})
 
const BudgetModel = mongoose.model("Budget", budgetSchema);

module.exports = {
    BudgetModel
}