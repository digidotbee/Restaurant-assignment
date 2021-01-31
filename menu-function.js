// Querys For Inserting
const appQuery = document.querySelector("#apps-menu")
const entQuery = document.querySelector("#entrees-menu")
const desQuery = document.querySelector("#desserts-menu")

fetch('https://obscure-tundra-54269.herokuapp.com/casual-dining')
.then((resp) => resp.json())
.then((data) => {
    console.log(data)
    
// App Menu Function
    const appMenu = data.appetizers.map(function (item) {
        console.log(item.name)
       return `     
                    <h1>${item.name}</h1>
                    <p>${item.description}</p>
                    <p>$${item.price}</p>`

    
    }).join('')
    appQuery.innerHTML = appMenu

// Entree Menu Function
    const entMenu = data.entrees.map(function (item) {
    console.log(item.name)
   return `     
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>$${item.price}</p>`
                

    }).join('')
    entQuery.innerHTML = entMenu

// Dessert Menu Function
    const desMenu = data.entrees.map(function (item) {
        console.log(item.name)
       return `     
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <p>$${item.price}</p>`
                    
    
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