function pizzaOven(crustType, sauceType, cheeses,toppings)
{
    let pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;

}



var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Pizza 1:"pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Pizza 2:"pizza2);

var pizza3 = pizzaOven("gluten free", "white sauce",  "feta",  "olives");
console.log("Pizza 3:"pizza3);

var pizza4 = pizzaOven("hawaiian bread", "tikka masala", "mozzarella", "mushrooms");
console.log("Pizza 4:"pizza4);

