export default (xs, getKey) => {
    var ls = []
    return xs.filter(v => {
        var key = getKey(v)
        if (ls.indexOf(key) === -1) {
            ls.push(key)
            return true
        }
        return false
    })
}
