

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

$(document).ready(function() {
  function searchIt(arr, query1, query2) {
    return arr.filter(function(dino) {
      if ((dino.diet === query1) && (dino.period === query2)) {
        return true;
      } else {
        return false;
      }
    });
  }
  console.log(searchIt(dinos, "herbivore", "Jurassic"));
});




//
