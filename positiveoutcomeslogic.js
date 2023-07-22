//Statements 

var empathyBeforeJudgement = "Empathy before judgement. "
var loveIsOutThere = "Love is out there. "
var asLongAsWeHaveEachOther = "As long as we have each other, hope is never gone."
var acknowledgementFocus = "Acknowledge everything but focus on what you can control. "
var allWeHaveIsEachOther = "When all is said and done, all we really have is each other."
var somethingToGive = "You have something to contribute to the universe. " 
var beNiceToYourself = "The world will not always be kind to you. So be kind to yourself. "
var trustBeauty = "Trust the beauty of the universe. "
var consumedByAnger ="We cannot allow ourselves to be consumed by anger and despair."
var progressBeginsWithTruth ="All progress begins with truth. "
var wellDoneForBeingAPerson ="Well done! Simply for being a person… it is not always easy."


//Questions 

var painCausesUsToLashOut ="Maybe no one is intrinsically bad? Maybe our own pain causes us to lash out and neglect? "
var patienceDisiciplineConfidence ="Maybe patience is not about discipline, but rather finding contentment in the present and being confident about the future? "
var createHappiness ="If we cannot always find happiness, perhaps we can create some? "

//Challenges 

var doSomethingNice = "Challenge: do something nice. "
var doSomethingBrave = "Challenge: do something brave. "
var trySomethingNew ="Challenge: try something new."
var makeSomeoneHappy ="Challenge: do something to make someone happy."
var learnSomethingNew ="Challenge: learn something new. "
var doSomethingHealthy ="Challenge: do something healthy. "


var messageArray = [empathyBeforeJudgement, loveIsOutThere, asLongAsWeHaveEachOther,
    acknowledgementFocus, allWeHaveIsEachOther, somethingToGive, 
beNiceToYourself,trustBeauty,consumedByAnger, progressBeginsWithTruth, 
wellDoneForBeingAPerson, painCausesUsToLashOut,patienceDisiciplineConfidence, 
createHappiness, doSomethingNice,doSomethingBrave,doSomethingHealthy,learnSomethingNew,
makeSomeoneHappy]


//Function 


let randomElement = messageArray[Math.floor(Math.random() * messageArray.length)];

function displayMessage(){

    document.getElementById('message').innerHTML = randomElement
}