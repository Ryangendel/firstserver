
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

var database = [
  {product_id:1, name:"super jacket", brand:"northface", techspecs:{material:"polyester", sizes:["s", "l", "xl"]}},
  {product_id:2, name:"mediorce jacket", brand:"patigonia", techspecs:{material:"polyester", sizes:["l", "xl"]}},
  {product_id:3, name:"super vest", brand:"artexrix", techspecs:{material:"polyester", sizes:["s","m", "l", "xl"]}},
  {product_id:4, name:"mediocore vest", brand:"salmon", techspecs:{material:"polyester", sizes:["xl"]}},
  {product_id:5, name:"skis", brand:"k2", techspecs:{material:"wood core", sizes:["180mm", "190mm"]}}
]

app.get('/product/102404/patagonia-nano-puff-jacket-mens', function (req, res) {
 
  console.log(req)
  res.json({brand:"Patagonia", name:"nano-puff", sizes:["s","m", "l"], price:30000})
})

app.get('/product/102405/northface-jacket-mens', function (req, res) {
    console.log("INSIDE ROUTE")
    res.sendFile("/Users/ryangendel/Desktop/firstserver/index.html")
  })

app.get('/product/102407/salomon-mens', function (req, res) {
    console.log("INSIDE ROUTE")
    res.send('THIS IS THE Salomon ')
})

app.get('/:productId', function (req, res) {
    var prodID = req.params.productId
    var chosenproduct = {}
    console.log(prodID)
    for (let i = 0; i < database.length; i++){
      if(prodID==database[i].product_id){
        chosenproduct = database[i]
      }
    }
    res.json(chosenproduct)
  })

app.put('/', function (req, res) {
    res.send('Hello World')
})

app.post('/newjacket', function (req, res) {
  console.log("INSIDE THE POSTTTTTTTTTT REQ")
  console.log(req.body)
  res.send('Hello World')
})

app.delete('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000, ()=>{
    console.log("listeing on port 3000")
})
