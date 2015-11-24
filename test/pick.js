var pick = require('../lib/pick');

exports.pick = function(t) {
  var testObj = {name: 'test', role: 'testObj', prop1: 'prop1', prop2: 'prop2'}
  t.deepEqual(pick(['name'], testObj), {name: 'test'});
  t.deepEqual(pick(['name', 'role'], testObj), {name: 'test', role: 'testObj'});
  t.deepEqual(pick(['name', 'role'])(testObj), {name: 'test', role: 'testObj'});
  t.deepEqual(pick(['name', 'role', 'prop100'], testObj), {name: 'test', role: 'testObj'});
  t.deepEqual(pick([], testObj), {});
  t.deepEqual(pick(['fei'], testObj), {});
  t.done();
};