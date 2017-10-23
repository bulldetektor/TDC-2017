
export class MockingDemo {
	constructor() {
		new JQuery("h2")
			.animate({ opacity: 1 }, 1500);
	}
}

declare var $: any;
export class JQuery {
	private _element: any;
	constructor(selector: string) {
		this._element = JQuery.select(selector);
	}
	static select(selector: string): any {
		return $(selector);
	}
	animate(opt: AnimationOptions, duration: number): any {
		this._element.animate(opt, duration);
	}
}

export interface AnimationOptions{
	opacity: number;
}
