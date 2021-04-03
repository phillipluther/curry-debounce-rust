module.exports = function(funcToCurry) {
  const curried = (...curriedArgs) => (curriedArgs.length >= funcToCurry.length)
    ? funcToCurry(...curriedArgs)
    : (...recurriedArgs) => curried(...curriedArgs.concat(recurriedArgs));

  return curried;
};

// this curry smells func'y ... ba'dump, tch!
