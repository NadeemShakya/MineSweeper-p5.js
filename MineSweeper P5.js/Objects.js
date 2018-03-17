function Cells(i, j){
	this.i = i;
	this.j = j;
	this.checker = false;
	this.number = false;
	this.visited = false;


	this.bryan = function(){ 
		if(temp[index(i, j)] != undefined && !this.checked){     // bryan vaneko chai hamro number lai true xa ki xaina denote garne for DFS!
			this.number  = true;
			
		}
	}

	this.highlight = function(){
		var x = i * w;
		var y = j * w;
		fill(255, 0, 255);
		rect(x, y, w, w);


	}
	this.show = function(){

		var x = i * w;
		var y = j * w;
		strokeWeight(2);
		stroke(110, 50);
		noFill();
		rect(x+450, y+100, w, w);
		if(this.checker && showBomb){       // TO SHOW  BOMBS!!
			fill(255, 25, 25);
			noStroke();
			textSize(35);
			text("*", x+464, y+140);
		}

		if(this.visited){
			strokeWeight(1);
			stroke(80,150);
			fill(120, 250);
			rect(x+452, y+102, w-5, w-3);
		}		

	}
	this.bomb_set = function(){
		this.checker = true;	

	}

	this.bomb_checker = function(){
		bombCounterarray = [];
		if(!this.checker){
		var top        =  grid[index(i, j-1)];

		var topRight   =  grid[index(i+1, j-1)];

		var right      =  grid[index(i+1, j)];

		var	bottomRight=  grid[index(i+1, j+1)]; 

		var bottom     =  grid[index(i, j+1)];

		var bottomLeft =  grid[index(i-1, j+1)];

		var left       =  grid[index(i-1, j)] ;

		var topLeft    =  grid[index(i-1, j-1)];
		
		if(top && top.checker){

			bombCounterarray.push(top);
		}

		if(topRight && topRight.checker){
			bombCounterarray.push(topRight);

		}

		if(right && right.checker){
			bombCounterarray.push(right);

		}

		if(bottomRight && bottomRight.checker){
			bombCounterarray.push(bottomRight);

		}

		if(bottom && bottom.checker){
			bombCounterarray.push(bottom);

		}

		if(bottomLeft && bottomLeft.checker){
			bombCounterarray.push(bottomLeft);

		}

		if(left && left.checker){
			bombCounterarray.push(left);

		}

		if(topLeft && topLeft.checker){
			bombCounterarray.push(topLeft);

		}
		

		if(bombCounterarray.length >  0){
			return bombCounterarray.length;
		}else{
			return undefined;
		}

}
	}


	this.printNumbers = function(count){
		var x = i * w;
		var y =  j * w;
		textSize(18);
		var counter = temp[count];
		if(counter != undefined){

			if(counter == 1){
				
				fill(20, 125 , 20);
				noStroke();
				text("1", x + 465, y + 128);
			}	

			if(counter == 2){
				fill(0, 10, 255);
				noStroke();
				text("2", x+465, y + 128);			
			}
			if(counter == 3){
				fill(255, 255, 0);
				noStroke();
				text("3", x+465, y + 128);			
			}
			if(counter == 4){
				fill(20, 125 , 20);
				noStroke();
				text("4", x+465, y + 128);			
			}
			if(counter == 5){
				fill(0, 10, 255);
				noStroke();
				text("5", x+465, y + 128);			
			}
			if(counter == 6){
				fill(255, 255, 0);
				noStroke();
				text("6", x+465, y + 128);			
			}		
			if(counter == 7){
				fill(255, 0, 0);
				noStroke();
				text("7", x+465, y + 128);			
			}	
			if(counter == 8){
				fill(255, 28, 150);
				noStroke();
				text("8", x+465, y + 128);			
			}				

		} 

	}

	this.spread = function(){

		var neighbors = [];
		var top        =  grid[index(i, j-1)];
		var right      =  grid[index(i+1, j)];
		var bottom     =  grid[index(i, j+1)];
		var left       =  grid[index(i-1, j)];

		if(top && !top.checker && !top.number && !top.visited){
			neighbors.push(top);
		}
		if(right && !right.checker && !right.number && !right.visited){
			neighbors.push(right);
		}
		if(bottom && !bottom.checker && !bottom.number && !bottom.visited){
			neighbors.push(bottom);

		}
		if(left && !left.checker && !left.number && !left.visited){
			neighbors.push(left);
		}
		if(neighbors.length > 0){
	
			var temp = floor(random(0, neighbors.length));
		
		
			return neighbors[temp]; 

		}else{
			return undefined;
		}

	}

	this.walls = function(){
		var top        =  grid[index(i, j-1)];
		var right      =  grid[index(i+1, j)];
		var bottom     =  grid[index(i, j+1)];
		var left       =  grid[index(i-1, j)];

		if(top && !top.visited && !top.checker && top.number){
			var box_number = index(i, j-1);
				top.printNumbers(box_number);
			

		}
		if(right && !right.visited && !right.checker && right.number){
				var box_number = index(i+1, j);
				right.printNumbers(box_number);
				// console.log(box_number);
			

		}
		if(bottom && !bottom.visited && !bottom.checker && bottom.number){
			var box_number = index(i , j+1);
			bottom.printNumbers(box_number);
		}	

		if(left && !left.visited && !left.checker && left.number){
			var box_number = index(i-1, j);
			left.printNumbers(box_number);
		}		
	}
}

