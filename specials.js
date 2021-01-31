let specialItem = document.querySelector("#special-item")

fetch('https://obscure-tundra-54269.herokuapp.com/casual-dining')
.then((resp) => resp.json())
.then((data) => {


    // const special = data.entrees.map(function (item) {
    //     console.log(item.name)


    //    return `     
    //                 <h3>Today's Special:</h3> <h6>${item.name} $10 </h6>`
    
    //     })

    //     const specialString = special.join('')
    //     specialItem.innerHTML = special[0]
    

    const special = data.entrees.map(function (item) {
        console.log(item.name)


       return `     
                    <h3>Today's Special:</h3> <h6>${item.name} $10 </h6>`
    
        })

        const specialString = special.join('')
        specialItem.innerHTML = special[0]
    


})

