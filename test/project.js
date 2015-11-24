var project = require('../lib/project');

exports.project = function(t) {
  var testArr = [
    {a: 'a_1', b: 'b_1', c: 'c_1'},
    {a: 'a_2', b: 'b_2', c: 'c_2'},
    {a: 'a_3', c: 'c_3'}
  ];

  t.deepEqual(project(['a', 'b'])(testArr), [
    {a: 'a_1', b: 'b_1'},
    {a: 'a_2', b: 'b_2'},
    {a: 'a_3', b: undefined}
  ]);
  t.done();
};