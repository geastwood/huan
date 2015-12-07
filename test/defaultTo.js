var defaultTo = require('../lib/defaultTo');

exports.defaultTo = t => {
  t.equal(defaultTo(32)(undefined), 32);
  t.equal(defaultTo(32)(null), 32);
  t.equal(defaultTo(32)(42), 42);
  t.equal(defaultTo(32)(parseInt('')), 32);
  t.done();
};
