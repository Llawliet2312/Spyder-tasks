const recipes = [
    {
        name: "Grilled Chicken Salad",
        ingredients: ["Chicken", "Vegetables"],
        image: "Dishes/grilledchickensalad.jpg",
        procedure: "Grill chicken and mix with fresh vegetables."
    },
    {
        name: "Fish Salad",
        ingredients: ["Fish", "Vegetables"],
        image: "Dishes/fishsalad.jpg",
        procedure: "fresh fish and mix with fresh vegetables."
    },
    {
        name: "Chicken Sandwich",
        ingredients: ["Chicken", "Bread"],
        image: "Dishes/chickensandwich.jpg",
        procedure: "Place chicken between bread slices and grill until golden brown."
    },
    {
        name: "Cheese Sandwich",
        ingredients: ["Cheese", "Bread"],
        image: "Dishes/cheesesandwich.jpg",
        procedure: "Place cheese between bread slices and grill until golden brown."
    },
    {
        name: "Vegetable Cheese Sandwich",
        ingredients: ["Cheese","Bread","Vegetables"],
        image: "Dishes/vegcheesesandwich.jpg",
        procedure: "Place fresh vegetables between cheese between bread slices and grill until golden brown."
    },
    {
        name: "Chicken Cheese Sandwich",
        ingredients: ["Cheese", "Bread","Chicken"],
        image: "Dishes/chickencheesesandwich.jpg",
        procedure: "Place cheese and chicken between bread slices and grill until golden brown."
    },
    {
        name: "Cheese-fillet Sandwich",
        ingredients: ["Cheese", "Bread","Fish"],
        image: "Dishes/chickenfilletsandwich.jpg",
        procedure: "Place fish(salmon or any tuna) and cheese between bread slices and grill until golden brown."
    },
    {
        name: "Chicken-Cheese-fillet Sandwich",
        ingredients: ["Cheese", "Bread","ish","Chicken"],
        image: "Dishes/chickencheesefillet.jpg",
        procedure: "Place fish(salmon or any other) and cheese between bread slices and grill until golden brown."
    },
    {
        name: "Fish and Rice",
        ingredients: ["Fish", "Rice"],
        image: "Dishes/fish and rice.jpg",
        procedure: "Cook fish and serve with steamed rice."
    },
    {
        name: "Chicken and Rice",
        ingredients: ["Chicken", "Rice"],
        image: "Dishes/chicken rice.jpg",
        procedure: "Cook chicken and serve with steamed rice."
    },
    {
        name: "Chicken Biryani",
        ingredients: ["Chicken", "Rice","Vegetables"],
        image: "Dishes/chicken biryani.jpg",
        procedure: "The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar."
    }
    

];

const ingredientForm = document.getElementById('ingredientForm');
const recipeResults = document.getElementById('recipeResults');


ingredientForm.addEventListener('submit', function(event) {
    event.preventDefault();

 
    const selectedIngredients = Array.from(document.querySelectorAll('#ingredientList input:checked'))
                                   .map(input => input.value);

    
    const matchingRecipes = recipes.filter(recipe =>
        recipe.ingredients.every(ingredient =>
            selectedIngredients.includes(ingredient)
        )
    );

   
    displayRecipes(matchingRecipes);
});


function displayRecipes(recipes) {
    recipeResults.innerHTML = ''; // Clear previous results

    if (recipes.length === 0) {
        recipeResults.innerHTML = '<p>No recipes found with selected ingredients.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeCard = `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                <p>${recipe.procedure}</p>
            </div>
        `;
        recipeResults.insertAdjacentHTML('beforeend', recipeCard);
    });
}