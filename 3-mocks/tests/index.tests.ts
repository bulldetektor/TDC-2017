import "mocha";
import { expect } from "chai";
import { MockingDemo, JQuery } from "../src/index";

describe("Mocking Demo:", () => {
	describe("When constructing", () => {
		
		let hasCalledAnimate: boolean = false;

		beforeEach(() => {
			const mockedElement: any = {};
			mockedElement.animate = (opt: any, duration?: number) => {
				hasCalledAnimate = true;
			};
			JQuery.select = (selector: string) => {
				return mockedElement 
			};
			const demo = new MockingDemo();
		});

		it("the second heading is animated", () => {
			expect(hasCalledAnimate).to.be.true;
		});
	});
});