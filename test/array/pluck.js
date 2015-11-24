var arr = require('../../lib/array');

exports.pluck = function(t) {
  var testArr = [
    {name: 'fei', prop1: 'prop1_value'},
    {name: 'liu', prop2: 'prop2_value'}
  ];
  t.deepEqual(arr.pluck('name', testArr), ['fei', 'liu']);
  t.deepEqual(arr.pluck('prop3', testArr), [undefined, undefined]);
  t.deepEqual(arr.pluck('prop2', testArr), [undefined, 'prop2_value']);
  t.done();
};
