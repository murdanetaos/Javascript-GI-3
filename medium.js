function cutPizzaSlices(totalSlices) {
    return function(people) {
      var slicesPerPerson = totalSlices / people;
      return "Each person gets " + slicesPerPerson.toFixed(2) + " slices of pizza";
    };
  }
  
  var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); // prints "Each person gets 2.67 slices of pizza"
