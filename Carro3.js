// Exemplo de abstração: Representar um carro

class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.isOn = false;
      this.speed = 0;
    }
  
    turnOn() {
      this.isOn = true;
      console.log(`${this.brand} ${this.model} is on.`);
    }
  
    turnOff() {
      this.isOn = false;
      this.speed = 0;
      console.log(`${this.brand} ${this.model} is off.`);
    }
  
    accelerate() {
      if (this.isOn) {
        this.speed += 10;
        console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h.`);
      } else {
        console.log(`${this.brand} ${this.model} is off. Cannot accelerate.`);
      }
    }
  
    brake() {
      if (this.isOn && this.speed > 0) {
        this.speed -= 10;
        console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h.`);
      } else {
        console.log(`${this.brand} ${this.model} is already stopped.`);
      }
    }
  }
  
  // Criando uma instância do objeto Car
  const myCar = new Car("Toyota", "Corolla", 2022);
  
  // Usando os métodos abstraídos da classe Car
  myCar.turnOn();
  myCar.accelerate();
  myCar.accelerate();
  myCar.brake();
  myCar.turnOff();
  