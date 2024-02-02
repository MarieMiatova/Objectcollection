const hasProperty = (obj, name) => {
    return name in obj;
  };
  
  console.log(hasProperty({name: "Alice", age: 25}, "age")); 
  console.log(hasProperty({name: "Bob", country: "France"}, "gender")); 
  console.log(hasProperty({type: "fruit", color: "red"}, "color"));