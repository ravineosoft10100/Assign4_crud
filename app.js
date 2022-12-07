const express=require('express');
const mongoose=require('mongoose');
const app=express();
const PORT=5010;

//Connecting to MongoDB
mongoose.connect("mongodb+srv://ravicom571:<password>@cluster0.2xfyztm.mongodb.net/?retryWrites=true&w=majority")
.then(res=> console.log("Connected"))
.catch(err=> console.log("error"+err))

//Middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//setting views
app.set("view engine","ejs");
app.set("views","./views");

app.use("/static", express.static("public"));

//route prefix
app.use("/",require("./routes/route"));

console.log()
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Work at http://127.0.0.1:${PORT}`)
})
