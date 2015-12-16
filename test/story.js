var fp = require('../lib/fp');
var map = require('../lib/map');
var defaultTo = require('../lib/defaultTo');
var values = require('../lib/values');

exports.translate = t => {
  var arr = ['a', 'b', 'c'];
  var arr1 = ['a', 'b', 'c', 'd'];
  var arr2 = ['a', 'b', 'c', ''];
  var tr = {
    a: 'translation of a',
    b: 'translation of b',
    c: 'translation of c'
  };
  var translation = map(v => fp.compose(defaultTo(v), fp.prop(v)), arr).map(f => f(tr));
  var translation1 = map(v => fp.compose(defaultTo(v), fp.prop(v)), arr1).map(f => f(tr));
  var translation2 = map(v => fp.compose(defaultTo(v), fp.prop(v)), arr2).map(f => f(tr));

  t.deepEqual(translation, values(tr));
  t.deepEqual(translation1, values(tr).concat('d'));
  t.deepEqual(translation2, values(tr).concat(''));

  t.done();
};
