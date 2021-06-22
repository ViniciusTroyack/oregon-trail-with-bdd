const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador, viajante } = require("./../../app");

/*given*/
Given('um Hunter de nome {string}', function (string) {
  cacador.name = string;
});

Given('o Hunter sempre começa sua viagem com {int} refeição', function (int) {
  cacador.food = int
  });

Given('o Hunter sempre começa sua viagem com saúde', function () {
    cacador.isHealthy = true;
  });

  Given('transferir {int} refeição para o viajante', function (int) {
    cacador.giveFood(viajante, int)
    });
/*when*/
When("o Hunter sair para caçar {int} vezes", function (int) {
  for (let i = 0; i < int; i++) {
    cacador.hunt();
  }
});

When("o Hunter parar para comer {int} vezes", function (int) {
  for (let contador = 0; contador < int; contador++) {
    cacador.eat();
  }
});

/**then */
Then("ele ficara com {int} refeições", function (int) {
  assert.strictEqual(cacador.food, int);
});

Then("sua quantidade de refeições deve ser igual a {int}", function (int) {
  assert.strictEqual(cacador.food, int);
});

Then("o Hunter não ficará doente", function () {
  assert.strictEqual(cacador.isHealthy, true);
});

Then("o Hunter ficará doente", function () {
   assert.strictEqual(cacador.isHealthy, false);
});
