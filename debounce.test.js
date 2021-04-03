const debounce = require('./debounce');
// just as with curry and lodash/curry, we're using the Lodash implementation as a control
// method to compare our implementation
const _debounce = require('lodash/debounce');

describe('debounce.js', () => {
  function Context() {
    this.testContext = function() {
      return this instanceof Context;
    }
  }

  const delay = 500;
  const ctx = new Context();


  let func;
  let _func;
  let debounced;
  let _debounced;

  beforeEach(() => {
    // hey, neat! only ever done this with Sinon ... https://jestjs.io/docs/timer-mocks
    jest.useFakeTimers();

    func = jest.fn();
    debounced = debounce(func, delay);

    _func = jest.fn();
    _debounced = _debounce(_func, delay);
  })

  test('returns a function', () => {
    expect(typeof debounce).toEqual('function');
    expect(typeof debounce).toEqual(typeof _debounce);
  });

  test('executes once when called rapidly', () => {
    for (let i = 0; i < 50; i++) {
      debounced();
      _debounced();
    }

    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
    expect(_func).toBeCalledTimes(1);
  });
});
