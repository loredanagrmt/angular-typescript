export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Loredana',
}

const passenger2: Passenger = {
    name: 'Andrea',
    children: ['Laura', 'Juan'],
}

const reutrnChildrenNumber = (passenger: Passenger): number=> {

if(!passenger.children) return 0; 

    /* const howManyChildren= passenger.children?.length || 0; */
    const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren);

    return howManyChildren; 
}

reutrnChildrenNumber(passenger2); 