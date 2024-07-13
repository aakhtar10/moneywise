const express = require("express");
const BudgetRouter = express.Router();
const { BudgetModel } = require("../model/budget.model");
const {auth} = require("../middleware/auth");


BudgetRouter.get("/", auth, async (req, res) => {
    try {
        const budgets = await BudgetModel.find({ userID: req.body.userID });
        res.status(200).send(budgets);
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
});


BudgetRouter.post("/budget", auth, async (req, res) => {
    const budgetData = {
        ...req.body,
        user: req.body.userID
    };
    const budget = new BudgetModel(budgetData);
    try {
        await budget.save();
        res.status(201).send(budget);
    } catch (err) {
        res.status(400).send({ err: err.message });
    }
});

module.exports ={ BudgetRouter }
