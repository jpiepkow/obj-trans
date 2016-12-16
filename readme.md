obj-trans
=======
Description: module that will run a function/ functions recursively over an object to transform all of the values at any nest level

Getting Started:

	npm install obj-trans --save
	
example:

	objTrans = require('obj-trans');
	
	var testObj = {one:1,two:2,nestOne:{one:1,two:2}};
	var testFunction = function(x){return x*2);
	
	return objTrans(testObj,testFunction);
	
	//returns {one:2,two:4,nestOne:{one:2,two:4}}
	
	//second param that takes a function can also take an array of functions.
	
Method:
 
 	objTrans(object,function/functions)
 	
 		params:
 			object:the object your transforming
 			function(functions): either a function or array of functions to run.
 			
 		return: newly transformed object.
 		
Things to note:

1. when using an array of functions the first function will fully be applied and then the new object will be passed in and transformed with the next until the array is drained.
2. Remember if calling objTrans on the same object more then once the object is a ref so even though your not storing the return its changing the origional object.
3. Make sure to type check inside your transform functions because it will be ran on every value regardless of it being a string/number/array.
4. Arrays are also treated as values...so each value in an array is also ran through transform functions.

Function format:

	function(x) { //x is the orig value pre transformation.
		return x*2 //return the orig value transformed.	
	}