// Tipos Basicos
let age: number = 5;
const firsName: string = "Klayver";
const inValid: boolean = true;
 let idk: any = 5

idk ='12'
idk = true

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true];
const names: string[] = ["Klayver", "João", "Maria"];

// Tupla
const person: [number, string, boolean] = [1, "Klayver", true]; 

//lista de tuplas
const people: [number, string][] = [
    [1, "Klayver"],
    [2, "Maria"],
    [3, "João"],
];

// Intersections 
const productId: string | number | boolean = false

// Enum
enum Direction {
    Up = "1",
    Down = "2",
    Left = 'Esquerda',
    Right = "Direita"
}

const DirectionUp = Direction.Up;

//Type Assertion
const productName: any = "Boné";

//let itemId productName as string;
let idtemId = <string>productName;


console.log(Direction);

