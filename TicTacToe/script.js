let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameButton=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true;

const winPatterns=[
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[3,4,5],
	[6,7,8],
];


boxes.forEach((box) => {
	box.addEventListener("click", () => {
		console.log("box was clicked");
		if(turnO){
			box.innerText="O";
			turnO =false;
		}else{
			box.innerText="X";
			turnO =true;
		}
		box.disabled =true;

		checkWinner();
	});
});
const disableBoxes=() => {
	for(let box of boxes){
		box.disabled=true;
	}
};


const enableBoxes=() => {
	for(let box of boxes){
		box.disabled=false;
		box.innerText ="";
	}
};

const showWinner=(winner) => {
	msg.innerText =`Winner is ${winner}`;
	msgContainer.classList.remove("hide");
	disableBoxes();
};

const checkDraw=() => {
	for(let box of boxes){
		if(box.innerText ===""){
			return false;
		}
	}
	return true;
};

const checkWinner =() => {
	for( let pattern of winPatterns){
			let position1Value =boxes[pattern[0]].innerText;
			let position2Value =boxes[pattern[1]].innerText;
			let position3Value =boxes[pattern[2]].innerText;

			if(position1Value !="" && position2Value !="" && position3Value!=""){
				if(position1Value === position2Value && position2Value === position3Value){
					console.log("winner",position1Value);
					showWinner(position1Value);
				}
			}
	}


if (checkDraw()) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};

const resetGame=() => {
	turnO = true;
	enableBoxes();
	msgContainer.classList.add("hide");
};


newGameButton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);