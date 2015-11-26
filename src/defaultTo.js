import curry from 'lodash.curry';

/**
 * a -> b -> a | b
 */
export default curry((d, v) =>  (v == null || v !== v) ? d : v);
