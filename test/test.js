
var assert = require('assert')
var splitLineItems = require('../index')

describe('split-line-items', function () {

	it('creates objects from object with array key', function (done) {

		var object = {
			foo: 'bar',
			array: ['a', 'b', 'c']
		}

		var expected = [{
			foo: 'bar',
			array: 'a'
		},{
			foo: 'bar',
			array: 'b'
		},{
			foo: 'bar',
			array: 'c'
		}]

		var result = splitLineItems(object, 'array')
		//console.log('result: ' + JSON.stringify(result))
		assert.deepEqual(result, expected)

		done()
	})

	it('creates objects from an array that is 2 or more layers deep', function (done) {

		var object = {
			foo: 'bar',
			anotherLayer: {
				bar: 'foo',
				array: ['a', 'b', 'c']
			}
		}

		var expected = [{
			foo: 'bar',
			anotherLayer: {
				bar: 'foo',
				array: 'a'
			}
		},{
			foo: 'bar',
			anotherLayer: {
				bar: 'foo',
				array: 'b'
			}
		},{
			foo: 'bar',
			anotherLayer: {
				bar: 'foo',
				array: 'c'
			}
		}]

		var result = splitLineItems(object, 'anotherLayer.array')
		//console.log('result: ' + JSON.stringify(result))
		assert.deepEqual(result, expected)

		done()
	})
})