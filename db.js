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
	
	getProductIdx: function(item,category){
		var idx;
		data[category].findIndex(function(element,index){
			if(element.name === item){
				idx = index;
			};
		});
		return idx;
	},
//Why does this not work?
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
		var items = [];
		data[name].map(function(obj){
			items.push(obj.name); 
		});
		return items;
	},

	addCategory: function(name){
		if(data[name] == null){
			data[name] = [];			
		}
	},

	deleteCategory: function(product){
		delete data[product];
	},

	addProduct: function(newProduct, category){
		data[category].push({name: newProduct});
	},

	deleteProduct:function(item, category){
		var idx = this.getProductIdx(item ,category);
		console.log(idx)
		delete data[category][idx];
	}

}