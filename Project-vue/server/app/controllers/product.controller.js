const db = require('../models')
const Product = db.products

exports.findAll = (req, res) => {
    Product.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'table not found'
            })
        })
}

exports.create = (req, res) => {
   // console.log(req.body)
   Product.create(req.body)
   .then(data => {
    res.send(data)
   })
   .catch(e => {
    res.status(500).send({
        message: 'Could not insert into DB'
    })
   })
}