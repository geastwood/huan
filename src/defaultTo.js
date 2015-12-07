import curry from 'lodash.curry';

/**
 * a -> b -> a | b
 */
export default curry((d, v) =>  ((v == null || (typeof v === 'number' && isNaN(v))) || v !== v) ? d : v);
