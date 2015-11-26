var flatMap = require('../lib/flatMap');
var clone = require('lodash').clone;

exports.flatMap = function(t) {
  t.deepEqual(
    flatMap(v => [v, v])([1, 2, 3]),
    [1, 1, 2, 2, 3, 3]
  );
  t.done();
};

exports['flatMap - complex'] = t => {
  var data = [
    {name: 'a', value: '1'},
    {name: 'b', value: '2'}
  ];
  t.deepEqual(
    flatMap(v => {
      var copy = clone(v);
      copy.role = 'copy';
      return [v, copy];
    })(data),
    [
      {name: 'a', value: '1'},
      {name: 'a', value: '1', role: 'copy'},
      {name: 'b', value: '2'},
      {name: 'b', value: '2', role: 'copy'}
    ]
  );
  t.done();
};

