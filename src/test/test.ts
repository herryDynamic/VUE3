class Student {
	fullName:stirng;
	constructor(public firstName:string,public middleInitial:string,public lasstName:string){
		this.fullName = firstName + "" + middleInitial + " + lastName;
	}
}

interface Person {
	firstName: string;
	lastName:string;
}


function greeter(person){
	return 'Hello,' + person.firstName + "" + person.lastName;
}

let user = {firstName:"herry", lastName:"zs"}

document.body.innerHTML = greeter(user);




