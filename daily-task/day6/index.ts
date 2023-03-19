import * as mongoose from 'mongoose'

const drinkSchema = new mongoose.Schema({  
  /* 請在此填入答案 */
  product: {
  type: String,
  require: [ true, '產品名稱未填寫' ]
  },
  price: {
    type: Number,
    require: [ true, '價錢名稱未填寫' ]
  },
  ice: {
    type: String,
    default: '正常冰'
  },
  sugar: {
    type: String,
    default: '全糖'
  },
  toppings: {
    type: Array<String>,
  }
});