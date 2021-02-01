// Querys For Inserting
const appQuery = document.querySelector("#apps-menu")
const entQuery = document.querySelector("#entrees-menu")
const desQuery = document.querySelector("#desserts-menu")
const spicy = '<a href="" id ="spicy"><span class="fa fa-fire"></span></a>'
const allergy = '<a href="#" id ="allergy"> <span class="fa fa-exclamation"></span></a>'
const favorite = '<a href="#" id ="favorite"> <span class="fa fa-star"></span></a>'
const vegan = '<a href="#" id ="vegan"> <span class="fa fa-leaf"></span></a>'

fetch('https://obscure-tundra-54269.herokuapp.com/casual-dining')
.then((resp) => resp.json())
.then((data) => {
    console.log(data)
    
// App Menu Function

const appMenu = data.appetizers.map(function (item) {
    console.log(item.name)
   return `     
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>$${item.price}</p>
                <span id = "spicy"> ${favorite}
                    ${spicy} ${vegan} ${allergy} </span>
                </div>
                `
}).join('')
appQuery.innerHTML = appMenu

// Entree Menu Function
    const entMenu = data.entrees.map(function (item) {
    console.log(item.name)
   return `     
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>$${item.price}</p>
                <span id = "spicy"> ${favorite}
                ${spicy} ${vegan} ${allergy} </span>
            </div>`
                

    }).join('')
    entQuery.innerHTML = entMenu

// Dessert Menu Function
    const desMenu = data.desserts.map(function (item) {
        console.log(item.name)
       return `     
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>$${item.price}</p>
                    <span id = "spicy"> ${favorite}
                    ${spicy} ${vegan} ${allergy}</span>
                </div>`
                    
    
     }).join('')
     desQuery.innerHTML = desMenu

// These insert the stuffs into the html

    // const menuString = appMenu.join('')
    //         appQuery.innerHTML = appMenu

    // const entString = entMenu.join('')
    // entQuery.innerHTML = entMenu

    // const desString = desMenu.join('')
    //         desQuery.innerHTML = desMenu
})

// const entQuery = document.querySelector("#entrees-menu")
// fetch('https://obscure-tundra-54269.herokuapp.com/casual-dining')
// .then((resp) => resp.json())
// .then((data) => {
// const entMenu = data.entrees.map(function (item) {
//     console.log(item.name)
//    return `     
//                 <h2>${item.name}</h2>
//                 <p>${item.description}</p>
//                 <p>$${item.price}</p>`
// })
// const entString = entMenu.join('')
// entQuery.innerHTML = entMenu
// })