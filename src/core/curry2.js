import curry1 from './curry1';

export default f => {
  return function a2(a, b) {
    if (arguments.length === 0) {
      return f;
    } else if (arguments.length === 1) {
      return curry1(b => f(a, b))
    } else {
      return f(a, b);
    }

  }
};
