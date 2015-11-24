import {curry} from 'lodash';
import {concat, id, reduce, contains} from './fp';
import Identity from './instance/Identity';
import difference from './difference';
import mapObj from './mapObj';
import reduceObj from './reduceObj';
import filterObj from './filterObj';

Object.defineProperty(Object.prototype, 'map', {
  value: function(f) {
    return mapObj(f, this);
  }
});

Object.defineProperty(Object.prototype, 'reduce', {
  value: function(init, f) {
    return reduceObj(init, f, this);
  }
});

Object.defineProperty(Object.prototype, 'filter', {
  value: function(f) {
    return filterObj(f, this);
  }
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

/**
 * [k] -> {k: v} -> {k: v}
 */
export var patch = curry((props, obj) => {
  difference(props, Object.keys(obj)).forEach(key => obj[key] = undefined);
  return obj;
});
