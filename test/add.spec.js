// console.log('hello test');

const { expect } = require('chai');
const add = require('../index');

describe('測試套件add', () => {

	// 如何寫測試
	// it('測試範例: 1+2預期是3', () => {
	// 	expect(1+2).to.equal(3);
	// })
	// it('測試範例: 3+4預期是7', () => {
	// 	expect(3+4).to.equal(7);
	// })

	// 將add方法帶入測試
	// it('測試範例: 1+2預期是3', () => {
	// 	expect(add(1,2)).to.equal(3);
	// })
	// it('測試範例: 3+4預期是7', () => {
	// 	expect(add(3,4)).to.equal(7);
	// })

	// 將add方法帶入測試2
	it('測試預期是3的各種測試', () => {
		expect(add(0,3)).to.equal(3);
		expect(add(1,2)).to.equal(3);
		expect(add(2,1)).to.equal(3);
		expect(add(3,0)).to.equal(3);
		expect(add(1.5,1.5)).to.equal(3);
	})
	it('測試預期是7的各種測試', () => {
		expect(add(0,7)).to.equal(7);
		expect(add(1,6)).to.equal(7);
		expect(add(2,5)).to.equal(7);
		expect(add(3,4)).to.equal(7);
		expect(add(3.5,3.5)).to.equal(7);
	})
})