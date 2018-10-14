export default f => {
    return function a1(a) {
        if (arguments.length === 0) {
            return f
        } else {
            return f(a)
        }
    }
}
