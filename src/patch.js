import curry from './core/curry3';
import {mergeObj} from './fp';
import assoc from './assoc';
import repeat from './repeat';

/**
 * receive a default patch value, to apply to the obj       -> v
 * receive a list of props to be attached to the object     -> props
 * receive an obj to be patched on                          -> obj
 *
 * turn default patch value and list of props into an object say obj1, and merge the obj to obj1
 */

/**
 * v -> [k] -> {k: v} -> {k: v}
 * @level 1
 */
export default curry((dft, props, obj) => mergeObj(assoc(props, repeat(props.length, dft)), obj));
