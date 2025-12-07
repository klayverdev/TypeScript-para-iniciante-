// <> serve para passar tipos comom  parametros genericos

const retyrnValue = <T>(value: T): T => value;

const message = retyrnValue<string>("Hello World");

const count = retyrnValue<number>(5);

function getFirstValueFrontArray<Type>(array: Type[]) {
    return array[0];
}

const firstValueFromStringArray = getFirstValueFrontArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFrontArray<number>([10, 20]);

//Promises
const returnPromise = async (): Promise<string> => {
    return "5"; 
};

//Classes
class GenericNumber<T>{
    zeroValue: T;
    sum: ( x: T, y: T) => T;

    constructor(zeroValue: T, sum: ( x: T, y: T) => T){
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber<number>(0,(x: number, y:number) => {
    return x + y;
})
