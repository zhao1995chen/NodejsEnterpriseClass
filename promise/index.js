const calcScore = score => {
  return new Promise((resolve, reject) => {
    console.log('作業批改中')
    setTimeout(() => {
      if (score >= 20) {
        resolve({name: '小明', score})
      } else {
        reject('退學')
      }
    }, 1000)
  })
}

const calcReward = ({name, score}) => {
  return new Promise((resolve, reject) => {
    console.log('正在確認獎品中')
    setTimeout(() => {
      if (score > 90) {
        resolve(`${name}獲得電影票`)
      } else if (score > 60) {
        resolve(`${name}獲得嘉獎`)
      } else {
        reject(`${name}沒有獎品，打手心 10 下`)
      }
    }, 2000);
  })
}

// async/await
const init = async () => {
  try {
    const data = await calcScore(Math.round(Math.random() * 100))
    const reward = await calcReward(data)
    console.log(reward)
  } catch(e) {
    console.log(e)
  }
}

init()

// Promise chain
// calcScore(Math.round(Math.random() * 100))
//   .then(data => calcReward(data))
//   .then(data => console.log(data))
//   .catch(e => console.log(e))

// Promise.all()
// Promise.all([calcScore(40), calcScore(2), calcScore(90)])
//   .then(data => console.log(data))