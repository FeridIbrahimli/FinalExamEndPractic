const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 1234
const DB = process.env.DB_URL

app.use(cors())
app.use(bodyParser.json({ limit:"50mb" }))
app.use(bodyParser.urlencoded({ limit:"50mb", extended: true }))

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to DB succesfully!")
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })

  const {Schema} = mongoose

  const productSchema = new Schema(
    {
      image: { type: String },
      title: { type: String },
      description: { type: String}
    },
    {
      timestamps: true
    }
  )

  const Products = mongoose.model("Products", productSchema)

  app.get('/', (req, res) => {
    res.send({data: products})
  })

//get all
app.get('/products', async (req, res) => {
  try {
    const products = await Products.find({})
    if (products.length > 0) {
      res.status(200).send({ message: "success", data: products })
    } else {
      res.status(204).send({ message: "data is empty" })
    }
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

//get by id
app.get('/products/:id', async (req, res) => {
  const {id} = req.params
  try {
    const product = await Products.findById(id)
    if(product) {
      res.status(200).send({ message:"success", data: product })
    } else{
      res.status(204).send({ message:"data is empty" })
    }
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

//post
app.post("/products", async (req, res) => {
  const newProduct = new Products({ ...req.body })
  try {
    await newProduct.save()
    res.status(201).send({
       message:"post succesfully",
        data: newProduct })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

//delete
app.delete("/products/:id", async (req,res) => {
  const {id} = req.params
  try {
    const deletedProduct = await Products.findByIdAndDelete(id)
    const products= await Products.find({})
    res.status(200).json({
      message:"success",
      deletedProduct: deletedProduct,
      allProducts: products
    })
  } catch (error) {
    res.status(500).send({ message: error.message})
  }
})