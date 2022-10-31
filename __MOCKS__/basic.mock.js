const baseBasicObj = { a: 1, b: 2, c: 'Hello', d: false };
const diffBasicObj = { a: 1, b: 2, c: 'hello', d: false };
const diffPropBasicObj = { a: 1, b: 2, c: 'hello', d: false, e: 83 };
const baseNestedObj =  { a: 1, b: 2, c: 'Hello', d: { a: 2, b: 3, c: 4, e: true } };
const diffNestedObj =  { a: 1, b: 2, c: 'Hello', d: { a: 2, b: 3, c: 5, e: true } };
const diffPropNestedObj =  { a: 1, b: 2, c: 'Hello', d: { a: 2, b: 3, c: 5} };

module.exports = {
    baseBasicObj,
    baseNestedObj,
    diffNestedObj,
    diffPropNestedObj,
    diffBasicObj,
    diffPropBasicObj,
}