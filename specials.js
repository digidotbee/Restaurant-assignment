const specialQuery = document.querySelector("#card2")

let arrFood = 
fetch('https://obscure-tundra-54269.herokuapp.com/casual-dining')
.then((resp) => resp.json())
.then((data) => {
    // console.log(data)
})

