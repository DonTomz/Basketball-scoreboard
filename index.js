let guestScore = document.getElementById("count-guest")
let homeScore = document.getElementById("count-home")
let countH = 0
let countG=0

function addone(){
    countH +=1
    homeScore.textContent = countH

}
function addtwo(){
    countH +=2
    homeScore.textContent = countH

}
function addthree(){
    countH +=3
    homeScore.textContent = countH

}
function addoneG(){
    countG +=1
    guestScore.textContent = countG

}
function addtwoG(){
    countG +=2
    guestScore.textContent = countG

}
function addthreeG(){
    countG +=3
    guestScore.textContent = countG

}
function reset(){
    homeScore.textContent = 0
    guestScore.textContent = 0
    countH = 0
    countG=0

}