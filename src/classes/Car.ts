// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Car class that extends Vehicle class
class Car extends Vehicle {
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
  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the wheels
    
  }
}

// Export the Car class as the default export
export default Car;
