class carro{
   constructor(nome, modelo, cor, ano ){
      this.name = nome
      this.mod = modelo
      this.cor = cor
      this.ano = ano
   }
   corre(){
      console.log("O carro do piloto " + this.name + " de modelo " + this.mod + " sai em disparada")
   }
}
class pista {
   constructor(tamanho, cor, largora) {
      this.tamanho = tamanho;
      this.cor = cor
      this.largora = largora
   }

}
class Motor {
   constructor(velocidade, potencia, motor) {
      this.velocidade = velocidade;
      this.potencia = potencia;
      this.motor = motor;
   }
}

class Piloto {
   constructor(nome, idade, caracteristicas) {
      this.nome = nome;
      this.idade = idade;
      this.caracteristicas = caracteristicas;
   }

}
const motor1 = new Motor(200, 300, "V8");
const piloto1 = new Piloto("João", 30, "Experiente");
// const pista1 = new Pista(5000, "Azul", 10)
const carro1 = new carro("Marcos" ,"Ferrari", "vermelho", "2023")
carro1.corre()





