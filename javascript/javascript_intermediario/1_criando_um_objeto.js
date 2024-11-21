// cria um objeto vazio.

const obj = {}
console.log(obj)
console.log(typeof obj)

// cria um objeto com propriedades e métodos

const user = {
    email: "rodrigo@email.com",
    age: 18,
    name: {
        firstName: "Rodrigo",
        surname: "Gonçalves",
    },
    address: {
        street: "Rua X",
        number: 23,
        city: "São Paulo",
        postal_code: "12345-123"
    },
    message: () => {
        console.log("Endereço")
    }
}

// acessando as propriedades e métodos usando a notação de ponto.

console.log(user.address.street)

// executando o método dos objetos
user.message()

// notação de colchetes (outra maneira de acessar os objetos)

console.log(user["email"])