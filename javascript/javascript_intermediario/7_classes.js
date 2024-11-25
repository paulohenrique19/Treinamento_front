class MyClass {
    constructor(str) {
        console.log("classe instanciada " + str)
    }
}

/* no momento da instanciação da classe, o construtor é executado,
por isso printamos a o console.log() sem nenhum método, já que ele
está dentro do construtor*/
const myclass = new MyClass("string")

class Product {
    constructor(name) {
        /* o this.name, serve pra referenciar o próprio 
        name de product, não o que está sendo passado no construtor*/
        this.name = name
    }
}

const product = new Product("Teclado")
console.log(product.name)

//adicionado métodos na classe 
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    sendEmail() {
        console.log("E-mail enviado para", this.name, "no endereço: ", this.email)
    }

}

const user = new User("paulo", "paulo@mail.com")
user.sendEmail()

// método estático
class User {
    static showMessage(message){
        console.log(message)
    }
}

// usando o static (método) faz com que podemos usar um método SEM instanciar a classe
User.showMessage("show message")


// aplicando herança com classes
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    makeNoise() {
        console.log("Algum som genérico do animal")
    }
}

class Dog extends Animal {

}

// Dog, herda as propriedades de Animal
const dog = new Dog("cachorro", 10)
dog.makeNoise()

class Cat extends Animal {

}

const cat = new Cat("gato", 8)
