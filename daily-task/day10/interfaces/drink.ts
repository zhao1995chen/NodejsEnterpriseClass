interface IDrink {
  product: string,
  price: number,
  ice?: string,
  sugar?: string,
  toppings?: Array<string>
}

export {
  IDrink
}