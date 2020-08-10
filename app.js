/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,gamePlaying;
init()



//document.querySelector('#current-' + activePlayer).textContent = dice;//setter
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

//var x = document.querySelector('#score-0').textContent;//getter
//console.log(x)



console.log(document.querySelector(this.activeElement))

document.querySelector('.btn-roll').addEventListener('click',function() {
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) +1;
    
    
    
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        var diceRoll = 0;
        
       
        //update the round score unless the random number is 1
        
        if(dice !== 1){//double equal to prevent type coercion
            //Add to round score
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }else {
            //next player
            
            nextPlayer()
        }
        
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >=100){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display='none'
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');//add a css class
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');//remove a css class
            gamePlaying = false;
        }else{
            nextPlayer()

        };
     
    }
   //Add current score to Global score
   
   //Update user interface
    
    
    
    
    //Check for a winner
    
});

function nextPlayer(){
    
   activePlayer ===0?activePlayer=1:activePlayer = 0;
    
    roundScore = 0;
    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
    document.querySelector('.dice').style.display = 'none';   
};


document.querySelector('.btn-new').addEventListener('click',function(){
    init()
    
    
});

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore=0;
    var input = createElement('INPUT');
    input.setAttribute('type','text')
    document.body.appendChild(input)
    document.querySelector('.dice').style.display= 'none'//modifying css 


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent='Player 1'
    document.getElementById('name-1').textContent='Player 2'
    
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
    gamePlaying = true
    
    
}










