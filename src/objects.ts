//Type 
type order = {
    productId: string;
    price: number;
}
type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: order [];
    register(): string;
};

const user: User = {
    firstName: "Klayver",
    age:20,
    email: "klayver@example.com",
    orders: [{productId: '1', price: 200}],
    register( ){
        return "a";
    }
};

const preintLog = (message: string): void => {}

    preintLog(user.password!);  
// ! da bipes no codigo dizendo que eu tenho certeza que aquela propriedade nao esta nula ou indefinida
// ? da a opcao de a propriedade ser ou nao definida

//Union
type Author = {
    books : string[];
};

const author: Author & User = {
    age: 2 ,
    books: ["1"],
    email: "author@example.com",
    firstName: "Author",
    orders: [],
     register( ){
        return "a";
    }
};
// & significa que o objeto author tem que ter todas as propriedades de Author e User
//orders pode ser um array vazio

// Interface
interface UserInterface {
    readonly firstName: string;
    email: string;
    login(): string;
}
 
const emailUser: UserInterface = {
    email: "email@example.com",
    firstName: "Klayver" ,
    login(){
        return "a";
    }
};

//readonly é apenas para leitura

interface Autohorinterface {
    books: string[];
}

const newauthor: UserInterface & Autohorinterface = {
    email: "author@example.com",
    firstName: "Author",
    books: [],
        login(){
        return "a";
    }
};

type Grade = number | string; 
const grade:number | string = 1 

