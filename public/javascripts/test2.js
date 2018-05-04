console.log("Load test2.js");

var aQuery = function(selector, context) {
    return new aQuery.prototype.init();
}
aQuery.prototype = {
 init: function() {
    this.age = 18
    console.log(this);
     return this;
 },
 name: function() {
    return "name()";
},
 age: 20
}

aQuery.prototype.init.prototype = aQuery.prototype;

// console.log(aQuery().prototype === aQuery.prototype);

// 18
console.log(aQuery().age)

//Uncaught TypeError: Object [object Object] has no method 'name' 
console.log(aQuery().name())

console.log("end");