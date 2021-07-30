'use strict';

const restaurant = {
  name: 'Red Chilly',
  location: 'Infront of Police Station, Sonepur, Odisha',
  categories: ['South-Indian', 'Odisha', 'Hyderabadi'],
  starterMenu: ['Roasted Nuts', 'Fried Papad', 'Chicken Pakoda'],
  mainMenu: ['Biryani', 'Desi Indian Thali', 'Standard Thali'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//destructuring of objects
const { name, openingHours, categories } = restaurant;
console.log(name);
console.log(openingHours, categories);
// console.log(restaurant.categories);

//setting attributes name in destructuring objects

//traditional destructuring
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a,b,c);

// //Modern Destructuring of arrays
// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

//Desturcturing the categories array
// let [main, secondary] = restaurant.categories;

//Traditional Swapping
// const temp = main;
// main = secondary;
// secondary = temp;

// //receiving 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter + ',  ' + mainCourse);

// //nested arrays destructuring
// const nested = [2, 3, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
