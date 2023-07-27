import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;
const myTodos = [];
const work = [];

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs",{myTodos: myTodos})
  });

app.get("/Work",(req,res)=>{
    res.render("work.ejs",{work: work})
})

app.post("/",(req,res)=>{
    const newItem = req.body.newItem
    myTodos.push(newItem)
    res.render("index.ejs",{myTodos: myTodos})
})

app.post("/work",(req,res)=>{
    const newItem = req.body.newItem
    work.push(newItem)
    res.render("work.ejs",{work: work})
    console.log(work);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})