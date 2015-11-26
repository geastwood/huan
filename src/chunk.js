import {curry} from 'lodash';

export default curry((size, xs) => {
  var length = xs.length, rst = [];
  size = Math.max(size, 1);

  for (var i = 0; i < length; i = i + size) {
    rst = rst.concat([xs.slice(i, i + size)]);
  }

  return rst;
});
