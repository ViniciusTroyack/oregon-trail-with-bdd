const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { doutor, viajante } = require("./../../app");



When('um Traveler doente for curado', function () {
    viajante.isHealthy = false;
    doutor.heal(viajante)
  });

Then('o Traveler ficara saudável', function () {
    assert.strictEqual(viajante.isHealthy, true)
  });

  
When('um Traveler saudável for curado', function () {
    viajante.isHealthy = true;
    doutor.heal(viajante)
  });

Then('o Traveler continuara saudável', function () {
    assert.strictEqual(viajante.isHealthy, true)
  });