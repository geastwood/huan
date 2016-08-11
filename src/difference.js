import curry from './core/curry2';
import {complement, contains} from './fp';

/**
 *  check elements from array 1 that are not existed in array 2
 */

/**
 * [a] -> [a] -> [a]
 * @level 0
 */
export default curry((arr1, arr2) => arr1.filter(complement(contains(arr2))));
