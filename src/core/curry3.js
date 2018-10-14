import curry1 from './curry1'
import curry2 from './curry2'

export default f => {
    return function a3(a, b, c) {
        var len = arguments.length
        if (len === 0) {
            return f
        } else if (len === 1) {
            return curry2((b, c) => f(a, b, c))
        } else if (len === 2) {
            return curry1(c => f(a, b, c))
        } else {
            return f(a, b, c)
        }
    }
}
