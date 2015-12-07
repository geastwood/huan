var Const = require('../../lib/instance/Const');
var Identity = require('../../lib/instance/Identity');
var fp = require('../../lib/fp');
var map = require('../../lib/map');

exports.const = t => {
  t.deepEqual(Const.of(5), {value: 5});
  t.deepEqual(map(fp.add(1), Identity.of(5)), {value: 6});
  t.deepEqual(map(fp.add(1), Const.of(5)), {value: 5});
  t.done();
};