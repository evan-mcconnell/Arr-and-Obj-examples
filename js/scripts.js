
// array of dino info
const dinos = [
  dino1 = {
    name: "Tyrannosaurusrex",
    period: "Mesozoic",
    diet: "carnivore",
    walksOnForLegs: false,
    yearDiscovered: 1902,
    popularity: 999
  },

  dino2 = {
    name: "Brachiosaurus",
    period: "Jurassic",
    diet: "herbivore",
    walksOnForLegs: true,
    yearDiscovered: 1900,
    popularity: 959
  },

  dino3 = {
    name: "Parasaurolophus",
    period: "Cretaceous",
    diet: "herbivore",
    walksOnForLegs: true,
    yearDiscovered: 1922,
    popularity: 500
  },

  dino4 = {
    name: "Stegosaurus",
    period: "Jurassic",
    diet: "herbivore",
    walksOnForLegs: true,
    yearDiscovered: 1876,
    popularity: 903
  }
]

//array of numbers
const nums = [1,2,3,4,5,6,7,8,9];

$(document).ready(() => {

  //filter array of numbers for evens
  let evens = nums.filter((num) => {
    return num % 2 === 0
  });

  console.log(evens);

  //search array of objects by the value of specific keys and make a new array with those that satisfy true
  function searchIt(arr, query1, query2) {
    return arr.filter((dino) => {
      return (dino.diet === query1) && (dino.period === query2)
    });
  }

  console.log(searchIt(dinos, "herbivore", "Jurassic"));

  //sort


});






//
