import * as $  from "jquery";
// declare var $: any;

class TsdDemo {
	constructor() {
		$("h2").animate({ opacity: 1 }, 1500);
	}
}

//  tsc .\index.ts --outDir .dist