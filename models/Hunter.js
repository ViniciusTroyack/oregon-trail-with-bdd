const Traveler = require("./Traveler");

class Hunter extends Traveler{
    constructor(name, isHealthy = true, food = 2) {
        super(name, isHealthy, food)
       }

    hunt() {
        this.food += 5;
      }
    
    eat() {
      if (this.food >= 2) {
        this.food -= 2;
      } else {
        this.food = 0;
        this.isHealthy = false;
        }
      }
      

  giveFood (traveler, numOfFoodUnits) {
    if(this.food >= numOfFoodUnits ){
      this.food -= numOfFoodUnits;
      traveler.food += numOfFoodUnits;      
    }
 }
}
module.exports = Hunter;