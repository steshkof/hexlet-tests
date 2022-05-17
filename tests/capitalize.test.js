#!/usr/bin/env node
import { strict as assert } from 'assert';
import capitalize from "../src/capitalize.js";

// if (capitalize('hello') !== 'Hello') {
//     throw new Error('Функция работает неверно!');
// }

assert(capitalize('hello') === 'Hello');
assert.equal(capitalize('hello'), 'Hello');

// if (capitalize('') !== '') {
// throw new Error('Функция работает неверно!');
// }
assert(capitalize('') === '');
assert.deepEqual(capitalize(''), '');

console.log('Все тесты пройдены!');