import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) => {
    res.render("index.ejs");
});

app.post("/work",(req,res)=>{
    const title = "Work List"
    res.render("index.ejs",{
        heading: title
    });
});

app.listen(port, () => {
    console.log("Server running on port 3000");
});

