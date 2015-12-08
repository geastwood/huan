import uniqBy from '../lib/uniqByKey';
import {data1 as data} from  './data';

export var name = 'unique';
export var repeat = 10000;

export var f = () => {
  (uniqBy('id', data));
};
export var cases = [
  {
    description: 'uniq from "huan"',
    f() {
      (uniqBy('id', data));
    }
  },
  {
    description: 'plain uniq',
    f() {
      var ls = [], getKey = v => v.id;
      data.filter(item => {
        var key;
        if (ls.indexOf((key = getKey(item))) === -1) {
          ls.push(key);
          return true;
        }
        return false;
      });
    }
  },

];


