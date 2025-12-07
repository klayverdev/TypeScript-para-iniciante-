interface IPerson {
    id: number;
    sayMyName(): string;
}

class Person implements IPerson {
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name;
    }
}
// aqui em baixo uma forma mais simplificada de fazer a mesma coisa que a classe Person faz

class PersonRefact {
    constructor(readonly id: number,
    protected name: string,
    private age: number) {}
}
//---------------------------------------------------------------------

class Employee extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age);
    }

    whoAmI(): string {
    return this.name;
    }
}

const Klayver = new Person(1, "Klayver", 20);
