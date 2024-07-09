const express = require("express")
const cors = require("cors")
const connection = require("./config/db")
require("dotenv").config()
const PORT = process.env.PORT||5000
const app = express();
const {UserRouter} = require("./routes/user.routes")
const {BudgetRouter} = require("./routes/budget.routes")
app.use(cors())
app.use(express.json())

app.use("/user",UserRouter);
app.use("/budget",BudgetRouter);

app.listen(PORT, async()=>{
try{
await connection;
console.log(`listening on port ${PORT}`);
console.log("connected to db");
}catch(err){
console.log(err);
}
})