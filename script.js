function buildClockMarks() {
  const container = document.getElementById('container')
  const calcAngleDegrees = (x, y) => Math.atan2(y, x) * 180 / Math.PI
  
  for (let i = 0, a = 0, x = 250, y = 0; i < 60; i++) {
    let mark = document.createElement('div')
    let newX = x * Math.cos(a) - y * Math.cos(a)
    let newY = y * Math.cos(a) + x * Math.sin(a)
    let r = calcAngleDegrees(newX, newY)
    if (i % 5) {
      mark.className = 'mark'
      mark.style.left = `${245 + newX}px`
    } else {
      mark.className = 'mark-thicc'
      mark.style.left = `${235 + newX}px`
    }
    mark.style.top = 250 + newY + 'px'
    mark.style.transform = `rotate(${r}deg)`
    a +=  2* Math.PI / 60
    container.appendChild(mark)
  }
}

function runClock() {
  const secondHand = document.getElementById('second-hand')
  const minuteHand = document.getElementById('minute-hand')
  const hourHand = document.getElementById('hour-hand')

  setInterval(() => {
    let s = new Date().getSeconds() * 6 - 90
    let m = new Date().getMinutes() * 6 - 90
    let h = new Date().getHours() * 30 - 90
    secondHand.style.transform = `rotate(${s}deg)`
    minuteHand.style.transform = `rotate(${m}deg)`
    hourHand.style.transform = `rotate(${h}deg)`
  }, 100)
}

buildClockMarks()
runClock()
