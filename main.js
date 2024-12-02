const recipes = [
    {
      image: "./Image/VeganSalad.jpeg",
      title: "Vegan Salad",
      description: "A healthy and delicious vegan salad with fresh greens.",
      dietary: "vegan",
      prepTime: "15 mins",
      ingredients: [
        "1 cup mixed greens",
        "1 avocado",
        "Cherry tomatoes",
        "Olive oil",
        "Lemon juice"
      ],
      instructions: [
        "Chop the avocado and tomatoes.",
        "Toss all ingredients in a large bowl.",
        "Drizzle with olive oil and lemon juice.",
        "Season with salt and pepper to taste."
      ],
      notes: "Great for a quick lunch or side dish."
    },
    {
      image: "./Image/GlutenFreePizza.jpg",
      title: "Gluten-Free Pizza",
      description: "A delicious gluten-free pizza with a crispy crust.",
      dietary: "gluten-free",
      prepTime: "1 hour",
      ingredients: [
        "1 gluten-free pizza crust",
        "1/2 cup tomato sauce",
        "1 cup mozzarella cheese",
        "Toppings of your choice (e.g., mushrooms, peppers)"
      ],
      instructions: [
        "Preheat the oven to 400°F (200°C).",
        "Spread tomato sauce over the pizza crust.",
        "Add mozzarella cheese and desired toppings.",
        "Bake for 15-20 minutes until cheese is melted and crust is crispy."
      ],
      notes: "Make sure the crust is completely cooked to avoid sogginess."
    },
    {
      image: "./Image/VegetarianPasta.jpg",
      title: "Vegetarian Pasta",
      description: "A classic vegetarian pasta with a rich tomato sauce.",
      dietary: "vegetarian",
      prepTime: "30 mins",
      ingredients: [
        "200g pasta",
        "1 cup tomato sauce",
        "1/2 cup grated Parmesan",
        "Fresh basil"
      ],
      instructions: [
        "Cook pasta according to package instructions.",
        "In a separate pan, heat tomato sauce.",
        "Mix cooked pasta with sauce and top with Parmesan.",
        "Garnish with fresh basil."
      ],
      notes: "Use gluten-free pasta for a gluten-free option."
    },
    {
      image: "./Image/DairyFreeSmoothie.jpg",
      title: "Dairy-Free Smoothie",
      description: "A creamy smoothie made with almond milk and fruits.",
      dietary: "dairy-free",
      prepTime: "10 mins",
      ingredients: [
        "1 cup almond milk",
        "1 banana",
        "1/2 cup mixed berries",
        "1 tbsp honey",
        "Ice cubes"
      ],
      instructions: [
        "Place all ingredients in a blender.",
        "Blend until smooth and creamy.",
        "Serve immediately."
      ],
      notes: "You can substitute almond milk with coconut milk for a different flavor."
    },
    {
      image: "./Image/SpaghettiBolognese.jpg",
      title: "Spaghetti Bolognese",
      description: "Classic Italian spaghetti with a rich meat sauce.",
      dietary: "non-vegetarian",
      prepTime: "40 mins",
      ingredients: [
        "200g spaghetti",
        "1 lb ground beef",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 cup tomato sauce"
      ],
      instructions: [
        "Cook the spaghetti according to package instructions.",
        "In a pan, sauté onion and garlic.",
        "Add ground beef and cook until browned.",
        "Pour in tomato sauce and simmer for 15 minutes.",
        "Serve sauce over pasta."
      ],
      notes: "You can add Parmesan cheese on top for extra flavor."
    },
    {
      image: "./Image/ChickpeaSalad.jpg",
      title: "Chickpea Salad",
      description: "A refreshing salad with chickpeas, cucumber, and tomatoes.",
      dietary: "vegan",
      prepTime: "15 mins",
      ingredients: [
        "1 can chickpeas, drained",
        "1 cucumber, chopped",
        "1 cup cherry tomatoes, halved",
        "1 red onion, chopped",
        "Olive oil and lemon dressing"
      ],
      instructions: [
        "Mix chickpeas, cucumber, tomatoes, and onion in a bowl.",
        "Drizzle with olive oil and lemon juice.",
        "Toss to combine."
      ],
      notes: "Great as a light lunch or side dish."
    },
    {
      image: "./Image/TofuStirFry.jpeg",
      title: "Tofu Stir Fry",
      description: "A quick and healthy tofu stir fry with mixed vegetables.",
      dietary: "vegan",
      prepTime: "25 mins",
      ingredients: [
        "200g firm tofu, cubed",
        "1 bell pepper, sliced",
        "1 carrot, julienned",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil"
      ],
      instructions: [
        "Heat sesame oil in a pan and sauté tofu until golden.",
        "Add vegetables and stir-fry until tender.",
        "Pour in soy sauce and toss to coat."
      ],
      notes: "Serve with rice for a complete meal."
    },
    {
      image: "./Image/AvocadoToast.jpg",
      title: "Avocado Toast",
      description: "Simple and healthy avocado toast topped with seeds.",
      dietary: "vegetarian",
      prepTime: "10 mins",
      ingredients: [
        "2 slices whole grain bread",
        "1 ripe avocado",
        "Chia seeds and lemon juice"
      ],
      instructions: [
        "Toast the bread slices.",
        "Mash avocado and spread it on the toast.",
        "Top with chia seeds and a drizzle of lemon juice."
      ],
      notes: "You can add a poached egg for extra protein."
    },
    {
      image: "./Image/GrilledChickenSalad.jpg",
      title: "Grilled Chicken Salad",
      description: "A light and protein-packed grilled chicken salad.",
      dietary: "non-vegetarian",
      prepTime: "25 mins",
      ingredients: [
        "1 chicken breast, grilled",
        "2 cups mixed greens",
        "1/2 cucumber, sliced",
        "1/4 cup feta cheese",
        "Balsamic vinaigrette"
      ],
      instructions: [
        "Grill the chicken breast until cooked through.",
        "Toss the greens, cucumber, and feta in a bowl.",
        "Slice chicken and add to the salad.",
        "Drizzle with balsamic vinaigrette."
      ],
      notes: "A great low-carb lunch option."
    },
    {
      image: "./Image/QuinoaBowl.jpg",
      title: "Quinoa Bowl",
      description: "A nutritious quinoa bowl with roasted vegetables and hummus.",
      dietary: "vegetarian",
      prepTime: "30 mins",
      ingredients: [
        "1 cup quinoa",
        "1 cup mixed roasted vegetables",
        "1/4 cup hummus",
        "Olive oil and lemon juice"
      ],
      instructions: [
        "Cook quinoa according to package instructions.",
        "Roast vegetables in olive oil and seasoning.",
        "Assemble quinoa, vegetables, and top with hummus."
      ],
      notes: "You can add grilled chicken for extra protein."
    },
    {
      image: "./Image/PaleoBeefStirFry.jpg",
      title: "Paleo Beef Stir-Fry",
      description: "A Paleo-friendly stir-fry with beef and vegetables.",
      dietary: "paleo",
      prepTime: "20 mins",
      ingredients: [
        "200g beef strips",
        "1 cup broccoli florets",
        "1 carrot, sliced",
        "2 tbsp coconut oil",
        "Tamari sauce (gluten-free soy sauce)"
      ],
      instructions: [
        "Stir-fry beef in coconut oil until browned.",
        "Add vegetables and cook until tender.",
        "Pour in tamari sauce and stir to combine."
      ],
      notes: "Serve over cauliflower rice for a low-carb option."
    },
    {
      image: "./Image/SweetPotatoFries.jpg",
      title: "Sweet Potato Fries",
      description: "Crispy oven-baked sweet potato fries.",
      dietary: "gluten-free",
      prepTime: "30 mins",
      ingredients: [
        "2 sweet potatoes, cut into fries",
        "2 tbsp olive oil",
        "Salt and pepper"
      ],
      instructions: [
        "Preheat oven to 425°F (220°C).",
        "Toss sweet potato fries in olive oil, salt, and pepper.",
        "Bake for 20-25 minutes until crispy."
      ],
      notes: "Perfect as a side dish or snack."
    },
    {
      image: "./Image/VeganChili.jpg",
      title: "Vegan Chili",
      description: "A hearty and spicy vegan chili with beans and vegetables.",
      dietary: "vegan",
      prepTime: "1 hour",
      ingredients: [
        "1 can black beans",
        "1 can kidney beans",
        "1 bell pepper, chopped",
        "1 onion, chopped",
        "2 cups tomato sauce"
      ],
      instructions: [
        "Sauté onion and bell pepper in olive oil.",
        "Add beans and tomato sauce, simmer for 40 minutes.",
        "Season with chili powder and cumin."
      ],
      notes: "Serve with avocado and tortilla chips."
    },
    {
      image: "./Image/EggplantParmesan.jpg",
      title: "Eggplant Parmesan",
      description: "A delicious vegetarian Eggplant Parmesan.",
      dietary: "vegetarian",
      prepTime: "1 hour",
      ingredients: [
        "2 eggplants, sliced",
        "1 cup marinara sauce",
        "1 cup breadcrumbs",
        "1/2 cup Parmesan cheese"
      ],
      instructions: [
        "Bread eggplant slices and bake at 375°F for 20 minutes.",
        "Top with marinara sauce and Parmesan cheese.",
        "Bake for another 10 minutes."
      ],
      notes: "Serve with spaghetti or a side salad."
    },
    {
      image: "./Image/CoconutRice.jpg",
      title: "Coconut Rice",
      description: "A fragrant coconut rice dish.",
      dietary: "gluten-free",
      prepTime: "20 mins",
      ingredients: [
        "1 cup jasmine rice",
        "1 can coconut milk",
        "1 cup water",
        "Salt to taste"
      ],
      instructions: [
        "Rinse the rice and combine with coconut milk and water.",
        "Cook according to package instructions."
      ],
      notes: "Perfect as a side dish for curry or grilled meats."
    },
    {
      image: "./Image/ZucchiniNoodles.jpg",
      title: "Zucchini Noodles",
      description: "Low-carb zucchini noodles with garlic and olive oil.",
      dietary: "gluten-free",
      prepTime: "15 mins",
      ingredients: [
        "2 zucchinis, spiralized",
        "2 tbsp olive oil",
        "2 cloves garlic, minced",
        "Salt and pepper"
      ],
      instructions: [
        "Sauté garlic in olive oil until fragrant.",
        "Add zucchini noodles and cook for 5 minutes."
      ],
      notes: "Great with pesto or marinara sauce."
    }
  ];
  
  
  let filteredRecipes = [...recipes]; 
  const recipeGrid = document.getElementById("recipeGrid");
  
  
  function displayRecipes(recipesToDisplay) {
    recipeGrid.innerHTML = '';
    recipesToDisplay.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <div class="content">
          <h3>${recipe.title}</h3>
          <p>${recipe.description}</p>
          <div class="dietary-info">${recipe.dietary}</div>
        </div>
      `;
      recipeCard.addEventListener('click', () => openModal(recipe));
      recipeGrid.appendChild(recipeCard);
    });
  }
  
  function openModal(recipe) {
    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalDescription').textContent = recipe.description;
    document.getElementById('modalDietaryInfo').textContent = `Dietary: ${recipe.dietary}`;
    document.getElementById('modalPrepTime').textContent = recipe.prepTime;
    
   
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = ''; 
    recipe.ingredients.forEach(ingredient => {
      const listItem = document.createElement('li');
      listItem.textContent = ingredient;
      ingredientsList.appendChild(listItem);
    });
  
    
    const instructionsList = document.getElementById('modalInstructions');
    instructionsList.innerHTML = ''; 
    recipe.instructions.forEach(instruction => {
      const listItem = document.createElement('li');
      listItem.textContent = instruction;
      instructionsList.appendChild(listItem);
    });
  
   
    document.getElementById('modalNotes').textContent = recipe.notes;
  
    document.getElementById('recipeModal').style.display = 'block';
  }
  
  
  function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
  }
  
  
  document.getElementById('closeModal').addEventListener('click', closeModal);
  
  
  window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('recipeModal')) {
      closeModal();
    }
  });
  
  
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      if (filter === 'all') {
        filteredRecipes = [...recipes];
      } else {
        filteredRecipes = recipes.filter(recipe => recipe.dietary === filter);
      }
      displayRecipes(filteredRecipes);
    });
  });
  
  
  document.getElementById('clear-filters').addEventListener('click', () => {
    filteredRecipes = [...recipes];
    displayRecipes(filteredRecipes);
  });
  
  
  document.getElementById('search').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
    displayRecipes(filteredRecipes);
  });
  
  
  displayRecipes(filteredRecipes);
  