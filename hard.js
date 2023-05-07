var getPII = (function() {
    var pii = {
      name: "Miguel Urdaneta",
      ssn: "7044318989"
    };
  
    return {
      getName: function() {
        return pii.name;
      }
    };
  })();
  
  console.log(getPII.getName()); // prints "Miguel Urdaneta"
  console.log(getPII.ssn); // prints "undefined"
  