let homeScoreEl = document.getElementById("homeS")
let awayScoreEl = document.getElementById("awayS")

homeScore = 0
awayScore = 0

function homeOne() {
  homeScore += 1
  homeScoreEl.textContent = homeScore
  console.log('Home +1 Clicked')
}
function homeTwo() {
  homeScore += 2
  homeScoreEl.textContent = homeScore
  console.log('Home +1 Clicked')
}
function homeThree() {
  homeScore += 3
  homeScoreEl.textContent = homeScore
  console.log('Home +1 Clicked')
}
function awayOne() {
  awayScore += 1
  awayScoreEl.textContent = awayScore
  console.log('Home +1 Clicked')
}
function awayTwo() {
  awayScore += 1
  awayScoreEl.textContent = awayScore
  console.log('Home +1 Clicked')
}
function awayThree() {
  awayScore += 1
  awayScoreEl.textContent = awayScore
  console.log('Home +1 Clicked')
}

function newGame() {
  homeScore = 0
  awayScore = 0
  homeScoreEl.textContent = homeScore
  awayScoreEl.textContent = awayScore
}