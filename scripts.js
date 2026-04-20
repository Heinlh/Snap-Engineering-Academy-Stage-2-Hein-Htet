/// Meal Dataset 

const meals = [
  {
    name: "Spaghetti Bolognese",
    cuisine: "Italian",
    type: "Dinner",
    calories: 600,
    proteinG: 25,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Spaghetti_bolognese.jpg"
  },
  {
    name: "Hamburger",
    cuisine: "American",
    type: "Lunch",
    calories: 550,
    proteinG: 20,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg"
  },
  {
    name: "Margherita Pizza",
    cuisine: "Italian",
    type: "Dinner",
    calories: 800,
    proteinG: 30,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg"
  },
  {
    name: "Pad Thai",
    cuisine: "Thai",
    type: "Dinner",
    calories: 700,
    proteinG: 20,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Pad_thai.jpg"
  },
  {
    name: "Chicken Tikka Masala",
    cuisine: "Indian",
    type: "Dinner",
    calories: 650,
    proteinG: 30,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Chicken_tikka_masala.jpg"
  },
  {
    name: "Tacos al Pastor",
    cuisine: "Mexican",
    type: "Dinner",
    calories: 500,
    proteinG: 25,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Tacos_al_pastor.jpg"
  },
  {
    name: "Sushi Platter",
    cuisine: "Japanese",
    type: "Dinner",
    calories: 450,
    proteinG: 20,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg"
  },
  {
    name: "Pancakes",
    cuisine: "American",
    type: "Breakfast",
    calories: 400,
    proteinG: 8,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Pancake_stack.jpg"
  },
  {
    name: "Pho",
    cuisine: "Vietnamese",
    type: "Lunch",
    calories: 500,
    proteinG: 25,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Pho_bo.jpg"
  },
  {
    name: "Caesar Salad",
    cuisine: "American",
    type: "Lunch",
    calories: 350,
    proteinG: 10,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Caesar_salad.jpg"
  },
  {
    name: "French Toast",
    cuisine: "French",
    type: "Breakfast",
    calories: 450,
    proteinG: 10,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/French_toast_2.jpg"
  },
  {
    name: "Croissant",
    cuisine: "French",
    type: "Breakfast",
    calories: 250,
    proteinG: 5,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Croissant.jpg"
  },
  {
    name: "Beef Stroganoff",
    cuisine: "Russian",
    type: "Dinner",
    calories: 700,
    proteinG: 35,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Stroganoff.jpg"
  },
  {
    name: "Ramen",
    cuisine: "Japanese",
    type: "Lunch",
    calories: 600,
    proteinG: 25,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Ramen.jpg"
  },
  {
    name: "Lasagna",
    cuisine: "Italian",
    type: "Dinner",
    calories: 850,
    proteinG: 35,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Lasagne_al_forno.jpg"
  },
  {
    name: "Falafel Wrap",
    cuisine: "Middle Eastern",
    type: "Lunch",
    calories: 550,
    proteinG: 15,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Falafel_balls.jpg"
  },
  {
    name: "Chicken Shawarma",
    cuisine: "Middle Eastern",
    type: "Lunch",
    calories: 600,
    proteinG: 30,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Shawarma.jpg"
  },
  {
    name: "Paella",
    cuisine: "Spanish",
    type: "Dinner",
    calories: 750,
    proteinG: 30,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Paella_de_mariscos.jpg"
  },
  {
    name: "Eggs Benedict",
    cuisine: "American",
    type: "Breakfast",
    calories: 500,
    proteinG: 20,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Eggs_Benedict.jpg"
  },
  {
    name: "Chocolate Cake",
    cuisine: "American",
    type: "Dessert",
    calories: 450,
    proteinG: 5,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Chocolate_cake.jpg"
  },
  {
    name: "Tiramisu",
    cuisine: "Italian",
    type: "Dessert",
    calories: 350,
    proteinG: 6,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Tiramisu.jpg"
  },
  {
    name: "Cheesecake",
    cuisine: "American",
    type: "Dessert",
    calories: 400,
    proteinG: 7,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Cheesecake.jpg"
  },
  {
    name: "Dim Sum",
    cuisine: "Chinese",
    type: "Lunch",
    calories: 500,
    proteinG: 20,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Dim_sum.jpg"
  },
  {
    name: "Peking Duck",
    cuisine: "Chinese",
    type: "Dinner",
    calories: 800,
    proteinG: 35,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Peking_duck.jpg"
  },
  {
    name: "Tom Yum Goong",
    cuisine: "Thai",
    type: "Lunch",
    calories: 400,
    proteinG: 20,
    spiceLevel: "Hot",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Tom_yum.jpg"
  },
  {
    name: "Miso Soup",
    cuisine: "Japanese",
    type: "Lunch",
    calories: 150,
    proteinG: 5,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Miso_soup.jpg"
  },
  {
    name: "Fish and Chips",
    cuisine: "British",
    type: "Dinner",
    calories: 850,
    proteinG: 25,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Fish_and_chips.jpg"
  },
  {
    name: "Beef Wellington",
    cuisine: "British",
    type: "Dinner",
    calories: 900,
    proteinG: 40,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Beef_Wellington.jpg"
  },
  {
    name: "Macaroni and Cheese",
    cuisine: "American",
    type: "Lunch",
    calories: 600,
    proteinG: 20,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Macaroni_and_cheese.jpg"
  },
  {
    name: "Omelette",
    cuisine: "French",
    type: "Breakfast",
    calories: 300,
    proteinG: 15,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Omelette.jpg"
  },
  {
    name: "Waffles",
    cuisine: "Belgian",
    type: "Breakfast",
    calories: 400,
    proteinG: 8,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Waffles.jpg"
  },
  {
    name: "Goulash",
    cuisine: "Hungarian",
    type: "Dinner",
    calories: 650,
    proteinG: 30,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Goulash_soup.jpg"
  },
  {
    name: "Shakshouka",
    cuisine: "Middle Eastern",
    type: "Breakfast",
    calories: 400,
    proteinG: 15,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Shakshuka.jpg"
  },
  {
    name: "Burrito",
    cuisine: "Mexican",
    type: "Lunch",
    calories: 700,
    proteinG: 25,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Burrito.jpg"
  },
  {
    name: "Enchiladas",
    cuisine: "Mexican",
    type: "Dinner",
    calories: 650,
    proteinG: 25,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Enchiladas.jpg"
  },
  {
    name: "Fajitas",
    cuisine: "Mexican",
    type: "Dinner",
    calories: 600,
    proteinG: 30,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Fajitas.jpg"
  },
  {
    name: "Gelato",
    cuisine: "Italian",
    type: "Dessert",
    calories: 250,
    proteinG: 4,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Gelato.jpg"
  },
  {
    name: "Baklava",
    cuisine: "Turkish",
    type: "Dessert",
    calories: 300,
    proteinG: 5,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Baklava_-_Turkish_special%2C_80-ply.JPEG"
  },
  {
    name: "Apple Pie",
    cuisine: "American",
    type: "Dessert",
    calories: 350,
    proteinG: 3,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg"
  },
  {
    name: "Creme Brulee",
    cuisine: "French",
    type: "Dessert",
    calories: 400,
    proteinG: 6,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Creme_brulee.jpg"
  },
  {
    name: "Poutine",
    cuisine: "Canadian",
    type: "Lunch",
    calories: 800,
    proteinG: 20,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Poutine.jpg"
  },
  {
    name: "Clam Chowder",
    cuisine: "American",
    type: "Lunch",
    calories: 500,
    proteinG: 15,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Clam_chowder.jpg"
  },
  {
    name: "Lobster Roll",
    cuisine: "American",
    type: "Lunch",
    calories: 450,
    proteinG: 25,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Lobster_roll.jpg"
  },
  {
    name: "Ceviche",
    cuisine: "Peruvian",
    type: "Lunch",
    calories: 300,
    proteinG: 20,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Ceviche.jpg"
  },
  {
    name: "Arepas",
    cuisine: "Colombian",
    type: "Breakfast",
    calories: 350,
    proteinG: 10,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Arepa.jpg"
  },
  {
    name: "Bibimbap",
    cuisine: "Korean",
    type: "Dinner",
    calories: 600,
    proteinG: 25,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bibimbap_with_side_dishes.jpg"
  },
  {
    name: "Kimchi Fried Rice",
    cuisine: "Korean",
    type: "Lunch",
    calories: 500,
    proteinG: 15,
    spiceLevel: "Hot",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Kimchi_fried_rice.jpg"
  },
  {
    name: "Butter Chicken",
    cuisine: "Indian",
    type: "Dinner",
    calories: 700,
    proteinG: 30,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Butter_chicken.jpg"
  },
  {
    name: "Samosa",
    cuisine: "Indian",
    type: "Lunch",
    calories: 300,
    proteinG: 8,
    spiceLevel: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Samosa.jpg"
  },
  {
    name: "Churros",
    cuisine: "Spanish",
    type: "Dessert",
    calories: 350,
    proteinG: 4,
    spiceLevel: "Mild",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Churros.jpg"
  }
];


