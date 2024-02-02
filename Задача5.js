const getPropertyValue = (obj, propertyName) => {
    if (propertyName in obj) {
      return obj[propertyName];
    } else {
      return undefined;
  };
};


console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell".
