const areDeepEquals = require('./index');
const bigJson = require('./__MOCKS__/large.mock.json');
const {
    baseBasicObj,
    diffBasicObj,
    diffPropBasicObj,
    baseNestedObj,
    diffNestedObj,
    diffPropNestedObj
} = require('./__MOCKS__/basic.mock');

beforeAll(() => {
  Object.prototype.isDeepEquals = function (obj) {
    return areDeepEquals(this, obj);
  };
});

describe('Basic functionality tests', () => {
  test('it should return true when two simple objects are equal', () => {
    const basicObj1 = { ...baseBasicObj };
    const basicObj2 = { ...baseBasicObj };

    const areEqual = basicObj1.isDeepEquals(basicObj2);
    expect(areEqual).toBeTruthy();
  });

  test('it should return false when two simple objects are not equal', () => {
    const basicObj1 = { ...baseBasicObj };
    const basicObj2 = { ...diffBasicObj };

    const areEqual = basicObj1.isDeepEquals(basicObj2);
    expect(areEqual).toBeFalsy();
  });

  test('it should return false has different number of properties', () => {
    const basicObj1 = { ...baseBasicObj };
    const basicObj2 = { ...diffPropBasicObj };

    const areEqual = basicObj1.isDeepEquals(basicObj2);
    expect(areEqual).toBeFalsy();
  });
});

describe('Advanced functionality tests', () => {
  test('it should return true when two nested objects are equal', () => {
    const basicObj1 = { ...baseNestedObj };
    const basicObj2 = { ...baseNestedObj };

    const areEqual = basicObj1.isDeepEquals(basicObj2);
    expect(areEqual).toBeTruthy();
  });

  test('it should return false when two nested objects are not equal', () => {
    const basicObj1 = { ...baseNestedObj };
    const basicObj2 = { ...diffNestedObj };

    const areEqual = basicObj1.isDeepEquals(basicObj2);
    expect(areEqual).toBeFalsy();
  });

  test('it should return false when two nested objects has different number of properties', () => {
    const basicObj1 = { ...baseNestedObj };
    const basicObj2 = { ...diffPropNestedObj };

    const areEqual = basicObj1.isDeepEquals(basicObj2);
    expect(areEqual).toBeFalsy();
  });

  test('it should return true when two big complicated objects are equal', () => {
    const basicObj1 = { ...bigJson };
    const basicObj2 = { ...bigJson };

    const areEqual = basicObj1.isDeepEquals(basicObj2);
    expect(areEqual).toBeTruthy();
  });

  test('it should return false when two big complicated objects are not equal', () => {
    const basicObj1 = { ...bigJson, a: [[[{ a: false, b: 2 }]]] };
    const basicObj2 = { ...bigJson, a: [[[{ a: false, b: 3 }]]] };

    const areEqual = basicObj1.isDeepEquals(basicObj2);
    expect(areEqual).toBeFalsy();
  });
});
