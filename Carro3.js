
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
        console.log(`${this.brand} ${this.model} está acelerando. Velocidade atual: ${this.speed} km/h.`);
      } else {
        console.log(`${this.brand} ${this.model} está fora. não pode acelerar.`);
      }
    }
  
    brake() {
      if (this.isOn && this.speed > 0) {
        this.speed -= 10;
        console.log(`${this.brand} ${this.model} está freando. Velocidade atual: ${this.speed} km/h.`);
      } else {
        console.log(`${this.brand} ${this.model} ja esta parado.`);
      }
    }
  }
  
  // Criando uma instância do objeto Car
  const myCar = new Car( "Bugatti", 2023);
  const myCar1 = new Car("Lamborghini");
  
  // Usando os métodos abstraídos da classe Car
  myCar.turnOn();
  myCar.accelerate();
  myCar.accelerate();
  myCar.brake();
  myCar.turnOff();
  