///  DOM References

const searchInput    = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const cuisineFilter  = document.getElementById("cuisine-filter");
const sortSelect     = document.getElementById("sort-select");
const resultsCount   = document.getElementById("results-count");
const cardContainer  = document.getElementById("card-container");
const cardTemplate   = document.getElementById("card-template");
const emptyState     = document.getElementById("empty-state");


/// Helpers

// Maps spice level strings to numbers so they can be sorted numerically
function spiceValue(level) {
  if (level === "Mild")   return 1;
  if (level === "Medium") return 2;
  if (level === "Hot")    return 3;
  return 0;
}


/// Pipeline: search → filter → sort 
// Returns a filtered and sorted copy of the meals array based on
// the current state of all three controls.
function getResults() {
  const query    = searchInput.value.trim().toLowerCase();
  const mealType = categoryFilter.value;
  const cuisine  = cuisineFilter.value;
  const sort     = sortSelect.value;

  // 1. Filter by search query, meal type, and cuisine
  const filtered = meals.filter(function(meal) {
    const matchesSearch  = meal.name.toLowerCase().includes(query);
    const matchesType    = mealType === "all" || meal.type === mealType;
    const matchesCuisine = cuisine  === "all" || meal.cuisine === cuisine;
    return matchesSearch && matchesType && matchesCuisine;
  });

  // 2. Sort the filtered results
  filtered.sort(function(a, b) {
    switch (sort) {
      case "name-asc":      return a.name.localeCompare(b.name);
      case "name-desc":     return b.name.localeCompare(a.name);
      case "calories-asc":  return a.calories - b.calories;
      case "calories-desc": return b.calories - a.calories;
      case "protein-asc":   return a.proteinG - b.proteinG;
      case "protein-desc":  return b.proteinG - a.proteinG;
      case "spice-asc":     return spiceValue(a.spiceLevel) - spiceValue(b.spiceLevel);
      case "spice-desc":    return spiceValue(b.spiceLevel) - spiceValue(a.spiceLevel);
      default:              return 0;
    }
  });

  return filtered;
}


