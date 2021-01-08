function z1(){
	console.log('play x/o')
	let canvas = document.getElementById('canvas');
	let ctx = canvas.getContext('2d') ;
	//рисую линии поля
	function draw_line(){
	ctx.beginPath();
	ctx.strokeStyle = '#BC8F8F';
	ctx.moveTo(130, 0);
	ctx.lineTo(130, 390 );
	ctx.stroke();

	ctx.moveTo(260, 0);
	ctx.lineTo(260, 390 );
	ctx.stroke();

	ctx.moveTo(0, 130);
	ctx.lineTo(390, 130 );
	ctx.stroke();

	ctx.moveTo(0, 260);
	ctx.lineTo(390, 260 );
	ctx.stroke();
}
draw_line();

const buttonNewRound = document.querySelector('#button1');
const buttonReset = document.querySelector('#button2');
let firstPlayerWins = document.querySelector('#firstPlayer');
let secondPlayerWins = document.querySelector('#secondPlayer');
let whoturn = document.querySelector('#whoturn');

let field = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let count = 0;

canv.addEventListener('click', canvasClick);
let biasX = 0;
let biasY = 0;
let playerFirst = 0;
let playerSecond = 0;
let breakGame = false;
let currentPlayer = 0;
let winner = 'first' ;

const playerFirstName = 'X';
const playerSecondName = 'O';

whoturn.textContent = `Ходит первый игрок - ${playerFirstName}`;

function canvasClick(click) {
    biasX = click.offsetX;
    biastY = click.offsetY;
    playersMoveText();
  
    if (breakGame == false) {
      if (biasX < 130 && biasY < 130 && field[0][0] != 'X' && field[0][0] != 'O') {
        if (currentPlayer % 2 == 0) {
          printTopLeftX();
          board[0][0] = 'X';
        } else {
          printTopLeftO();
          board[0][0] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 219 && clientY < 109 && clientX > 110 && clientY > 0 && board[0][1] != 'X' && board[0][1] != 'O') {
        if (currentPlayer % 2 == 0) {
          playersMoveText();
          printTopCenterX();
          board[0][1] = 'X';
        } else {
          playersMoveText();
          printTopCenterO();
          board[0][1] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 330 && clientY < 109 && clientX > 220 && clientY > 0 && board[0][2] != 'X' && board[0][2] != 'O') {
        if (currentPlayer % 2 == 0) {
          printTopRightX();
          board[0][2] = 'X';
        } else {
          printTopRightO();
          board[0][2] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 109 && clientY < 219 && clientX > 0 && clientY > 110 && board[1][0] != 'X' && board[1][0] != 'O') {
        if (currentPlayer % 2 == 0) {
          printCenterLeftX();
          board[1][0] = 'X';
        } else {
          printCenterLeftO();
          board[1][0] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 219 && clientY < 219 && clientX > 110 && clientY > 110 && board[1][1] != 'X' && board[1][1] != 'O') {
        if (currentPlayer % 2 == 0) {
          printCenterCenterX();
          board[1][1] = 'X';
        } else {
          printCenterCenterO();
          board[1][1] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 330 && clientY < 219 && clientX > 220 && clientY > 110 && board[1][2] != 'X' && board[1][2] != 'O') {
        if (currentPlayer % 2 == 0) {
          printCenterRightX();
          board[1][2] = 'X';
        } else {
          printCenterRightO();
          board[1][2] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 109 && clientY < 330 && clientX > 0 && clientY > 220 && board[2][0] != 'X' && board[2][0] != 'O') {
        if (currentPlayer % 2 == 0) {
          printBottomLeftX();
          board[2][0] = 'X';
        } else {
          printBottomLeftO();
          board[2][0] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 219 && clientY < 330 && clientX > 110 && clientY > 220 && board[2][1] != 'X' && board[2][1] != 'O') {
        if (currentPlayer % 2 == 0) {
          printBottomCenterX();
          board[2][1] = 'X';
        } else {
          printBottomCenterO();
          board[2][1] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 330 && clientY < 330 && clientX > 220 && clientY > 220 && board[2][2] != 'X' && board[2][2] != 'O') {
        if (currentPlayer % 2 == 0) {
          printBottomRightX();
          board[2][2] = 'X';
        } else {
          printBottomRightO();
          board[2][2] = 'O';
        }
        currentPlayer += 1;
      }else {
        document.getElementById("modal").style.opacity = "1";
        h1result.innerHTML = ('Это поле занято!');
      }
      ifWin();
    }

    draw();
}













/*var area = document.getElementById('area');
var cell = document.getElementsByClassName('cell');
var currentPlayer = document.getElementById('curPlyr');

var player = "x";
var stat = {
    'x': 0,
    'o': 0,
    'd': 0
}
var winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for(var i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

for (var i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {

    var data = [];
    
    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert("Ячейка занята");
        return;
    }

    for(var i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if(checkWin(data)) {
        stat[player] += 1;
        restart("Выграл: " + player);
    }else {
        var draw = true;
        for(var i in cell) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw) {
            stat.d += 1;
            restart("Ничья");
        }
    }

    player = player == "x" ? "o" : "x";
    currentPlayer.innerHTML = player.toUpperCase();
}

function checkWin(data) {
    for(var i in winIndex) {
        var win = true;
        for(var j in winIndex[i]) {
            var id = winIndex[i][j];
            var ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart(text) {
    
    alert(text);
    for(var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    updateStat();
}

function updateStat() {
    document.getElementById('sX').innerHTML = stat.x;
    document.getElementById('sO').innerHTML = stat.o;
    document.getElementById('sD').innerHTML = stat.d;
}*/

}