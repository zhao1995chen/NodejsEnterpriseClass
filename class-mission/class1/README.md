# 第一週主線任務

## 前置作業

請建立一個 database，並建立一個 posts collection
將此 [JSON 資料](https://drive.google.com/file/d/1VCuWX2M6K-Du8pWlrcGImO_ux4Zwsa6v/view?usp=sharing)，透過 Compass 倒入到 posts collection

```
貼文集合欄位介紹
- name：貼文姓名
- image：貼文圖片
- content：貼文內容
- likes：按讚數
- comments：留言數
- createdAt：發文時間
- type：貼文種類[friend(摯友)、group(社團)]
- tags：貼文標籤
```

# 題庫

## 課程範圍

1. 搜尋 name 欄位為 “Ray Xu” 的 document 列表

```javascript
db.posts.find({"name":"Ray Xu"})
```

2. 新增一筆 document，請全部欄位皆填寫

```javascript
// input
db.postts.insertOne({
  name: "Cornell Broadbear",
  tags: ["謎因", "電影", "感情"],
  type: "group",
  image: "http://dummyimage.com/197x100.png/dddddd/000000",
  createdAt: "2022-03-08 08:02:43 UTC",
  content:
    "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum",
  likes: 1898,
  comments: 991,
})

// output
{
  acknowledged: true,
  insertedId: ObjectId("641afbb545719288b8a59ecd")
}
```

3. 新增多筆 document，請全部欄位皆填寫

```javascript
// input
db.posts.insertMany([
  {
    name: "Matilda Croad",
    tags: ["幹話", "教育", "電影"],
    type: "group",
    image: "http://dummyimage.com/248x100.png/dddddd/000000",
    createdAt: "2022-03-17 05:14:43 UTC",
    content:
      "lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a",
    likes: 39,
    comments: 871,
  },
  {
    name: "Evangelia Buckney",
    tags: ["電影", "心情"],
    type: "group",
    image: "http://dummyimage.com/140x100.png/5fa2dd/ffffff",
    createdAt: "2022-03-21 21:17:44 UTC",
    content:
      "eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus",
    likes: 1089,
    comments: 892,
  },
  {
    name: "Sheree Cordingly",
    tags: ["電影"],
    type: "friend",
    image: "http://dummyimage.com/189x100.png/5fa2dd/ffffff",
    createdAt: "2022-03-21 05:44:44 UTC",
    content:
      "nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend",
    likes: 278,
    comments: 1435,
  },
  {
    name: "Cornell Broadbear",
    tags: ["幹話", "感情"],
    type: "friend",
    image: "http://dummyimage.com/208x100.png/cc0000/ffffff",
    createdAt: "2022-03-10 23:20:44 UTC",
    content:
      "elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
    likes: 542,
    comments: 616,
  },
  {
    name: "Rorke Andres",
    tags: ["心情", "教育", "電影"],
    type: "friend",
    image: null,
    createdAt: "2022-03-22 21:53:44 UTC",
    content:
      "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices",
    likes: 873,
    comments: 1139,
  },
])

// output
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("641afcfa45719288b8a59ece"),
    '1': ObjectId("641afcfa45719288b8a59ecf"),
    '2': ObjectId("641afcfa45719288b8a59ed0"),
    '3': ObjectId("641afcfa45719288b8a59ed1"),
    '4': ObjectId("641afcfa45719288b8a59ed2")
  }
}
```

4. 修改一筆 document，filter 條件請用 _id 指定其中一筆資料，content 欄位調整為測試資料

```javascript
// input
db.posts.updateOne(
  { _id: ObjectId("641afcfa45719288b8a59ece") },
  { $set: { content: "哈哈哈哈你看看你" } }
)

// output
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

5. 修改多筆 name 欄位為 "Ray Xu" 的 document 列表，content 欄位都調整為哈哈你看看你

```javascript
// input
db.posts.updateMany({ name: "Ray Xu" }, { $set: { content: "哈哈你看看你" } })

// output
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 48,
  modifiedCount: 48,
  upsertedCount: 0
}
```

6. 刪除一筆 document，filter 條件請用 _id 任意指定其中一筆資料

```javascript
// input
db.posts.deleteOne({ _id: ObjectId("641afa1b743af8e65af9a363") })

// output
{
  acknowledged: true,
  deletedCount: 1
}
```

7. 刪除多筆 document，filter 條件請用 type 為 group 的值，刪除所有社團貼文

```javascript
// input
db.posts.deleteMany({ type: "group" })

