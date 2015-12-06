import curry from 'lodash.curry';
export default curry((v, u) => {
  return u.map(f => f(v));
});