

async function getAllCategories() {
  let url = `https://www.themealdb.com/api/json/v1/1/categories.php`
  const response = await fetch(url)
  const data = await response.json()

  return data.categories
}

function displayAllCategories(categories) {
  const wrapper = document.querySelector(".categoryWrapper")
  wrapper.innerHTML = ``
  for (let i = 0; i < categories.length; i++) {
    wrapper.innerHTML = wrapper.innerHTML + `
    <div class="category">
  
        <div class="front">
          <img src="${categories[i].strCategoryThumb}" alt="">
          <h4>${categories[i].strCategory}</h4>
        </div>
  
        <div class="back">
          <p>
            ${categories[i].strCategoryDescription}
          </p>
        </div>
  
    </div>
    
    `
  }
}

async function getRandomMeal() {
  let url = `https://www.themealdb.com/api/json/v1/1/random.php`
  const response = await fetch(url)
  const data = await response.json()

  return data.meals[0]
}

function displayRandomMeal(meal) {
  const randomMealWrapper = document.querySelector(".randomMealWrapper")
  randomMealWrapper.innerHTML = `

  <div class="randomMealContent" style="background-image: url(${meal.strMealThumb});">
    <div class="overlay">
      <div class="mealInfo">
        <h4>Meal Name: ${meal.strMeal}</h4>
        <h5>Category: ${meal.strCategory}, Area: ${meal.strArea}</h5>
        <h4>Instructions</h4>
      </div>
      <div class="mealInstruction">
        <p>
          ${meal.strInstructions}
        </p>
      </div>
    </div>
  </div>
  `

}




// this is the entry point, where your code starts to run
window.addEventListener("DOMContentLoaded", async () => {
  console.log("everything is ready")

  const categories = await getAllCategories()
  console.log(categories)
  displayAllCategories(categories)

  let randomMeal = await getRandomMeal()
  displayRandomMeal(randomMeal)

  const randomBtn = document.querySelector("#randomBtn")
  randomBtn.addEventListener("click", async () => {
    let randomMeal = await getRandomMeal()
    displayRandomMeal(randomMeal)
  })



})