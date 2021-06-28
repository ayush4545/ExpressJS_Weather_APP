const express =require("express")
const app=express();
const port=process.env.PORT || 8000
const path=require("path")
const hbs=require("hbs")

const filePath=path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")
console.log(filePath)


app.set('view engine','hbs')
app.set("views",templatePath)
hbs.registerPartials(partialsPath)
app.use(express.static(filePath))

app.get("",(req,res)=>{
  res.render("index")
  // res.send()
})


app.get("/about",(req,res)=>{
   res.render("about")
  //  res.send("welcome to about page")
})

app.get("/weather",(req,res)=>{
   res.render("weather")
  // res.send("welcome to weather page")
})

app.get("*",(req,res)=>{
   res.render("404Error")
    // res.send("404 error page")
  })


app.listen(port,()=>{
    console.log("it listening on port  8000")
})
