// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//

// fetch('https://dummyjson.com/carts')
//     .then((response) => response.json())
//     .then((data) => {
//         let {carts} = data
//         carts.map(cart => {
//             cart.products.map(product => {
//                 let cart = document.createElement('div');
//                 cart.style.border = '2px solid'
//                 let img = document.createElement('img');
//                 img.src = product.thumbnail
//
//                 for (const productKey in product) {
//                     if (productKey !== 'thumbnail') {
//
//                         let info = document.createElement('div')
//                         info.innerText = `${productKey}: ${product[productKey]}`
//                         cart.appendChild(info)
//                     }
//                 }
//                 cart.appendChild(img)
//                 document.body.appendChild(cart)
//             })
//         })
//     });

//     #whXxOBlYS0H
//         carts.map(cart=> console.log(`${cart.id}, ${cart.title}, ${cart.price}, ${cart.quantity}, ${cart.total},${cart.discountPercentage}, ${cart.discountedTotal} `))
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//     Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then((responce) => responce.json())
    .then((dataObj) => {

        let {recipes} = dataObj

        for (const recipe of recipes) {

            let block = document.createElement('div');
            block.style.border = '2px solid'

            for (const key in recipe) {
                let info = document.createElement('p')

                if( key === 'image'){

                    let img = document.createElement('img');
                    img.src = recipe[key]
                    block.appendChild(img)
                }

                if (key !== 'ingredients' && key !== 'image') {
                    info.innerText = `${key} - ${recipe[key]}`
                }
                let p = document.createElement('p');
                p.innerText = 'Ingredients:'

                if (key === 'ingredients') {

                    let ol = document.createElement('ol');
                    recipe[key].map((ingredient) => {
                        let li = document.createElement('li');
                        li.innerText = ingredient
                        ol.appendChild(li)
                    })
                    block.append(p, ol)
                }
                block.append(info)
            }
            document.body.append(block)
        }
    })


























