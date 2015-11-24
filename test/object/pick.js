var obj = require('../../lib/object');

exports.pick = function(t) {
  var testObj = {name: 'test', role: 'testObj', prop1: 'prop1', prop2: 'prop2'}
  t.deepEqual(obj.pick(['name'], testObj), {name: 'test'});
  t.deepEqual(obj.pick(['name', 'role'], testObj), {name: 'test', role: 'testObj'});
  t.deepEqual(obj.pick(['name', 'role'])(testObj), {name: 'test', role: 'testObj'});
  t.deepEqual(obj.pick(['name', 'role', 'prop100'], testObj), {name: 'test', role: 'testObj'});
  t.deepEqual(obj.pick([], testObj), {});
  t.deepEqual(obj.pick(['fei'], testObj), {});
  t.done();
};