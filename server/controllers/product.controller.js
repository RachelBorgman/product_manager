const Product = require('../models/product.model');

module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

// module.exports.createNewProduct = (req, res) => {
//     Product.create(req.body)
//         .then(newlyCreatedProduct => {
//             res.json({ product: newlyCreatedProduct })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}

// Change all user below!

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then((allProducts) => {
            // console.log("ALL PRODUCTS:", allProducts)
            res.json(allProducts)
            // console.log("ALL PRODUCTS[0]:", allProducts.arg1[0])
        })
        .catch((err) => {
            console.log(err)
            // res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json(oneSingleProduct)
        })
        .catch((err) => {
            res.json((err))
        });}



module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            console.log("THIS IS UPDATED PRODUCT BEFORE RES.JSON: ", updatedProduct)
            res.json(updatedProduct)
            console.log("THIS IS UPDATED PRODUCT AFTER RES.JSON: ", updatedProduct)
        })
        .catch((err) => {
            res.json(err)
        });}

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => res.json(err));}



