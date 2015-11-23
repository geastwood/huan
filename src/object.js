import {curry} from 'lodash';
import {concat, id, reduce} from './fp';
import Identity from './instance/Identity';

export var mapObj = function(f) {
  return Object.keys(this).reduce((carry, key) => {
    carry[key] = f({key, value: this[key]});
    return carry;
  }, {});
};

export var reduceObj = function(init, f) {
  return reduce((carry, key) => {
    return f(carry, {key, value: this[key]});
  }, init, Object.keys(this));
};

Object.defineProperty(Object.prototype, 'map', {
  value: mapObj
});

Object.defineProperty(Object.prototype, 'reduce', {
  value: reduceObj
});

/**
 * {String: a} -> [a]
 *
 * @param obj
 * @returns {*}
 */
export var values = obj => {
  return obj.reduce([], (carry, v) => carry.concat(v.value));
};

/**
 * (a -> Boolean) -> {String: a} -> [a]
 */
export var valueIf = (f, obj) => {
  return obj.reduce([], (carry, v) => carry.concat((true === f(v)) ? v.value : []));
};
