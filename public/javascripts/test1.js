console.log("Load test1.js");

var aQuery = function(selector, context) {
    return aQuery.prototype.init();
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

// console.log(aQuery().prototype === aQuery.prototype);

// 18
console.log(aQuery().age)

console.log(aQuery().name())

console.log("end");