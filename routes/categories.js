//add required middleware
var express = require('express');
var app = express();
var router = express.Router();

//require db.js to access methods
var db = require('../db');

//Set up routes
//redirects to category.html
router.get('/:category', function (req,res,next){
	res.render('category', {
    title: 'Product',
    categories: db.getCategories(),
	  products: db.getProducts(req.params.category),
    category: (req.params.category)
  });
});

//add new category and redirect to app.js home
router.post('/' , function (req,res,next){
	db.addCategory(req.body.name);
	res.redirect('/categories/' + req.body.name);
});

//delete category and redirect to same category
router.delete('/:category', function(req,res,next){
	db.deleteCategory(req.params.category);
	res.redirect('/');
});

//add new item
router.post('/:category/products', function(req,res,next){
	db.addProduct(req.body.name, req.params.category);
	res.redirect('/categories/' + req.params.category);
});

//delete an item
router.delete('/:category/products/:idx', function(req,res,next){
	db.deleteProduct(req.params.idx, req.params.category);
	res.redirect('/categories/' + req.params.category);
});

module.exports = router;
