import curry from './core/curry2'
import { id, tap, push, compose, contains, condition } from './fp'
import reduce from './reduce'
import always from './always'
import defaultTo from './defaultTo'

/**
 * String k => (a -> k) -> [a] -> {k: [a]}
 * @level 1
 */
export default curry((f, xs) => {
    var ls = []

    // reduce [] to an {}
    return reduce(
        (rst, obj) => {
            return compose(
                condition(
                    contains(ls),
                    compose(always(rst), key => rst[key].push(obj)),
                    compose(always(rst), push(ls), tap(v => (rst[v] = [obj]), id)),
                ),
                defaultTo('@@error'),
                f,
            )(obj)
        },
        {},
        xs,
    )
})
