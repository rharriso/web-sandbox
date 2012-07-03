var grid = [],
	blocks =[], 
	$grid, 
	$logo, 
	hcells, randy,
	
	colors = ["#0099FF", "#800080", "#0FF000", "#FF0000"],
	
	//grid object
	oneSquare = {
		shape: [ [true] ], 
		className: "oneSquare"
	},
	threeXOne = {
		className: "threeXone",				
		shape: [ [true], [true], [true] ]
	},
	oneXthree = {
		className: "oneXthree",				
		shape: [ [true, true, true] ]
	},						
	fourSquare = {
		className: "fourSquare",
		shape: [ [true, true],[true, true] ]
	},
	threeXtwo = {
		className: "threeXtwo",
		shape: [ [true, true],[true, true], [true, true] ]
	},
	twoXthree = {
		className: "twoXthree",				
		shape: [ [true, true, true], [true, true, true] ]
	},
	
	shapes = [oneSquare, threeXOne, oneXthree, fourSquare, threeXtwo, twoXthree];
	
	$(document).ready(function(){		
		$logo = $("#logo"); $logo.lettering();
		$grid = $("#grid");
		
		$(window).resize(function(){
			hcells = Math.ceil($grid.width()/50);
			vcells = Math.ceil($grid.height()/50);
		}).resize();
		
		setInterval(createGrid, 100);
		setInterval(logoDance, 300);
	});
	
	function logoDance(){
		$logo.children("span").each(function(){
			randy = Math.random();					
			
			$(this).css({
				fontSize: Math.round(randy*150)+75,
				color: colors[Math.floor(4 * randy)]
			});
		});
	}
	
	function createGrid(){				
		var i,j;				
		
		$grid.empty();
		
		grid = [];
		blocks = [];
		
		for(i = 0; i < hcells; i++){
			grid.push([]);
			for(j = 0; j < vcells; j++){
				grid[i].push(false);					
			}
		}
		
		for(i = 0; i < hcells; i++){					
			for(j = 0; j < vcells; j++){
				
				randy = Math.random();
				
				if(grid[i][j] === true){						
					continue;
				}						
				
				//create a block and randomly pick type
				var block = $('<div class="block"></div>');												
				var typeSwitch = Math.floor(randy*shapes.length);
				var blockType = shapes[typeSwitch];

				//try to place block in grid												
				if(placeBlock(i,j, blockType.shape)){
					block.addClass(blockType.className);
					block.addClass(i+"_"+j);														
				//or faild and put in default shape, square
				}else{
					block.addClass("defaultShape");
				}
				
				//position block
				block.css({
					top: 5+50*j,
					left: 5+50*i,
					color: colors[Math.floor(4 * randy)]
				});
				
				//add to grid
				blocks.push(block);
				$grid.append(block);
			}
		}				
	}
	
	function placeBlock(i, j, shape){				
		//loop over space checking for occupation
		for(x = 0; x < shape.length; x++){
			for(y = 0; y < shape[x].length; y++){
				try{
					if (grid[x + i][y + j] || x+i >= grid.length || y+j >= grid[x+i].length) {								
							return false;								
					}							
				}catch(e){
					return false;	
				}					
			}										
		}
		//go back and mark spots as taken up
		for (x = 0; x < shape.length; x++) {
			for (y = 0; y < shape[x].length; y++) {
				grid[x + i][y + j] = true;
			}
		}				
		return true;		
	}