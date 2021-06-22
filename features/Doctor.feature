# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo deixar os outros passageiros saudáveis
    Para que eles possam seguir viagem.

  

    Cenário: Curou um Traveler doente
        Quando um Traveler doente for curado
        Então o Traveler ficara saudável

    Cenário: Curou um Traveler saudável 
        Quando um Traveler saudável for curado
        Então o Traveler continuara saudável

