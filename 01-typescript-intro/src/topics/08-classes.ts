export class Person{

    constructor(
        public firstName:string, 
        public lastName:string, private address: string='No address'){
    }
}

export class Hero {

//public person:Person; 

    constructor(
        public alterEgo:string, 
        public age: number, 
        public realName: string, 
    ){
        //this.person= new Person(realName);
    }
}

//export class Hero{

    //constructor(
        //public alterEgo:string, 
        //public age: number, 
        //public realName: string, 
        //public person:Person, 
    //){
        //this.person=new Person(realName); 
       //}
//}

const tony=new Person('Tony', 'Stark', 'New York')
const ironman=new Hero('Iroman ',45, 'Tony'); 


console.log(ironman)