var huan = require('../lib')['default'];
var map = huan.map;
var defaultTo = huan.defaultTo;
var values = huan.values;

exports.translate = t => {
  var arr = ['a', 'b', 'c'];
  var arr1 = ['a', 'b', 'c', 'd'];
  var arr2 = ['a', 'b', 'c', ''];
  var tr = {
    a: 'translation of a',
    b: 'translation of b',
    c: 'translation of c'
  };
  var translation = map(v => huan.compose(defaultTo(v), huan.prop(v)), arr).map(f => f(tr));
  var translation1 = map(v => huan.compose(defaultTo(v), huan.prop(v)), arr1).map(f => f(tr));
  var translation2 = map(v => huan.compose(defaultTo(v), huan.prop(v)), arr2).map(f => f(tr));

  t.deepEqual(translation, values(tr));
  t.deepEqual(translation1, values(tr).concat('d'));
  t.deepEqual(translation2, values(tr).concat(''));

  t.done();
};
