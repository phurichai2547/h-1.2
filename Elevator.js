
// 5.
// Instruction:
// - Create class Elevator with the following specifications: Class Elevator:
// Constructor
// • Constructor(maxFloor, minFloor): This initializes the properties
// 'maxFloor', 'minFloor' and set 'currentFloor' to 0
// Properties
// • currentFloor: The floor where the elevator currently is. , type number
// • maxFloor: The highest floor the elevator can go to. , type number
// • minFloor: The lowest floor the elevator can go to , type number
// Methods
// • goUp(): Increases currentFloor by 1, but not above maxFloor.
// • goDown(): Decreases currentFloor by 1, but not below minFloor.
// • goToFloor(floor): Takes a floor number and sets currentFloor to that floor if it's within range.
// • displayFloor(): Prints the current floor to the console.

class Elevator {
    constructor(maxFloor, minFloor) {
      this.maxFloor = maxFloor;
      this.minFloor = minFloor;
      this.currentFloor = 0;
    }
  
    goUp() {
      if (this.currentFloor < this.maxFloor) {
        this.currentFloor++;
      }
    }
  
    goDown() {
      if (this.currentFloor > this.minFloor) {
        this.currentFloor--;
      }
    }
  
    goToFloor(floor) {
      if (floor >= this.minFloor && floor <= this.maxFloor) {
        this.currentFloor = floor;
      }
    }
  
    displayFloor() {
      console.log(`Current Floor: ${this.currentFloor}`);
    }
  }


//   6
//   Instruction:
//   - Create a 'Elevator' object for 'Practice 5'. Use a constructor and methods in class.
//   Initiate code:
// Insert your code here

const elevator1 = new Elevator(10, 0);

   
