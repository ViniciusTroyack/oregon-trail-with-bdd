class Wagon {
    constructor(capacity) {
      this.capacity = capacity;
      this.passengers = [];
    }
  
    getAvailableSeatCount() {
      return this.capacity;
    }
  
    join(passageiro) {
      if (this.capacity > 0) {
        this.passengers.push(passageiro);
        this.capacity--;
        return true;
      }
      return false;
    }
  
    shouldQuarantine() {
      return this.passengers.find((passageiro) => passageiro.isHealthy === false) ? true : false;
      } 
    
    totalFood() {
        this.totalFoods = 0 
        this.passengers.forEach((passageiro) => {
          this.totalFoods += passageiro.food;
        });
        return this.totalFoods;    
  };
};

module.exports = Wagon;

