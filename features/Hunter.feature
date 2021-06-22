# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo caçar mantimentos
    Para que eu possa alimentar a todos

    Contexto:
        Dado um Hunter de nome "Brabo"
        E o Hunter sempre começa sua viagem com 2 refeição
        E o Hunter sempre começa sua viagem com saúde

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então ele ficara com 7 refeições

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então sua quantidade de refeições deve ser igual a 0
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então sua quantidade de refeições deve ser igual a 0
        E o Hunter ficará doente
    
    Cenário: Tranferiu comida 
        Quando o Hunter sair para caçar 2 vezes
        E transferir 5 refeição para o viajante
        Então sua quantidade de refeições deve ser igual a 7
    
    Cenário: Tranferiu comida sem ter
        Quando o Hunter sair para caçar 1 vezes
        E transferir 8 refeição para o viajante
        Então sua quantidade de refeições deve ser igual a 7
