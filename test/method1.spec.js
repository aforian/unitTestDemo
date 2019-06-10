const { expect } = require('chai');
const method1 = require('../method1');

describe('測試 method1', () => {
	it('給1應得0.25', () => {
		expect(method1(1)).to.equal(0.25);
	});
	it('給2應得0.75', () => {
		expect(method1(2)).to.equal(0.75);
	})
})