const imgages = new Array("dice-1.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png", "dice-6.png");
var a = function () { };
var number = 0;
var score1 = 0, score2 = 0, current1 = 0, current2 = 0;
var currentPlay = 1;//xac dinh nguoi choi hien tai
var maxscore = document.getElementById("final").placeholder;
function uiPlayer1(){
    document.getElementById('player1').className = 'color player-0-panel active';
    document.getElementById('player2').className = 'player-1-panel';
}
function uiPlayer2(){
    document.getElementById('player1').className = 'player-0-panel ';
    document.getElementById('player2').className = ' color  player-1-panel active';
}
function onStart() {
    score1 = 0;
    score2 = 0;
    current1 = 0; 
    current2 = 0; 
    document.getElementById('score-0').innerHTML = 0;
    document.getElementById('score-1').innerHTML = 0;
    document.getElementById('current-0').innerHTML = 0;
    document.getElementById('current-1').innerHTML = 0;
    
}
function newGame() {
    clearInterval(a);
    onStart();
    uiPlayer1();   
    document.getElementById('btnroll').style.display = "block";
    document.getElementById('btnhold').style.display = "block";
    document.getElementById("final").placeholder ="Final score";
}
function random() {
    number = Math.floor(Math.random() * 6);
    console.log(number);
    document.getElementById("img").src = imgages[number];
}
function roll() {
    a = setInterval(random, 150);

    setTimeout(function () {
        clearInterval(a);
// set diem cucurent cho nguoi choi
        if (currentPlay == 1) {
            current1 += number + 1
            document.getElementById('current-0').innerHTML = current1;
            document.getElementById('current-1').innerHTML = 0;
        } else if (currentPlay == 2) {

            current2 += number + 1
            document.getElementById('current-1').innerHTML = current2;
            document.getElementById('current-0').innerHTML = 0;
        }
// next player if cucurent=1
        if (number == 0 && currentPlay == 1) {
            uiPlayer2();           
            current1 = number + 1;
            currentPlay = 2;
            document.getElementById('current-0').innerHTML = 0;
        } else if (number == 0 && currentPlay == 2) {
            uiPlayer1();
            current2 = number + 1
            document.getElementById('current-1').innerHTML = 0;
            currentPlay = 1;
        }
        
    }, 1300);
    finish();
   
}
function hold() {
    if (currentPlay == 1) {

        currentPlay = 2
        score1 += current1
        document.getElementById('score-0').innerHTML = score1;
        uiPlayer2();

    } else if (currentPlay == 2) {

        currentPlay = 1;
        score2 += current2
        document.getElementById('score-1').innerHTML = score2;
        uiPlayer1();

    }
    current1 = 0;
    current2 = 0;
    finish();
}
function finish(){

        if (score1 >= maxscore) {
            
            document.getElementById("final").placeholder = score1;
            
            setTimeout(function () {
                newGame() ;
                alert('Player 1 is Winner');
            }, 500);
            
           

        } else if (score2 >= maxscore) {
            
            document.getElementById("final").placeholder =score2;
            setTimeout(function () {
                newGame() ;
                alert('Player 2 is Winner');
            }, 500);
        }  
}