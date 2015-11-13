import {curry} from 'lodash';
import {of, liftA3, makeType, compose, concat, id} from './fp';
import Identity from './instance/Identity';

var o2a = curry(function(convert, connect, obj) {
  return Object.keys(obj).reduce((carry, key, i, arr) => {
    return connect(carry, convert(obj[key], key, i, arr));
  }, []);
});

export var values = obj => {
  return liftA3(o2a, makeType(Identity, id), makeType(Identity, concat), makeType(Identity, obj));
};
