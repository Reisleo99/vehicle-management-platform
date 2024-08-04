// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
  ){
    super(vin, color, make, model, year, weight, topSpeed, wheels);
    this.wheels = this.checkWheels(wheels)
  }
  
  override checkWheels(wheels: Wheel[]): Wheel[] {
    if (wheels.length !== 2) {
      return [new Wheel(), new Wheel()];
    } else {
      return wheels;
    }
  }

  doWheelie(): void {
    console.log (`Motorbike ${this.make} ${this.model} is doing a wheelie!`)
  }

  override printDetails(): void {
    super.printDetails ();
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
