var pluck = require('../lib/pluck');

exports.pluck = function(t) {
  var testArr = [
    {name: 'fei', prop1: 'prop1_value'},
    {name: 'liu', prop2: 'prop2_value'}
  ];
  t.deepEqual(pluck('name', testArr), ['fei', 'liu']);
  t.deepEqual(pluck('prop3', testArr), [undefined, undefined]);
  t.deepEqual(pluck('prop2', testArr), [undefined, 'prop2_value']);
  t.done();
};
