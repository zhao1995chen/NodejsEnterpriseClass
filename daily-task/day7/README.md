# Day 7

## 題目

延續前一天每日任務練習的手搖飲 Schema，建立名稱為 Drink 的 Model，並嘗試新增一筆 document

新增 document 內容如下

```
product: '鮮奶茶',
price: 55,
sugar: '微糖'
```

提交範例

```javascript
const ___ = mongoose.model('___', schema 名稱);

const ___ = new ___({
  /* 新增 document 內容 */
});
___.save()
  .then(() => {console.log('新增資料成功')})
  .catch((error) => {console.log(error)})
  
// 或另一種方式

___.create({
  /* 新增 document 內容 */
})
```

## Setup

```shell
npm i # install dependencies
nodemon server.ts # serve
```

> Before serve server.ts, you need to run mongoDB server.