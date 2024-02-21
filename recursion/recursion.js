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

function fibsRec(n) {
    if (n <= 0) {
        return []
    } else if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0, 1]
    } else {
        let result = [0, 1]
        fibsRec(n)
        return result
    }
}

fibs(8)
fibsRec(8)