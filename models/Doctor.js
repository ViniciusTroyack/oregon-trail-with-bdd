const Traveler = require("./Traveler");

class Doctor extends Traveler{
    constructor(name, isHealthy = true, food = 1) {
       super(name, isHealthy, food)
      }
    
    heal(traveler){
        traveler.isHealthy = true
    }
}

module.exports = Doctor;