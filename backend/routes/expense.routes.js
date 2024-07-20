const express = require("express");
const ExpenseRouter = express.Router();
const { ExpenseModel } = require("../model/expense.model");
const { auth } = require("../middleware/auth");


ExpenseRouter.get("/getexpense", auth, async (req, res) => {
    try {
        const expenses = await ExpenseModel.find({ userID: req.body.userID });
        res.status(200).send(expenses);
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
});

ExpenseRouter.get("/getexpense/:category", auth, async (req, res) => {
    try {
        const expenses = await ExpenseModel.find({ userID: req.body.userID, category: req.params.category });
        res.status(200).send(expenses);
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
});

ExpenseRouter.post("/expense", auth, async (req, res) => {
    const expenseData = {
        ...req.body,
        user: req.body.userID
    };
    const expense = new ExpenseModel(expenseData);
    try {
        await expense.save();
        res.status(201).send(expense);
    } catch (err) {
        res.status(400).send({ err: err.message });
    }
});

module.exports = {
    ExpenseRouter  
}