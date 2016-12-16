module.exports = objTrans = function(obj,func) {
	this.newFunc = [];
	if(!Array.isArray(func)) {
		this.newFunc.push(func)
	} else {
		this.newFunc = func
	}
	if(this.newFunc.length -1 === 0) {
		applyFunc(obj,this.newFunc[0])
		return obj;
	} else {
		applyFunc(obj,this.newFunc[0]);
		this.newFunc.shift()
		return objTrans(obj,this.newFunc)
	}
}

function applyFunc(obj, func) {
	for (var key in obj) {
		var value = obj[key];
		if (value && typeof value === "object") {
			applyFunc(value,func);
		} else {
			obj[key] = func(obj[key])
		}
	}
}
