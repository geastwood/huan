import {curry} from 'lodash';
import {concat, id, reduce, contains} from './fp';
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

export var filterObj = function(f) {
  return this.reduce({}, (carry, item) => {
    if (true === f(item)) {
      carry[item.key] = item.value;
    }
    return carry;
  });
};

Object.defineProperty(Object.prototype, 'map', {
  value: mapObj
});

Object.defineProperty(Object.prototype, 'reduce', {
  value: reduceObj
});

Object.defineProperty(Object.prototype, 'filter', {
  value: filterObj
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


/**
 * [k] -> {k: v} -> {k: v}
 */
export var pick = curry((props, obj) => {
  return obj.filter(item => contains(props, item.key));
});

/**
 * [k] -> {k: v} -> {k: v}
 */
export var omit = curry((props, obj) => {
  return obj.filter(item => !contains(props, item.key));
});
