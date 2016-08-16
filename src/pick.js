import curry from './core/curry2';
import {contains} from './fp';
import filterObj from './filterObj';

/**
 * [k] -> {k: v} -> {k: v}
 */
export default curry((props, obj) => {
  var contain = contains(props);
  return filterObj(({key}) => contain(key), obj)
});
