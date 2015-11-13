var huan = require('../lib/huan');

exports.get = function(t) {
  var getName = huan.get('name');
  t.deepEqual(getName({name: 'fei'}), {value: 'fei'});
  t.deepEqual(getName({noname: 'noname'}), {value: null});
  t.done();
};
