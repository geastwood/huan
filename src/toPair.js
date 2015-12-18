import reduceObj from './reduceObj';

export default reduceObj((carry, {key, value}) => carry.concat([[key, value]]))([]);
