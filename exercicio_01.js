class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos(){
    try {
      return this.atributos();
    } catch (error) {
      return error
    }
  } 

  atributos() {
    if (this.nome != ""){
    return {
      nome: this.nome,
      idade: this.idade,
      especie: this.especie
    };
  } else {
    throw new MeuErro("Você esqueceu alguma coisa");
  }
  }
}

const meuAnimal = new Animal("", 3, "cachorro");
const atributos = meuAnimal.mostrarAtributos();
console.log(meuAnimal.mostrarAtributos());

// Imprimindo os atributos
console.log(atributos.nome);   
console.log(atributos.idade);  
console.log(atributos.especie);
