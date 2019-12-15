document.addEventListener("DOMContentLoaded",function(event){

const petsData = [
  {
    name: "Sushi",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2017,
    photo: "cat2.jpg"
  },
  {
    name: "Noa",
    species: "Dog",
    birthYear: 2008,
    photo: "dog.jpg"
  },
  {
    name: "Tuna",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "cat.jpg"
  }
];


function age(birthYear){
  let calculatedAge = new Date().getFullYear() - birthYear; 
  if (calculatedAge == 1){
    return '1 year old'
    } else if (calculatedAge==0) {
      return 'Baby'
      } else {
        return `${calculatedAge} years old`   
    }
}

function foods(foods) {
  return `
  <h4>Favourite Foods</h4>
  <ul class="foods-list">
  ${foods.map(function(food){
    return `<li>${food}</li>`
  }).join('')}
  </ul>

  `
}

function petTemplate(pet){
  return `
  <div class="animal">
  <img class="pet-photo" src="${pet.photo}">
  <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
  <p><strong>Age:</strong> ${age(pet.birthYear)} </p>
  ${pet.favFoods ? foods(pet.favFoods) : ''}
  </div>
  `
}

document.getElementById("app").innerHTML = `
<h1 class="app-title">Pets (${petsData.length} results)</h1>
${petsData.map(petTemplate).join('')}
  

<p class= "footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>


`
})