const Color = require('./index.js');
const assert = require('assert');

// assert.deepEqual(Color.toRGB('#F8E100'), '248, 225, 0');

assert.deepEqual(Color.toHex('100,200,255'), '#64C8FF');

// getType
assert.deepEqual(Color.getType('#000000'), 'hex')
assert.deepEqual(Color.getType('#000'), 'hex')
assert.deepEqual(Color.getType('#ABC'), 'hex')
assert.deepEqual(Color.getType('#abc'), 'hex')
assert.deepEqual(Color.getType('#aBc'), 'hex')
assert.deepEqual(Color.getType('#A01'), 'hex')
assert.deepEqual(Color.getType('0, 0, 0'), 'rgb')
assert.deepEqual(Color.getType('255, 255, 255'), 'rgb')
assert.deepEqual(Color.getType('123, 123, 123'), 'rgb')
assert.deepEqual(Color.getType('000000'), undefined)
assert.deepEqual(Color.getType('#1234'), undefined)
assert.deepEqual(Color.getType('#12345'), undefined)
assert.deepEqual(Color.getType('#12345X'), undefined)
assert.deepEqual(Color.getType('0, 0, 256'), undefined)
assert.deepEqual(Color.getType('0, 0, 01'), undefined)
assert.deepEqual(Color.getType('255, 255, 0255'), undefined)
assert.deepEqual(Color.getType('10, 10, 1000'), undefined)
assert.deepEqual(Color.getType('1,1,1'), undefined)
assert.deepEqual(Color.getType(' 1, 1, 1'), undefined)
assert.deepEqual(Color.getType('1, 1, 1 '), undefined)
