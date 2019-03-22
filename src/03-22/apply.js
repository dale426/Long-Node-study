
function fn(X, Y) {
  return X + Y
}

var after = function (times, func) {
  if (times <= 0) return func;
  return function () {
    if (--times < 1) { 
      return func.apply(this, arguments); }
  };
};


var myfun = after(1, fn)
myfun(2, 6);

