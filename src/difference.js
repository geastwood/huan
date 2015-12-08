import curry from './core/curry2';
import {complement, contains} from './fp';

/**
 * [a] -> [a] -> [a]
 */
export default curry((arr1, arr2) => arr1.filter(complement(contains(arr2))));
