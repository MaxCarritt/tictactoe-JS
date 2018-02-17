let playground = "<table>";

for (i=0; i <3; i++) {
	playground += "<tr>";
		for(j=0; j <3; j++) {
			playground += `<td id ="${i}_${j}" onclick="tictac(${i},${j})"></td>`;
		}
	playground += "</tr>";
}



playground = playground + "</table>";
document.getElementsByTagName('body')[0].innerHTML += playground;

let player = "x";
let hasEnded = false;
const field = [[],[],[]];

function alterAfterRepaint(message) {
	setTimeout(function() {
		alert(message)	
	}, 0)
}

function tictac(i,j) {
	if (!hasEnded && !field[i][j]) {
		document.getElementById(`${i}_${j}`).innerHTML = player;
		field[i][j] = player;
		checkGameState();
		if (player === "x") {
			player = "o";
		}
		else {
			player = "x";
		}
		
	}
}

function checkGameState(){
	//chck rows
	console.log('jo');
	let diagFilled1 = field[0][0] && field[1][1] && field[2][2]
	let diagMatch1 = field[0][0] === field[1][1] && field[0][0] === field[2][2]
	let diagFilled2 = field[0][2] && field[1][1] && field[2][0]
	let diagMatch2 = field[0][2] === field[1][1] && field[0][2] === field[2][0]
	if (diagFilled1 && diagMatch1) {
				hasEnded = true;
				alterAfterRepaint(`Player ${player} has won!`)
				return;
	}

	else if (diagFilled2 && diagMatch2) {
				hasEnded = true;
				alterAfterRepaint(`Player ${player} has won!`)
				return;
	}



	for (i = 0; i < 3; i++){
		let fieldFilled = field[i][0] && field[i][1] && field[i][2]
		let acrossMatch = field[i][0] === field[i][1] && field[i][0] === field[i][2]
		let fieldFilledV = field[0][i] && field[1][i] && field[2][i]
		let acrossMatchV = field[0][i] === field[1][i] && field[0][i] === field[2][i]
		

		if (fieldFilled && acrossMatch) {
				hasEnded = true;
				alterAfterRepaint(`Player ${player} has won!`)
				break;
		} else if (fieldFilledV && acrossMatchV) {
				hasEnded = true;
				alterAfterRepaint(`Player ${player} has won!`)
				break;
		} 



	}
}