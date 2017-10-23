function sayHello(to: IHaveAName) {
    return "Hello, " + to.name + "!!";
}
interface IHaveAName {
	name: string;
}
class Receiver implements IHaveAName {
	constructor(public name: string){
	}
}
const aReceiver = new Receiver("TDC 2017");
sayHello(aReceiver);
