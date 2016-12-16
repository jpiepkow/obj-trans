var objTrans = require('./index.js');
var functionToRun = function(x) {
	return x*3
};
var secondTest = [function(x) {
	return x*3
},function(x) {
	return x/3
}]
var obj = {
	array:[1,2,3,4,5],
	one:23,
	two:55,
	three:{
		nested:12
	},
	n:{
		double:
		{
			trip:32,
			blah:1
		}
	}
}
var secondObj = {
	array:[1,2,3,4,5],
	one:23,
	two:55,
	three:{
		nested:12
	},
	n:{
		double:
		{
			trip:32,
			blah:1
		}
	}
}
var testOne = objTrans(obj,functionToRun)
var testTwo = objTrans(secondObj,secondTest)
console.log(testOne);
console.log(testTwo);
