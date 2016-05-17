var Bob = function(){

}

Bob.prototype.hey = function(incoming){
  return incoming.split("").reverse().join("");
}

Bob.prototype.thing = "a random string."


var person = new Bob();

console.log(person.thing);
