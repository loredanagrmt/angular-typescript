export function whatsMyType<T>(argument: T): T {
    return argument;
}

let amIString = whatsMyType<String>('Hola mundo');
let aINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(aINumber.toFixed());
console.log(amIArray.join('-')); 