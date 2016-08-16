var huan = require('../lib')['default'];
var filterObj = huan.filterObj;

exports.filterObj = t => {
  var de = t.deepEqual;
  var obj = {a: 'a1', b: 'b1', int: 42, string_a: 'string a', c: 'c1'};

  de(filterObj(({key, value}) => key === 'c')(obj), {c: 'c1'});
  de(filterObj(({key, value}) => value === 42)(obj), {int: 42});
  de(filterObj(({key, value}) => value === 42 || key === 'a')(obj), {a: 'a1', int: 42});
  de(filterObj(({key, value}) => (void 0))(obj), {});
  de(filterObj(({key, value}) => true)(obj), obj);
  de(filterObj(({key, value}) => key === 'a' && value === 'a1')(obj), {a: 'a1'});

  // non-curry
  de(filterObj(({key, value}) => key.indexOf('i') >= 0)(obj), {int: 42, string_a: 'string a'});
  t.done();
};
