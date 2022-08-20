// LEFT NAVIGATION //
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
    console.log('nameLeft CLICKED!');
    nameLeft.classList.toggle('active');
    nameLeftSearch.classList.toggle('d-flex');
    initNameDiv(nameLeftInput, nameLeftButton);

});

nameLeftButton.addEventListener('click', (e) => {
    appendContainer.innerHTML = '';
    const parent = e.target.parentNode;
    const inputElement = parent.querySelector('input');
    searchByName(inputElement.value);
});

categoryLeft.addEventListener('click', () => {
    console.log('categoryLeft CLICKED!');
    categoryLeft.classList.toggle('active');
    categoryLeftSearch.classList.toggle('d-flex');
    initCategoryDiv(categoryLeftInput, categoryLeftButton);
});

categoryLeftButton.addEventListener('click', () => {
    appendContainer.innerHTML = '';
    searchByCategory();
})

ingredientsLeft.addEventListener('click', () => {
    console.log('ingredientsLeft CLICKED!');
    ingredientsLeft.classList.toggle('active');
    ingredientsLeftSearch.classList.toggle('d-flex');
    initIngredientDiv(ingredientsLeftInput, ingredientsLeftButton);
});

ingredientsLeftButton.addEventListener('click', () => {
    appendContainer.innerHTML = '';
    searchByIngredients();
});

randomLeft.addEventListener('click', () => {
    console.log('randomLeft CLICKED!');
    searchByRandom();
});

function initNameDiv(nameLeftInput, nameLeftButton) {
    nameLeftInput.addEventListener('click', (e) => {
        console.log(e.target);
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

function searchByName(inputValue) {
    const searchTerm = inputValue;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
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
            console.log(data);
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
            console.log(data);
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
            console.log(data);
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
//--

//TOP NAVIGATION //
const homeTop = document.querySelector('#home-top');
const aboutTop = document.querySelector('#about-top');

const nameTop = document.querySelector('#name-top');
const nameTopInput = document.querySelector('#name-top-input');
const nameTopButton = document.querySelector('#name-top-button');
const nameTopSearch = document.querySelector('#name-top-search');

const categoryTop = document.querySelector('#category-top');
const categoryTopInput = document.querySelector('#category-top-input');
const categoryTopButton = document.querySelector('#category-top-button');
const categoryTopSearch = document.querySelector('#category-top-search');

const ingredientsTop = document.querySelector('#ingredients-top');
const ingredientsTopInput = document.querySelector('#ingredients-top-input');
const ingredientsTopButton = document.querySelector('#ingredients-top-button');
const ingredientsTopSearch = document.querySelector('#ingredients-top-search');

const randomTop = document.querySelector('#random-top');

nameTop.addEventListener('click', () => {
    console.log('nameTop CLICKED!');
    nameTop.classList.toggle('active');
    nameTopSearch.classList.toggle('d-flex');
    initNameDivTop(nameTopInput, nameTopButton);

});

nameTopButton.addEventListener('click', (e) => {
    appendContainer.innerHTML = '';
    const parent = e.target.parentNode;
    const inputElement = parent.querySelector('input');
    searchByName(inputElement.value);
});

categoryTop.addEventListener('click', () => {
    console.log('categoryTop CLICKED!');
    categoryTop.classList.toggle('active');
    categoryTopSearch.classList.toggle('d-flex');
    initCategoryDivTop(categoryTopInput, categoryTopButton);
});

categoryTopButton.addEventListener('click', () => {
    appendContainer.innerHTML = '';
    searchByCategory();
})

ingredientsTop.addEventListener('click', () => {
    console.log('ingredientsTop CLICKED!');
    ingredientsTop.classList.toggle('active');
    ingredientsTopSearch.classList.toggle('d-flex');
    initIngredientDivTop(ingredientsTopInput, ingredientsTopButton);
});

ingredientsTopButton.addEventListener('click', () => {
    appendContainer.innerHTML = '';
    searchByIngredients();
});

randomTop.addEventListener('click', () => {
    console.log('randomLeft CLICKED!');
    searchByRandom();
});

function initNameDivTop(nameTopInput, nameTopButton) {
    nameTopInput.addEventListener('click', (e) => {
        console.log(e.target);
        nameTopInput.value = '';
    });
    nameTopButton.addEventListener('click', (e) => {
        console.log(e.target);
    });
}

function initCategoryDivTop(categoryTopInput, categoryTopButton) {
    categoryTopInput.addEventListener('click', (e) => {
        console.log(e.target);
        categoryTopInput.value = '';
    });
    categoryTopButton.addEventListener('click', (e) => {
        console.log(e.target);
    });
}

function initIngredientDivTop(ingredientsTopInput, ingredientsTopButton) {
    ingredientsTopInput.addEventListener('click', (e) => {
        console.log(e.target);
        ingredientsTopInput.value = '';
    });
    ingredientsTopButton.addEventListener('click', (e) => {
        console.log(e.target);
    });
}

//--