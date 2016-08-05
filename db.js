var data = {
	SpyWare: [
		{name: 'Glass Tubler'}
	],
	Stationary: [
		{name: 'Paper Clips'},
		{name: 'Paper'}
	]
};


module.exports = {	
	
//Why does this not work?
// dunno - never used find index
/*
	getProductIdx: function(item,category){
		return data[category].findIndex(function(element,index){
			console.log(element.name , item, element.name === item )
			if(element.name === item){
				console.log(index);
				return index;
			};
		});
	},
*/
	getCategories: function(){
		return Object.keys(data);
	},

	getProducts: function(name){
    return data[name];
	},

	addCategory: function(name){
		if(!data[name]){
			data[name] = [];			
		}
	},
	deleteCategory: function(product){
		delete data[product];
	},

	addProduct: function(name, category){
		data[category].push({name: name});
	},

	deleteProduct:function(idx, category){
		delete data[category][idx];
	}

};
