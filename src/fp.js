/**
 * functions exported here will be directly exported, function name as key of `huan`
 * e.g. huan.isArray = ...
 */
import curry2 from './core/curry2';
import curry3 from './core/curry3';
import map from './map';

import isPlainObject  from 'lodash.isplainobject';

export var isArray = v => Object.prototype.toString.call(v) === '[object Array]';
export var isUndefined = v => typeof v === 'undefined';

/**
 * [a] -> [a] -> [a]
 */
export var concat = curry2((a, b) => a.concat(b));

/**
 * a -> a
 */
export var id = v => v;

export var compose = (...fns) => v => fns.reduceRight((carry, fn) => fn(carry), v);

export var push = curry2((ls, v) => {
  ls.push(v);
  return v;
});

// use tap for debugger and console.log
export var tap = curry3((f, g, v) => {
  f(g(v));
  return v;
});

export var condition = curry3((predicate, trueFn, falseFn) => v => (!!predicate(v)) ? trueFn(v) : falseFn(v));

export var complement = fn => (...args) => !fn.apply(null, args);

export var prop = curry2((prop, obj) => obj[prop]);
export var hasProp = curry2((propName, obj) => (typeof prop(propName, obj) !== 'undefined'));
export var propEq = curry3((propName, v, obj) => prop(propName, obj) === v);

export var filter = curry2((f, u) => u.filter(v => f(v)));
export var chain = curry2((f, m) => m.chain(f));

// [a] -> a -> Bool
export var contains = curry2((xs, key) => xs.indexOf(key) !== -1);

export var makeType = (type, v) => new type(v);

export var falcy = v => v == null || v !== v;

export var splats = fn => arr => fn(...arr);
export var unsplats = fn => (...args) => fn(args);

export var add = curry2((a, b) => a + b);

export var slice = curry3((start, end, xs) => xs.slice(start, end));
export var head = prop(0);
export var tail = slice(1, Infinity);

export var mergeObj = (o1 = {}, o2) => {
  if (typeof o2 === 'undefined') {
    return o1;
  }

  map(k => {
    o1[k] = o2[k];
  }, Object.keys(o2));

  return o1;
};
