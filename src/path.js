import curry from './core/curry2'

export default curry((xs, obj) => {
    let rst

    if (xs.length === 0) {
        return obj
    }

    do {
        let current = xs.shift()
        rst = obj = obj[current]
    } while (xs.length > 0 && obj !== undefined)

    return rst
})
