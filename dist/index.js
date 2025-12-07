"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos Basicos
let age = 5;
const firsName = "Klayver";
const inValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true];
const names = ["Klayver", "João", "Maria"];
// Tupla
const person = [1, "Klayver", true];
//lista de tuplas
const people = [
    [1, "Klayver"],
    [2, "Maria"],
    [3, "João"],
];
// Intersections 
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction["Up"] = "1";
    Direction["Down"] = "2";
    Direction["Left"] = "Esquerda";
    Direction["Right"] = "Direita";
})(Direction || (Direction = {}));
const DirectionUp = Direction.Up;
//Type Assertion
const productName = "Boné";
//let itemId productName as string;
let idtemId = productName;
console.log(Direction);
//# sourceMappingURL=index.js.map