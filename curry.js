module.exports = function(funcToCurry) {
  const curried = (...curriedArgs) => (curriedArgs.length >= funcToCurry.length)
    ? funcToCurry(...curriedArgs)
    : (...recurriedArgs) => curried(...curriedArgs.concat(recurriedArgs));

  return curried;
    // return function curried(...curriedArgs) {
  //   if (curriedArgs.length >= funcToCurry.length) {
  //     return funcToCurry.apply(this, ...curriedArgs);
  //   }

  //   return (...recurriedArgs) => curried(...curriedArgs.concat(recurriedArgs));
  // };
};

// this curry smells func'y ... ba'dump, tch!
