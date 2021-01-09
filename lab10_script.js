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

	var winIndex = [
	    [field[0][0],field[0][1],field[0][2]],
	    [field[1][0],field[1][1],field[1][2]],
	    [field[2][0],field[2][1],field[2][2]],
	    [field[0][0],field[1][0],field[2][0]],
	    [field[0][1],field[1][1],field[2][1]],
	    [field[0][2],field[1][2],field[2][2]],
	    [field[0][0],field[1][1],field[2][2]],
	    [field[0][2],field[1][1],field[2][0]]
	];

	canvas.addEventListener('click', canvasClick);
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
    	biasY = click.offsetY;
    	playersMoveText();
  
    	if (breakGame == false) {
      	if (biasX < 130 && biasY < 130 && field[0][0] != 'X' && field[0][0] != 'O') {
        	if (currentPlayer % 2 == 0) {
          	printTopLeftX();
          	field[0][0] = 'X';
        	} else {
          	printTopLeftO();
          	field[0][0] = 'O';
        	}
        	currentPlayer += 1;
      	}else if (biasX < 260 && biasY < 130 && biasX > 130 && field[0][1] != 'X' && field[0][1] != 'O') {
        	if (currentPlayer % 2 == 0) {
          	printTopCenterX();
          	field[0][1] = 'X';
        	} else {
          	printTopCenterO();
          	field[0][1] = 'O';
        	}
        	currentPlayer += 1;
      	}else if (biasX < 390 && biasY < 130 && biasX > 260 && field[0][2] != 'X' && field[0][2] != 'O') {
        	if (currentPlayer % 2 == 0) {
          	printTopRightX();
          	field[0][2] = 'X';
        	} else {
          	printTopRightO();
          	field[0][2] = 'O';
        	}
        	currentPlayer += 1;
      	}else if (biasX < 130 && biasY < 260 && biasX > 0 && biasY > 130 && field[1][0] != 'X' && field[1][0] != 'O') {
        	if (currentPlayer % 2 == 0) {
          	printCenterLeftX();
          	field[1][0] = 'X';
        	} else {
          	printCenterLeftO();
          	field[1][0] = 'O';
        	}
        	currentPlayer += 1;
      	}else if (biasX < 260 && biasY < 260 && biasX > 130 && biasY > 130 && field[1][1] != 'X' && field[1][1] != 'O') {
        	if (currentPlayer % 2 == 0) {
          	printCenterCenterX();
          	field[1][1] = 'X';
        	} else {
          	printCenterCenterO();
          	field[1][1] = 'O';
        	}
        	currentPlayer += 1;
      	}else if (biasX < 390 && biasY < 260 && biasX > 260 && biasY > 130 && field[1][2] != 'X' && field[1][2] != 'O') {
        	if (currentPlayer % 2 == 0) {
          	printCenterRightX();
          	field[1][2] = 'X';
        	} else {
          	printCenterRightO();
          	field[1][2] = 'O';
        	}
        	currentPlayer += 1;
      	}else if (biasX < 130 && biasY < 390 && biasX > 0 && biasY > 260 && field[2][0] != 'X' && field[2][0] != 'O') {
        	if (currentPlayer % 2 == 0) {
          	printBottomLeftX();
          	field[2][0] = 'X';
        	} else {
          	printBottomLeftO();
          	field[2][0] = 'O';
        	}
        	currentPlayer += 1;
      	}else if (biasX < 260 && biasY < 390 && biasX > 130 && biasY > 260 && field[2][1] != 'X' && field[2][1] != 'O') {
        	if (currentPlayer % 2 == 0) {
          	printBottomCenterX();
          	field[2][1] = 'X';
        	} else {
          	printBottomCenterO();
         	field[2][1] = 'O';
        	}
        	currentPlayer += 1;
      	}else if (biasX < 390 && biasY < 390 && biasX > 260 && biasY > 260 && field[2][2] != 'X' && field[2][2] != 'O') {
        	if (currentPlayer % 2 == 0) {
          	printBottomRightX();
          	field[2][2] = 'X';
        	} else {
          	printBottomRightO();
          	field[2][2] = 'O';
        	}
        	currentPlayer += 1;
      	}else {
        	document.getElementById("modal").style.opacity = "1";
        	h1result.innerHTML = ('Это поле занято!');
      	}
      	winIndex = [
	    [field[0][0],field[0][1],field[0][2]],
	    [field[1][0],field[1][1],field[1][2]],
	    [field[2][0],field[2][1],field[2][2]],
	    [field[0][0],field[1][0],field[2][0]],
	    [field[0][1],field[1][1],field[2][1]],
	    [field[0][2],field[1][2],field[2][2]],
	    [field[0][0],field[1][1],field[2][2]],
	    [field[0][2],field[1][1],field[2][0]]
	];
      	if_wineer();
    	}

    	draw();
	}


	function if_wineer(){
		var win1 = false;
		var win2 = false;
		console.log('start check for winer');
		for (let i=0; i<=winIndex.length-1; i++){

			console.log('index = ',winIndex[i][0]);
			if (winIndex[i][0] == winIndex[i][1] && winIndex[i][1] == winIndex[i][2] && winIndex[i][2] == 'X')
			{
				win1 = true;
				console.log('win1 =',true);
				break;
			}
			else if(winIndex[i][0] == winIndex[i][1] && winIndex[i][1] == winIndex[i][2] && winIndex[i][2] == 'O')
			{
				win2 = true;
				console.log('win2 =',true);;
				break;
			}
		}
		if (win1 == true)
		{
			playerFirst += 1;
			firstPlayerWinsFunc();
			breakGame = true;
		}
		else if(win2 == true)
		{
			playerSecond += 1;
			secondPlayerWinsFunc();
			breakGame = true;
		}

	}

	function draw() {
	  for (let i=0; i<3; ++i) {
	    for (let j=0; j<3; ++j) {
	      if (field[i][j] == '') {
	        count += 1;
	      } 
	    }
	  }
	  if (count == 0) {
	    document.getElementById("modal").style.opacity = "1";
	    h1result.innerHTML = ('НИЧЬЯ');
	  }
	  console.log(count);
	  count = 0;
	}

	function playersMoveText() {
  		if (winner == 'first') {
    		if (currentPlayer % 2 == 1) {
      			whoturn.textContent = `Ходит первый игрок - ${playerFirstName}`;
    		} else if (currentPlayer % 2 == 0) {
      			whoturn.textContent = `Ходит второй игрок - ${playerSecondName}`;
    		}
  			} else if (winner == 'second') {
    			if (currentPlayer % 2 == 0) {
      				whoturn.textContent = `Ходит первый игрок - ${playerFirstName}`;
    			} else if (currentPlayer % 2 == 1) {
      				whoturn.textContent = `Ходит второй игрок - ${playerSecondName}`;
    			}
  			}
	}
	let close = document.getElementById('close');
	let h1result = document.getElementById('result');

	close.onclick = closeModal;
	function closeModal() {
	    document.getElementById("modal").style.opacity = "0";
	}

	function firstPlayerWinsFunc() {
	  winner = 'first';
	  count = 0;
	  firstPlayerWins.textContent = `Первый игрок(X): ${playerFirst}`;
	  firstPlayerWins.style.fontFamily = "CENTURY GOTHIC";
	  firstPlayerWins.style.fontSize= "14px";
	  firstPlayerWins.style.color= "rgb(80, 80, 80)";
	  firstPlayerWins.style.textAlign= "center";
	  whoturn.textContent = `Ходит первый игрок - ${playerFirstName}`;
	  document.getElementById("modal").style.opacity = "1";
	  h1result.innerHTML = ('Победу одержал игрок №1(X)!');
	  document.getElementById("canvas").style.opacity = "0.5";
	}
	
	function secondPlayerWinsFunc() {
	  winner = 'second';
	  count = 0;
	  secondPlayerWins.textContent = `Второй игрок(O): ${playerSecond}`;
	  secondPlayerWins.style.fontFamily = "CENTURY GOTHIC";
		secondPlayerWins.style.fontSize= "14px";
		secondPlayerWins.style.color= "rgb(80, 80, 80)";
		secondPlayerWins.style.textAlign= "center";
	  document.getElementById("modal").style.opacity = "1";
	  h1result.innerHTML = ('Победу одержал игрок №2(O)!');
	  document.getElementById("canvas").style.opacity = "0.5";
	}

	buttonNewRound.addEventListener('click', () => {
	    document.getElementById("canvas").style.opacity = "1";
	    ctx.clearRect(0, 0, 390, 390);
	    draw_line();
	    field = [
	        ['', '', ''],
	    	['', '', ''],
	    	['', '', '']
	  	];
	  	currentPlayer = 0;
	  	count = 0;
	  	breakGame = false;
	}) ;
	
	buttonReset.addEventListener('click', () => {
	  	document.getElementById("canvas").style.opacity = "1";
	  	ctx.clearRect(0, 0, 390, 390);
	  	draw_line();
	  	field = [
		    ['', '', ''],
		    ['', '', ''],
		    ['', '', '']
	  	];
		currentPlayer = 0;
		count = 0;
		winner = 'first';
		breakGame = false;
		playerFirst = 0;
		playerSecond = 0;
		whoturn.textContent = `Ходит первый игрок - ${playerFirstName}`;
		firstPlayerWins.textContent = `Первый игрок(X): ${playerFirst}`;
		secondPlayerWins.textContent = `Второй игрок(O): ${playerSecond}`;
		secondPlayerWins.style.fontFamily = "CENTURY GOTHIC";
		secondPlayerWins.style.fontSize= "14px";
		secondPlayerWins.style.color= "rgb(80, 80, 80)";
		firstPlayerWins.style.fontFamily = "CENTURY GOTHIC";
	  	firstPlayerWins.style.fontSize= "14px";
	  	firstPlayerWins.style.color= "rgb(80, 80, 80)";
	  	firstPlayerWins.style.textAlign= "center";
	  	secondPlayerWins.style.textAlign= "center";
	});

	function printTopLeftX() {
  		ctx.beginPath();
  		ctx.strokeStyle = 'rgb(80, 80, 80)';
	  	ctx.moveTo(1, 1);
	  	ctx.lineTo(129,129 );
	  	ctx.stroke();
	  	ctx.beginPath();
	  	ctx.strokeStyle = 'rgb(80, 80, 80)';
	  	ctx.moveTo(1, 129);
	  	ctx.lineTo(129, 1);
	  	ctx.stroke();
	}

	function printTopCenterX() {
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(131, 1);
	  ctx.lineTo(259, 129);
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(131, 129);
	  ctx.lineTo(259, 1);
	  ctx.stroke();
	}
	function printTopRightX() {
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(261, 1);
	  ctx.lineTo(389, 129);
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(389, 1);
	  ctx.lineTo(261, 129);
	  ctx.stroke();
	}
	
	function printCenterLeftX() {
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(1, 131);
	  ctx.lineTo(129, 259);
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(1, 259);
	  ctx.lineTo(129, 131);
	  ctx.stroke();
	}
	function printCenterCenterX() {
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(131, 131);
	  ctx.lineTo(259, 259);
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(131, 259);
	  ctx.lineTo(259, 131);
	  ctx.stroke();
	}
	function printCenterRightX() {
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(261, 131);
	  ctx.lineTo(389, 259);
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(261, 259);
	  ctx.lineTo(389, 131);
	  ctx.stroke();
	}
	
	function printBottomLeftX() {
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(1, 261);
	  ctx.lineTo(129, 389);
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(1, 389);
	  ctx.lineTo(129, 261);
	  ctx.stroke();
	}
	function printBottomCenterX() {
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(131, 261);
	  ctx.lineTo(259, 389);
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(131, 389);
	  ctx.lineTo(259, 261);
	  ctx.stroke();
	}
	function printBottomRightX() {
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(261, 261);
	  ctx.lineTo(389, 389);
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgb(80, 80, 80)';
	  ctx.moveTo(261, 389);
	  ctx.lineTo(389, 261);
	  ctx.stroke();
	}

	
	function printTopLeftO() {
	  ctx.beginPath();
	  ctx.arc(60, 60, 60, 0, 360);  
	  ctx.stroke();
	}
	function printTopCenterO() {
	  ctx.beginPath();
	  ctx.arc(195, 60, 60, 0, 360);
	  ctx.stroke();
	}
	function printTopRightO() {
	  ctx.beginPath();
	  ctx.arc(325, 60, 60, 0, 360);
	  ctx.stroke();
	}
	
	function printCenterLeftO() {
	  ctx.beginPath();
	  ctx.arc(60, 195, 60, 0, 360);
	  ctx.stroke();
	}
	function printCenterCenterO() {
	  ctx.beginPath();
	  ctx.arc(195, 195, 60, 0, 360);
	  ctx.stroke();
	}
	function printCenterRightO() {
	  ctx.beginPath();
	  ctx.arc(325, 195, 60, 0, 360);
	  ctx.stroke();
	}
	
	function printBottomLeftO() {
	  ctx.beginPath();
	  ctx.arc(60, 325, 60, 0, 360);
	  ctx.stroke();
	}
	function printBottomCenterO() {
	  ctx.beginPath();
	  ctx.arc(195, 325, 60, 0, 360);
	  ctx.stroke();
	}
	function printBottomRightO() {
	  ctx.beginPath();
	  ctx.arc(325, 325, 60, 0, 360);
	  ctx.stroke();
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