// Render 
// Clears the card container, runs the pipeline, then builds one card
// per result by cloning the hidden template card in index.html.
function renderCards() {
  const results = getResults();

  // Remove all previously rendered cards (leave the hidden template in place)
  cardContainer.querySelectorAll(".card:not(#card-template)").forEach(function(card) {
    card.remove();
  });

  // Update the results count text
  const label = results.length === 1 ? "meal" : "meals";
  resultsCount.textContent = "Showing " + results.length + " " + label;

  // Show the empty state message if nothing matched
  if (results.length === 0) {
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  // Build one card per result
  results.forEach(function(meal) {
    // Clone the template (deep copy — includes all child nodes)
    const card = cardTemplate.cloneNode(true);

    // Remove the id so there's never a duplicate id on the page
    card.removeAttribute("id");

    // Make the cloned card visible
    card.style.display = "";

    // Fill in each field from the meal object
    const img = card.querySelector(".card-img");
    img.src = meal.image;
    img.alt = meal.name;

    card.querySelector(".card-name").textContent          = meal.name;
    card.querySelector(".card-cuisine").textContent       = meal.cuisine;
    card.querySelector(".card-type span").textContent     = meal.type;
    card.querySelector(".card-protein span").textContent  = meal.proteinG;
    card.querySelector(".card-spice span").textContent    = meal.spiceLevel;
    card.querySelector(".card-calories span").textContent = meal.calories;

    // Store the cuisine on the badge so CSS can color it
    card.querySelector(".card-cuisine").dataset.cuisine = meal.cuisine;

    cardContainer.appendChild(card);
  });
}


// Event Listeners 

// Re-run the pipeline in real time whenever any control changes
searchInput.addEventListener("input",     renderCards);
categoryFilter.addEventListener("change", renderCards);
cuisineFilter.addEventListener("change",  renderCards);
sortSelect.addEventListener("change",     renderCards);


// Initial render 

// Render all cards on first page load
document.addEventListener("DOMContentLoaded", renderCards);
