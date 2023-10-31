const express  = require("express")
const app = express()
require("dotenv").config()
const port = process.env.port || 5000
const {connection} = require("./configs/db.js")
const { taskRoute } = require("./routes/todo.route.js")
const cors = require("cors")
app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{ 
    res.send("Home Page")
})

app.use("/task",taskRoute)

app.listen(port, async () => {
    try {
        await connection
        console.log("Connected to the DB...");
    } catch (err) {
        console.log("Error while connecting to the DB: " + err);
    }
    console.log(`Server running at port ${port}`)
})  




