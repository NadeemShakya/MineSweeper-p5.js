var rows, cols;
var w = 40;
var grid = [];
var x = [];
var bomb_number = 10;
var next;
var current ;
var currentGrid;
var temp = [];
var stack = [];
var mousex , mousey ;
var spreadOn = false;
var alertOn = false;
var showBomb = false;
var gameover = false;
var gameovermsg = false;
var nadim = [];

function setup(){

	createCanvas(windowWidth, windowHeight);
	background(0, 80);
	rows = 400 / w;
	cols = 400 / w;
	for(var j = 0; j < rows; j++){
		for(var i = 0; i < cols; i++){
			var cells = new Cells(i, j);
			grid.push(cells);
		}
	}

	bomb_set();

	for(var i = 0; i < x.length; i++){
		grid[x[i]].bomb_set();

	}


	for(var	 i = 0; i < grid.length; i ++){
		currentGrid = grid[i]
		var t = currentGrid.bomb_checker();
		temp.push(t);
	
	}	
		// console.log(temp);
	for(var i = 0; i < grid.length; i ++){
			grid[i].bryan();
	}	
	textSize(35);
	fill(255, 80, 10);
	text("MINESWEEPER", 525, 70);



}

function draw(){


	for(var i = 0; i < grid.length; i++){
		grid[i].show();	
		
			
	}
	if(spreadOn){

		current.visited = true;
		current.walls();
		next = current.spread();
		if(next){
			stack.push(current);
			next.visited = true;
			current = next;
		}else if(stack.length > 0){
			current = stack.pop();
		}
	}

	if(gameovermsg){
		gameovermsg = false;
		textSize(20);
		fill(0);
		noStroke();
		text("Refresh To Play Again!", 550, 550);
	}



}


function index(i, j){
	if(i < 0 || j < 0 || i > cols-1 || j > rows-1){
		return -1;
	}else{
		return i + j * cols;
	}

}

function mousePressed(){
	if(!gameover){
			mousex = mouseX;
			mousey = mouseY;
			var x = mouseX-450;
			var y = mouseY-100;
			var i = floor(x/ w);
			var j = floor(y/ w);
			var box_number = index(i, j);
			if(temp[box_number] == undefined && !grid[box_number].checker){
				current = grid[box_number];
				spreadOn = true;
			}
			if(temp[box_number] ==  undefined && grid[box_number].checker){
					showBomb = true;
					alert("Game Over!! You Lose!");
					gameover = true;
					gameovermsg = true;
			}

			if(temp[box_number] != undefined){
				grid[box_number].printNumbers(box_number);
			}
		}


	}
			function bomb_set(){
			for(var i = 0;  i < bomb_number; i++){
				var temp = floor(random(0, grid.length));
				x.push(temp);


			}
}
