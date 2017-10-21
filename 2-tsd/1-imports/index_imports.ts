// npm install jquery --save
// npm install @types/jquery --save
// + bundling
import * as $ from "jquery";

class TsdDemoWithImports {
	constructor() {
		$("h2").animate({ opacity: 1 }, 1500);
	}
}
