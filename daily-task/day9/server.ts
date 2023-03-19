import * as mongoose from 'mongoose'
import { createFakeData } from './common/function'
import { Drink } from './models/drink'

mongoose.connect('mongodb://localhost:27017/store')
  .then(() => console.log('連線成功'))
  .catch(({ reason }) => console.log(reason))

// 依序分區執行程式碼
// 不要一次執行所有程式碼

// 創建假資料
Drink.insertMany(createFakeData(10))
  .then(() => {console.log('新增資料成功')})
  .catch((error) => {console.log(error)})

// 尋找一筆 document 並將 ice 改為 去冰，sugar 改為 半糖
Drink.findByIdAndUpdate('6416e8a68a7ab831a501a831', {
  ice: '去冰',
  sugar: '半糖'
})
  .then(() => {console.log('修改資料成功')})
  .catch((error) => {console.log(error)})

// 以 ID 尋找一筆 document 並將其刪除
Drink.findByIdAndDelete('6416e8a68a7ab831a501a831')
  .then(() => {console.log('刪除資料成功')})
  .catch((error) => {console.log(error)})

// 刪除全部 documents
Drink.deleteMany()
  .then(() => {console.log('刪除資料成功')})
  .catch((error) => {console.log(error)})