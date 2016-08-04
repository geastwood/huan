var huan = require('../lib')['default'];

exports.get = function(t) {
  var getName = huan.prop('name');
  t.deepEqual(getName({name: 'fei'}), 'fei');
  t.deepEqual(getName({noname: 'noname'}), undefined);
  t.done();
};
