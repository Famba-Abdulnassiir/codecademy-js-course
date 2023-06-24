const groceryList = [
    "orange juice",
    "bananas",
    "coffee beans",
    "brown rice",
    "pasta",
    "coconut oil",
    "plantains",
  ];

  //.pop() => deletes last item of the array, it doesn't take any arguments
  //.push() => Adds items to the array but adds at the end of an array eg array.push('item 1', 'item 2')
  //.length => Determins the number of Items in the array. array.length then u can print out or use it the way u intend
  
  //This deletes the first Item in an array.
  groceryList.shift();
  console.log(groceryList);
  
  //Adds Element on the first position of the array. Ir will add popcorn in the first place.
  groceryList.unshift("popcorn");
  console.log(groceryList);
  
  //Returns a shallow copy of an array or part of it without modifying the original.
  console.log(groceryList.slice(1,4));
  console.log(groceryList);
  
  //Helps us to find a particular index of an Item in the list
  const pastaIndex = groceryList.indexOf('pasta');
  console.log(pastaIndex)
  