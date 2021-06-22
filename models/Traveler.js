class Traveler {
    constructor(name, isHealthy = true, food = 1) {
      this.name = name;
      this.food = Number(food);
      this.isHealthy = isHealthy === 'true' ? true : false;
    }

    hunt() {
      this.food += 2;
    }
  
    eat() {
      if (this.food > 0) {
        this.food--;
      } else {
        this.isHealthy = false;
      }
    }
    
    set food(foodQty){
      this._food = foodQty;
    }

    get food() {
      return this._food;
    }
    
    set isHealthy(health){
      this._isHealthy = health;
    }

    get isHealthy() {
      return this._isHealthy;
    }
};

module.exports = Traveler;