const mealAPI = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(response => response.json())
        .then(data => displayMealAPI(data.meals))

}
const displayMealAPI = (data) => {
    const mealdiv = document.getElementById('meal-container');
    mealdiv.innerHTML = ``;
    data.forEach(data => {
        // console.log(data)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div onclick="loadMeal(${data.idMeal})" class="card h-100">
        <img src="${data.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.strMeal}</h5>
        <p class="card-text">${data.strInstructions.slice(0,200)}</p>
        <button onclick="loadMeal(${data.idMeal})" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Buy Now</button>
        </div>
    </div>`
    mealdiv.appendChild(div);

    });

}
const searchMeal = () => {
    const searchField = document.getElementById('input-field');
    const search = searchField.value ;
    mealAPI(search);
    searchField.value = '';

}

const loadMeal = (meal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySelectedMeal(data.meals[0]))

}


const displaySelectedMeal = (data) => {
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = ``
    
    modalBody.innerHTML = `
        <img src="${data.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.strMeal}</h5>
            <p class="card-text">${data.strInstructions.slice(0, 200)}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`
       
}
// const displaySelectedMeal = (data) => {
//     const display = document.getElementById('display-item');
//     display.textContent = ``
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML = `
//         <img src="${data.strMealThumb}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${data.strMeal}</h5>
//             <p class="card-text">${data.strInstructions.slice(0, 200)}</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>`
//     display.appendChild(div);    
// }


