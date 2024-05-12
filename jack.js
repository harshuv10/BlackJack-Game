let player={
    nam : "Mark",
    chips: 210
}

let cards=[]

let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
// let sumEl=document.querySelector("#sum-el")
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.nam+": $"+player.chips

function getRandomCard(){
    let randomCard=Math.floor(Math.random()*13)+1
    if (randomCard===1)
        return 11
    else if (randomCard>10)
        return 10
    else
    return randomCard
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent="Cards: "
    for(let i=0; i < cards.length ;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum
if (sum < 21){
    message="Do you want to draw a new card?"
}
else if(sum === 21){
    message="You've got Blackjack!"
    hasBlackJack=true
}
else{
    message="You're out of the game!"
    isAlive=false
}
messageEl.textContent=message
}
function newCard(){
    if (isAlive===true && hasBlackJack===false){
    console.log("Drawing a new card from the deck!")
    let card=getRandomCard()
    cards.push(card)
    sum+=card
    renderGame()
    }
}