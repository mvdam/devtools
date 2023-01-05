enum Food {
  Burger,
  Pizza,
}

type Ingredients = {
  [Food.Burger]: "Meat";
  [Food.Pizza]: "Cheese";
};

type Foods = { [K in Food]: Ingredients[K] };

const myFood: Foods = {
  [Food.Burger]: "Meat",
  [Food.Pizza]: "Cheese",
};
