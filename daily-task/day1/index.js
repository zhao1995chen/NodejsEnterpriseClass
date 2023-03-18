const checkScore = new Promise((resolve, reject) => {
  const score = Math.round(Math.random() * 100)
  if (score >= 60) resolve(score)
  else reject("不及格")
})


checkScore
  .then(data => console.log(data))
  .catch(e => console.log(e))