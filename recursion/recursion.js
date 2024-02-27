function fibs(n) {
    if (n <= 0) {
        return []
    } else if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0, 1]
    } else {
        let result  = [0, 1]
        for (let i = 2; i < n; i++) {
            result.push(result[i - 1] + result [i - 2])
        }
        // return result
        console.log(result)

    }
}

function fibsRec(n, current  = 0, next = 1, result = []) {
    if (n === 2) {
        return result
    }

}

fibs(3)
// fibsRec(8)

//
// const someOrder = {
//     items: [
//         {name: 'joy', price: 8, quantity: 10},
//         {name: 'joy', price: 8, quantity: 10}
//     ],/*
//
//     shopper: [
//         {country: 'Nigeria'},
//         {country: 'USA'}
//     ]*/
// }
//
// const orderTotal = order => {
//     const totalItems = order.items
//     console.log(totalItems)
// }

if (orderTotal({
    items: [
        { 'name': 'dragon candy', price: 2, quantity: 3 }
    ]
}) !== 6){
    throw new Error('check fail: No quantity specified')
}