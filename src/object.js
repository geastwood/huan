import {curry} from 'lodash';
import {compose, concat, id} from './util';
import {of, liftA3, makeType} from './fp';
import Identity from './Identity';

var o2a = curry(function(convert, connect, obj) {
  return Object.keys(obj).reduce((carry, key, i, arr) => {
    return connect(carry, convert(obj[key], key, i, arr));
  }, []);
});

export var values = obj => o2a(id, concat, obj);

export var values_fp = obj => {
  return liftA3(o2a, makeType(Identity, id), makeType(Identity, concat), makeType(Identity, obj));
};

