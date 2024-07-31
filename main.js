let productList = document.querySelector('#productsList')

fetch('https://dummyjson.com/recipes')
    .then(recuest => recuest.json())
    .then(response => {
        console.log(response.recipes)

        response.recipes.map(item => {
            const recipeElement = document.createElement('div')
            recipeElement.className = "w-[31%] bg-base-200 shadow-lg shadow-slate-600 rounded-lg"
            recipeElement.innerHTML = `
                <img class="w-full h-40 object-cover rounded-lg" src="${item.image}" alt=""> 
                <div class="card-body"> 
                    <h2 class="text-lg font-bold">${item.name}</h2> 
                    <p class="flex items-center justify-between text-xs"> 
                        <span>Calories Per Serving:</span> 
                        <span id="Calories">${item.caloriesPerServing}</span> 
                    </p> 
                    <p class="flex items-center justify-between text-xs"> 
                        <span> 
                            Cook Time Minutes: 
                        </span> 
                        <span>${item.cookTimeMinutes}</span> 
                    </p> 
                    <p class="flex items-center justify-between text-xs"> 
                        <span> 
                            cuisine: 
                        </span> 
                        <span>${item.cuisine}</span> 
                    </p> 
                    <p class="flex items-center justify-between text-xs"> 
                        <span> 
                          difficulty: 
                        </span> 
                        <span>${item.difficulty}</span> 
                    </p> 
                    <p class="flex items-center justify-between text-xs"> 
                        <span> 
                        rating: 
                        </span> 
                        <span>${item.rating}</span> 
                    </p> 
                    <p class="flex items-center justify-between text-xs"> 
                        <span> 
                            mealType: 
                        </span> 
                        <span>${item.mealType}</span> 
                    </p> 
                    <p class="flex items-center justify-between text-xs"> 
                        <span> 
                        reviewCount: 
                        </span> 
                        <span>${item.reviewCount}</span> 
                    </p> 
                    <p class="flex items-center justify-between text-xs"> 
                        <span> 
                        servings: 
                        </span> 
                        <span>${item.servings}</span> 
                    </p>
                    <p class="flex items-center justify-between text-xs"> 
                        <span> 
                        prepTimeMinutes: 
                        </span> 
                        <span>${item.prepTimeMinutes}</span> 
                    </p>
                    <p class="flex items-center justify-between text-xs"> 
                        <span> 
                        userId: 
                        </span> 
                        <span>${item.userId}</span> 
                    </p>
                    <button class="btn btn-primary btn-block">Add to cart</button> 
                </div> 
            `
            productList.appendChild(recipeElement)
        })

    })