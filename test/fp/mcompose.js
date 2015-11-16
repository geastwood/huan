var fp = require('../../lib/fp');
var Id = require('../../lib/instance/Identity');
var Either = require('../../lib/instance/Either');
var Maybe = require('../../lib/instance/Maybe').Maybe;
var mcompose = fp.mcompose;

exports.mcompose = function(t) {
  t.deepEqual(mcompose(Either.of(3), Maybe.of, Id.of)(5), 5);
  t.deepEqual(mcompose(Either.of(3), Maybe.of, Id.of)(null), 3);
  t.done();
};
