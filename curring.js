const coffeeMachine = liquid=>espresso => `${espresso}+${liquid}`;
const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');
const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffe bean');

console.log('americano = ',americano);
console.log('latte =',latte);
