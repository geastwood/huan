import curry from 'lodash.curry';

export default curry((d, v) =>  (v == null || v !== v) ? d : v);
