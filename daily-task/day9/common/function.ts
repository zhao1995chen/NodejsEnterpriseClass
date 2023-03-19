import { PRODUCT_NAME, SUGAR, ICE, IDrink } from "../const"

export function createFakeData(n: number): Array<IDrink> {
  const arr: Array<IDrink> = []
  let counter: number = 0
  while (counter < n) {
    arr.push({
      product: PRODUCT_NAME[Math.round(Math.random() * 4)],
      price: Math.round(Math.random() * 10) * 5 + 20,
      ice: ICE[Math.round(Math.random() * 4)],
      sugar: SUGAR[Math.round(Math.random() * 4)]
    })
    counter++
  }
  // console.log(arr)
  return arr
}