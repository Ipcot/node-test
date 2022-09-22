const express = require("express");
const { v4 } = require("uuid");

const products = require("../../data/products");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: products
    },
  });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    
    const result = products.find(item => item.id === id);
    if(!result) {
        res.status(404).json({
            status: "error",
            code: 404,
            message: `product with ${id} not found`
        })
    }
    
    res.json({
        status: 'success',
        code: 200,
        data: {
            result,
        }
    })
})

router.post('/', (req, res) => {
    const newProduct = {... req.body, id: v4()};
    products.push(newProduct);
    
    res.status(201).json({
        status: 'success',
        code: 201,
        data: {
            result: newProduct
        }
    })
})

module.exports = router;
