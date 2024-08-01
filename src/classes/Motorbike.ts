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
  }
// TODO: nao sabemos se vai funcionar para 2 rodas
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
    // TODO: Checar o fato da motorbike ter duas rodas apenas
    super.printDetails ();
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
