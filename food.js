
const homeLeft = document.querySelector('#home-left');
const aboutLeft = document.querySelector('#about-left');

const nameLeft = document.querySelector('#name-left');
const nameLeftSearch = document.querySelector('#name-left-search');
const nameLeftInput = document.querySelector('#name-left-input');
const nameLeftButton = document.querySelector('#name-left-button');

const categoryLeft = document.querySelector('#category-left');
const categoryLeftSearch = document.querySelector('#category-left-search');
const categoryLeftInput = document.querySelector('#category-left-input');
const categoryLeftButton = document.querySelector('#category-left-button');

const ingredientsLeft = document.querySelector('#ingredients-left');
const ingredientsLeftSearch = document.querySelector('#ingredients-left-search');
const ingredientsLeftInput = document.querySelector('#ingredients-left-input');
const ingredientsLeftButton = document.querySelector('#ingredients-left-button');

const randomLeft = document.querySelector('#random-left');

const appendContainer = document.querySelector('#append-container');

nameLeft.addEventListener('click', () => {
    nameLeft.classList.toggle('active');
    nameLeftSearch.classList.toggle('d-none');
    initNameDiv(nameLeftInput, nameLeftButton);

});

nameLeftButton.addEventListener('click', (e) => {
    appendContainer.innerHTML = '';
    const parent = e.target.parentNode;
    const inputElement = parent.querySelector('input');
    searchByName(inputElement.value);
});

categoryLeft.addEventListener('click', () => {
    categoryLeft.classList.toggle('active');
    searchByCategory();
});

ingredientsLeft.addEventListener('click', () => {
    ingredientsLeft.classList.toggle('active');
    ingredientsLeftSearch.classList.toggle('d-none');
    initIngredientDiv(ingredientsLeftInput, ingredientsLeftButton);
});

ingredientsLeftButton.addEventListener('click', () => {
    appendContainer.innerHTML = '';
    searchByIngredients();
});

randomLeft.addEventListener('click', () => {
    searchByRandom();
});

function initNameDiv(nameLeftInput, nameLeftButton) {
    nameLeftInput.addEventListener('click', (e) => {
        nameLeftInput.value = '';
    });
    nameLeftButton.addEventListener('click', (e) => {
        console.log(e.target);
    });
}

function initCategoryDiv(categoryLeftInput, categoryLeftButton) {
    categoryLeftInput.addEventListener('click', (e) => {
        console.log(e.target);
        categoryLeftInput.value = '';
    });
    categoryLeftButton.addEventListener('click', (e) => {
        console.log(e.target);
    });
}

function initIngredientDiv(ingredientsLeftInput, ingredientsLeftButton) {
    ingredientsLeftInput.addEventListener('click', (e) => {
        console.log(e.target);
        ingredientsLeftInput.value = '';
    });
    ingredientsLeftButton.addEventListener('click', (e) => {
        console.log(e.target);
    });
}

nameLeftInput.addEventListener('click', () => {
    nameLeftInput.value = '';
});

ingredientsLeftInput.addEventListener('click', () => {
    ingredientsLeftInput.value = '';
});

function searchByName(inputValue) {
    const searchTerm = inputValue;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            let html = '';
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `

                    <div class="append-container-meals">
                        <img src="${meal.strMealThumb}" />
                        <div class="append-container-meals-title">
                            <h1>${meal.strMeal}</h1>
                            <h2>${meal.strCategory}</h2>
                            <p>Description:</p>
                            <p>Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. Tenetur omnis voluptate aliquam recusandae natus eius..</p>
                            <a class="nav-link" href="${meal.strYoutube}" >youtube.com/Link</a>
                        </div>
                    </div>
                    <hr/>
                        `
                });
                appendContainer.innerHTML = html;
                window.scrollTo({
                    top: 1000,
                    left: 0,
                    behavior: "smooth"
                });
            }
        });
}

function searchByCategory() {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(response => response.json())
        .then(data => {
            let html = '';
            if (data.categories) {
                data.categories.forEach(categories => {
                    html += `
                    <div class="append-container-meals">
                        <img src="${categories.strCategoryThumb}" />
                        <div class="append-container-meals-title">
                            <h2>${categories.strCategory}</h2>
                            <p>Description:</p>
                            <p>Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. Tenetur omnis voluptate aliquam recusandae natus eius..</p>
                        </div>
                    </div>
                    <hr/>
                        `
                });
                appendContainer.innerHTML = html;
                window.scrollTo({
                    top: 1000,
                    left: 0,
                    behavior: "smooth"
                });
            }
        });
}

function searchByIngredients() {
    const searchTerm = ingredientsLeftInput.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            let html = '';
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                    <div class="append-container-meals">
                        <img src="${meal.strMealThumb}" />
                        <div class="append-container-meals-title">
                            <h2>${meal.strMeal}</h2>
                            <p>Description:</p>
                            <p>Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. Tenetur omnis voluptate aliquam recusandae natus eius..</p>
                        </div>
                    </div>
                    <hr/>
                        `
                });
                appendContainer.innerHTML = html;
                window.scrollTo({
                    top: 1000,
                    left: 0,
                    behavior: "smooth"
                });
            }
        });
}

function searchByRandom() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(data => {
            let html = '';
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                    <div class="append-container-meals">
                        <img src="${meal.strMealThumb}" />
                        <div class="append-container-meals-title">
                            <h1>${meal.strMeal}</h1>
                            <h2>${meal.strArea}, ${meal.strCategory}</h2>
                            <p>Description:</p>
                            <p>Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. Tenetur omnis voluptate aliquam recusandae natus eius..</p>
                            <a class="nav-link" href="${meal.strYoutube}">Youtube-Link</a>
                        </div>
                    </div>
                    <hr/>
                    `
                });
                appendContainer.innerHTML = html;
                window.scrollTo({
                    top: 1000,
                    left: 0,
                    behavior: "smooth"
                });
            }
        });
}

const sampleSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=carbonara`)
        .then(response => response.json())
        .then(data => {
            let html = '';
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `

                    <div class="append-container-meals">
                        <img src="${meal.strMealThumb}" />
                        <div class="append-container-meals-title">
                            <h1>${meal.strMeal}</h1>
                            <h2>${meal.strCategory}</h2>
                            <p>Description:</p>
                            <p>Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. Tenetur omnis voluptate aliquam recusandae natus eius..</p>
                            <a class="nav-link" href="${meal.strYoutube}" >youtube.com/Link</a>
                        </div>
                    </div>
                    <hr/>
                        `
                });
                appendContainer.innerHTML = html;
                window.scrollTo({
                    top: 1000,
                    left: 0,
                    behavior: "smooth"
                });
            }
        });
}

sampleSearch();

