// opted not to implement the "immediate" thing 'cause reasons
module.exports = function debounce(funcToDebounce, delay) {
  let timeoutHandle;

  return function(...args) {
    clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(() => {
      funcToDebounce.apply(this, args);
    }, delay);
  }
};
