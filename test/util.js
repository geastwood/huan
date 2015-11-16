var fp = require('../lib/fp');

exports.get = function(t) {
  var getName = fp.prop('name');
  t.deepEqual(getName({name: 'fei'}), {value: 'fei'});
  t.deepEqual(getName({noname: 'noname'}), {value: null});
  t.done();
};