// output
{
  acknowledged: true,
  deletedCount: 793
}
```

8. 刪除多筆 document，filter 條件為以下條件<br>
  a. name:"Ray Xu"<br>
  b. likes: 500(含) 個讚以下

```javascript
// input
db.posts.deleteMany({ name: "Ray Xu", likes: { $lte: 500 } })

// output
{
  acknowledged: true,
  deletedCount: 10
}
```

9. 查詢全部 posts 的 document 列表

```javascript
// input
db.posts.find()
```

10. 關鍵字搜尋 name 裡面含有 o 的 document 列表

```javascript
// input
db.posts.find({ name: /o/ })
```

11. 查詢name 欄位為 "Ray Xu" ，filter 篩選出介於 500~1000(含) 個讚（大於等於 500、小於等於 1000）

```javascript
// input
db.posts.find({ likes: { $gte: 500, $lte: 1000 } })
```

12. 查詢 comments 有大於等於 500 以上的 document 列表

```javascript
// input
db.posts.find({ comments: { $gte: 500 } })
```

13. 查詢 tags 欄位，有 謎因 或(or) 幹話 的 document 列表

```javascript
// input
db.posts.find({ tags: { $in: [ "謎因", "幹話" ] } })
```

14. 查詢 tags 欄位，有 幹話 的 document 列表，需隱藏 _id 欄位

```javascript
// input
db.posts.find({ tags: { $in: [ "謎因", "幹話" ] } }, { _id: 0 })
```

15. 請嘗試用 Mongo javascript 指令刪除全部 Documents

```javascript
// input
db.posts.deleteMany({})

// output
{
  acknowledged: true,
  deletedCount: 211
}
```

## 自主研究題

1. posts 所有 document 數量為？(回傳數字)

```
db.posts.find().count()
```

2. 請查詢 name 為 Ray Xu 的 document 列表，排序為由新到舊

```javascript
// input
db.posts.find({ name: "Ray Xu" }).sort({ createdAt: -1 })
```

3. 請查詢 name 為 Ray Xu 的 document 列表，顯示前 30 筆資料

```javascript
// input
db.posts.find({ name: "Ray Xu" }).limit(30)
```

4. 請查詢 name 為 Ray Xu ，顯示100(含) 個讚以上的前 30 筆 document 列表，時間排序由新到舊

```javascript
// input
db.posts.find({ name: "Ray Xu", likes: { $gte: 100 } }).limit(30).sort({ createdAt: -1 })
```

5. 請查詢 comments 超過 100 的 document 列表，跳過前 30 筆資料，再顯示 30 筆資料

```javascript
// input
db.posts.find({ comments: { $gte: 100 }}).skip(30).limit(30)
```

6. 尋找超夯熱門貼文，請查詢 likes 且(and) comments 都 1,500(含)以上的 document 列表

```javascript
// input
db.posts.find({ likes: { $gte: 1500 }, comments: { $gte: 1500 } })
```

7. 尋找普通熱門貼文，請查詢 likes 或(or) comments ， 1,000(含)以上 的 document 列表

```javascript
// input
db.posts.find({ $or: [ { likes: { $gte: 1000 } }, { comments: { $gte: 1000 } } ] })
```

8. 查詢 image 欄位為 null 的 document 列表

```javascript
// input
db.posts.find({ image: { $type: 10 } })
```

9. 隨意找一筆 document 資料，將 tags 欄位裡的陣列，新增一個新 tags 為 遊記

```javascript
// input
db.posts.aggregate( [ { $sample: { size: 1 } } ] )

// output
{
  _id: ObjectId("641b0e7945719288b8a59ed4"),
  name: 'Evangelia Buckney',
  tags: [
    '電影',
    '心情'
  ],
  type: 'group',
  image: 'http://dummyimage.com/140x100.png/5fa2dd/ffffff',
  createdAt: '2022-03-21 21:17:44 UTC',
  content: 'eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus',
  likes: 1089,
  comments: 892
}

// input
db.posts.updateOne(
  { _id: ObjectId("641b0e7945719288b8a59ed4") },
  { $push: { tags: "遊記" } }
)

// output
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

10. 將所有 tags 陣列裡的 感情 都移除

```javascript
// input
db.posts.updateMany({}, { $pull: { tags: "感情" } })

// output
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 211,
  modifiedCount: 74,
  upsertedCount: 0
}
```