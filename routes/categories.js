//add required middleware
var express = require('express');
var app = express();
var router = express.Router();

//require db.js to access methods
var db = require('../db');

//Set up routes
//redirects to category.html
router.get('/:category', function (req,res,next){
	res.render('category', {title: 'Product', categories: db.getCategories(),
	items: db.getProducts(req.params.category), category: (req.params.category)});
});

//add new category and redirect to app.js home
router.post('/addcategory' , function (req,res,next){
	db.addCategory(req.body.content);
	res.redirect('/');
});

//delete category and redirect to same category
router.delete('/:category', function(req,res,next){
	db.deleteCategory(req.params.category);
	res.redirect('/');
});

//add new item
router.post('/:category/addproduct', function(req,res,next){
	db.addProduct(req.body.content, req.params.category);
	res.redirect('/products/' + req.params.category);
});

//delete an item
router.delete('/:category/:item', function(req,res,next){
	db.deleteProduct(req.params.item, req.params.category);
	res.redirect('/products/' + req.params.category);
});

module.exports = router;