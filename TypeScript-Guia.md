# 📘 Guia de TypeScript — Comandos e Conceitos

> Documentação de estudo com comandos, anotações e exemplos práticos de TypeScript.

---

## 📦 Instalação

```bash
# Instalar globalmente
npm install -g typescript

# Instalar localmente no projeto
npm install typescript
```

---

## ⚙️ Comandos Essenciais

| Comando | Descrição |
|--------|-----------|
| `tsc` | Compila o arquivo TypeScript para JavaScript |
| `tsc --init` | Cria o arquivo de configuração `tsconfig.json` |

---

## 🔣 Símbolos Importantes

| Símbolo | Descrição |
|--------|-----------|
| `!` | Garante que a propriedade **não é nula ou indefinida** |
| `?` | Torna a propriedade **opcional** |
| `&` | O objeto deve ter **todas as propriedades** dos tipos combinados |
| `readonly` | A propriedade é **apenas para leitura** |

---

## 🧱 Objetos

```ts
// Definindo tipos com "type"
type User = { name: string; email: string };
type Author = { books: string[] };

const user: User = { name: "Klayver", email: "klayver@email.com" };

// Combinando tipos com "&"
const author: Author & User = {
  name: "Klayver",
  email: "klayver@email.com",
  books: ["TypeScript na Prática"],
};

// Interface — alternativa ao type para objetos
interface UserInterface {
  name: string;
  email: string;
}

// Union Type
type Grade = number | string;
const grade: Grade = 10;
```

> `type` define o formato de um objeto ou valor. `interface` é similar, mas mais indicada para objetos e classes.

---

## 🔧 Funções

```ts
// Interface para funções
interface MathFunc {
  (x: number, y: number): number;
}

const sum: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;

// Função sem retorno (void)
const log = (message: string): void => {
  console.log(message);
};
```

> `void` indica que a função **não retorna nenhum valor**.

---

## 🗂️ Tipos Básicos

```ts
let age: number = 23;
const firstName: string = "Klayver";
const isValid: boolean = true;
let idk: any = "qualquer coisa";

// Arrays
const ids: number[] = [1, 2, 3];
const names: string[] = ["Alice", "Bob"];

// Tupla — array com tipos fixos por posição
const person: [number, string, boolean] = [1, "Klayver", true];

// Union Type
const productId: string | number | boolean = "ABC123";

// Enum
enum Direction { Up, Down, Left, Right }
const go = Direction.Up;

// Type Assertion
const productName: any = "Notebook";
const itemId = productName as string;
```

> **Tupla** = array com número fixo de elementos e tipos definidos por posição.  
> **any** = desativa a verificação de tipos (use com cuidado).  
> **Enum** = conjunto de valores nomeados e constantes.

---

## 🏛️ Classes

```ts
interface PersonInterface {
  name: string;
  sayMyName(): string;
}

class Person implements PersonInterface {
  readonly id: number;
  protected name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  sayMyName(): string {
    return this.name;
  }
}

class Employee extends Person {
  private role: string;

  constructor(id: number, name: string, role: string) {
    super(id, name);
    this.role = role;
  }

  whoAmI(): string {
    return `${this.name} — ${this.role}`;
  }
}
```

| Modificador | Acesso |
|------------|--------|
| `public` | Em qualquer lugar |
| `protected` | Classe + subclasses |
| `private` | Apenas na própria classe |
| `readonly` | Leitura, sem modificação |

---

## 🧬 Genéricos

```ts
// Função genérica
function returnValue<T>(value: T): T {
  return value;
}

const message = returnValue<string>("Olá!");
const count = returnValue<number>(42);

// Retornando o primeiro item de um array
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// Função assíncrona com genérico
async function returnPromise<T>(value: T): Promise<T> {
  return value;
}

// Classe genérica
class GenericNumber<T> {
  zeroValue!: T;
  sum!: (x: T, y: T) => T;
}

const myNum = new GenericNumber<number>();
myNum.zeroValue = 0;
myNum.sum = (x, y) => x + y;
```

> **Genéricos (`<T>`)** permitem criar funções e classes que funcionam com **qualquer tipo**, mantendo a segurança de tipos.

---

## ⚛️ TypeScript com React

```bash
npx create-react-app meu-app --template typescript
```

---

## 📁 Estrutura do Repositório

```
📦 typescript-para-iniciantes
 ┣ 📄 index.ts       → Tipos básicos
 ┣ 📄 objects.ts     → Objetos e interfaces
 ┣ 📄 functions.ts   → Funções tipadas
 ┣ 📄 classes.ts     → Classes e herança
 ┣ 📄 generics.ts    → Genéricos
 ┗ 📄 tsconfig.json  → Configuração do compilador
```

---

## 👤 Autor

**Klayver Oliveira**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/klayver-oliveira)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/klayverdev)

---

> 💡 *Este repositório é open source e faz parte do meu portfólio de estudos. Feedbacks são bem-vindos!*
