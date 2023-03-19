const SUGAR = [ '無糖', '微糖', '半糖', '少糖', '全糖' ]

const ICE = [ '完全去冰', '去冰', '微冰', '少冰', '全冰' ]

const PRODUCT_NAME = [ '烏龍茶', '鮮奶茶', '金萱茶', '胭脂紅茶', '葡萄氣泡飲' ]

interface IDrink {
  product: string,
  price: number,
  ice?: string,
  sugar?: string,
  toppings?: Array<string>
}

export {
  SUGAR,
  ICE,
  PRODUCT_NAME,
  IDrink
}