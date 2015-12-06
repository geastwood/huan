var Identity = require('../../lib/instance/Identity');
var fp = require('../../lib/fp');
var makeType = fp.makeType;
var of = fp.of;
var map = require('../../lib/map');
var ap = fp.ap;
var compose = fp.compose;
var curry = require('lodash').curry;
var sum = add = curry(function(a, b) {
  return a + b;
});
var length = function(v) {
  return v.length;
};
var add1 = sum(1);

exports.makeType = function(t) {
  t.deepEqual(fp.makeType(Identity, 42), {value: 42});
  t.deepEqual(map(length, fp.makeType(Identity, 'fei')), {value: 3});
  t.done();
};

exports.compose = function(t) {
  t.deepEqual(map(add1, map(length, fp.makeType(Identity, 'fei'))), {value: 4});
  t.deepEqual(compose(map(function(v) {
    return v / 2;
  }), map(add1), map(length))(fp.makeType(Identity, 'fei')), {value: 2});
  t.done();
};

exports['ap+compose'] = function(t) {
  t.deepEqual(map(add, makeType(Identity, 10)).ap(Identity.of(15)), {value: 25});
  t.deepEqual(ap(map(add, makeType(Identity, 10)), Identity.of(16)), {value: 26});
  t.deepEqual(
    compose(
      map(add1),
      fp.liftA2(add, Identity.of(10)),
      of(Identity)
    )(15),

    {value: 26});
  t.done();
};

exports.of = function(t) {
  var tmpFn = function() {
  };
  t.deepEqual(Identity.of(42), {value: 42});
  t.deepEqual(Identity.of(tmpFn), {value: tmpFn});
  t.done();
};

exports.applicative = function(t) {
  t.deepEqual(Identity.of(length).ap(Identity.of('fei')), Identity.of(length('fei')));
  t.done();
};
