function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Game Config //
let game = {
	version: '0.3.2 BETA',
	time: 0
};

let inChat = false;

let isDay = true;



// Texturas //
let blocks = "download.png";

// Objetos //
const obj = [[]];

let WIDTH = 0;
let HEIGHT = 0;
let debugMode = false;

let blockSelected = "grass";

let myFps = 0;
let tick = 0;


// Block Position //
let blockX = 0;
let blockY = 0;

// Chunk //
let cHeight = randInt(64,256);

let treeChunk = randInt(0,10);

let waterChunk = 0;

// Voxel 2D //
let voxelX = 0;
let voxelY = 0;

let pixel = 50;
let canPlace = false;

function openImpMenu(){
	document.getElementById('importMap').style.display = 'flex';
}
function openExpMenu(){
	document.getElementById('exportMap').style.display = 'flex';
	document.getElementById('my-map').value = JSON.stringify(obj[0]);
}


function closeImpMenu(p){
	if(p){
		obj[0] = JSON.parse(document.getElementById('json-map').value);
		document.getElementById('importMap').style.display = 'none';
	}else{
		document.getElementById('importMap').style.display = 'none';
	}
}

function closeExpMenu(){
	document.getElementById('my-map').select();
	navigator.clipboard.writeText(document.getElementById('my-map').value);

	document.getElementById('my-map').value = "";
	document.getElementById('exportMap').style.display = 'none';
	alert("Your map has copied to clipboard");
}

function closeMainMenu(){
	document.getElementById('main-menu').style.display = 'none';
}

function openInventory(){
	let myInv = document.getElementById('my-inventory');
	if(myInv.style.display == 'block'){
		myInv.style.display = 'none';
	}else{
		myInv.style.display = 'block';
	}
}

function selectBlock(block){
	blockSelected = block;
}

function sendChat(){
	inChat = false;
	let myText = document.getElementById('text');
	if(myText.value == "/time day"){
		game.time = 0;
	}
	if(myText.value == "/time night"){
		game.time = 9;
	}

	myText.value = "";
	document.getElementById('chat').style.display = 'none';
}

function openChat(){
	inChat = true;
	document.getElementById('chat').style.display = 'flex';
}


// Updating game time //
setInterval(()=>{
	if(game.time == 9){
		isDay = false;
	}else if(game.time == 0){
		isDay = true;
	}

	if(isDay){
		game.time++;
	}else{
		game.time--;
	}
},10000);


function start(){
	document.getElementById('main-menu').style.display = 'none';
	document.getElementById('exportMap').style.display = 'none';
	document.getElementById('importMap').style.display = 'none';
	document.getElementById('my-inventory').style.display = 'none';
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;

	voxelY = HEIGHT-pixel;


	blockY = HEIGHT;

	detectar_mobile();

	function detectar_mobile() { 
	 if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
	 ){

	  }else{
	    window.location.href = './mobile';
	  }
	}
}

function createBlock(id,x,y,s){
	obj[0].push({blockID:id,x:x,y:y,w:s,h:s});
}

function createChunk(size, biome){
	if(biome < 6){
		for(let i = 0; i < size; i++){
			for(let y = 0; y < 1; y++){
				blockY -= pixel;
				createBlock("bedrock",blockX,blockY,pixel);
			}
			for(let y = 0; y < cHeight; y++){
				blockY -= pixel;
				if(randInt(0,randInt(30,100)) == 3){
					createBlock("coal_ore",blockX,blockY,pixel);
				}else{
					createBlock("stone",blockX,blockY,pixel);
				}
			}
			if(cHeight > 250){
				for(let y = 0; y < 6; y++){
					blockY -= pixel;
					createBlock("snow",blockX,blockY,pixel);
				}
			}else{
				for(let y = 0; y < 5; y++){
					blockY -= pixel;
					createBlock("dirt",blockX,blockY,pixel);
				}
				for(let y = 0; y < 1; y++){
					blockY -= pixel;
					createBlock("grass",blockX,blockY,pixel);
				}
				if(randInt(0,15) > 10 && treeChunk != 5){
					for(let y = 0; y < 1; y++){
						blockY -= pixel;
						createBlock("grass_plant",blockX,blockY,pixel);
					}
				}
			}
			if(treeChunk == 5){
				for(let y = 0; y < randInt(2,3); y++){
					blockY -= pixel;
					createBlock("wood",blockX,blockY,pixel);
				}
				blockY -= pixel;
				blockX -= pixel*3;
				for(let y = 0; y < 5; y++){
					blockX += pixel;
					createBlock("leaves",blockX,blockY,pixel);
				}
				blockY -= pixel;
				blockX -= pixel*5;
				for(let y = 0; y < 5; y++){
					blockX += pixel;
					createBlock("leaves",blockX,blockY,pixel);
				}
				blockY -= pixel;
				blockX -= pixel*4;
				for(let y = 0; y < 3; y++){
					blockX += pixel;
					createBlock("leaves",blockX,blockY,pixel);
				}
				blockY -= pixel;
				blockX -= pixel*3;
				for(let y = 0; y < 3; y++){
					blockX += pixel;
					createBlock("leaves",blockX,blockY,pixel);
				}
				blockX -= pixel*2;
			}
			treeChunk = randInt(0,25);
			blockX += pixel;
			cHeight = cHeight + randInt(-Math.floor(Math.round(randInt(0,randInt(0,1)))),Math.floor(Math.round(randInt(0,randInt(0,1)))));
			waterChunk = blockY;
			blockY = HEIGHT;
		}
	}
}

let num = 0;
function chunksGenerator(chunks){
	for(let n = 0; n < chunks; n++){
		createChunk(16,5);
	}
}

function render(){
	hynz.draw.setColor("#aaf");
	hynz.draw.rect("fill",0,0,window.innerWidth,window.innerHeight);
	for(let i = 0; i < obj[0].length; i++){
		if(obj[0][i].x > -pixel && obj[0][i].x+pixel < window.innerWidth+pixel && obj[0][i].y > -pixel && obj[0][i].y+pixel < window.innerHeight+pixel){
			if(obj[0][i].blockID == "bedrock"){
				hynz.draw.sprite(blocks,obj[0][i].x,obj[0][i].y,75*0,75*3,75,75,pixel,pixel);
			}
			if(obj[0][i].blockID == "stone"){
				// hynz.draw.setColor("#777");
				hynz.draw.sprite(blocks,obj[0][i].x,obj[0][i].y,75*2,75*0,75,75,pixel,pixel);
			}
			if(obj[0][i].blockID == "dirt"){
				hynz.draw.sprite(blocks,obj[0][i].x,obj[0][i].y,75*0,75*2,75,75,pixel,pixel);
			}
			if(obj[0][i].blockID == "grass"){
				hynz.draw.sprite(blocks,obj[0][i].x,obj[0][i].y,75*0,75*0,75,75,pixel,pixel);
			}
			if(obj[0][i].blockID == "sand"){
				hynz.draw.sprite(blocks,obj[0][i].x,obj[0][i].y,75*1,75*0,75,75,pixel,pixel);
			}
			if(obj[0][i].blockID == "snow"){
				hynz.draw.sprite(blocks,obj[0][i].x,obj[0][i].y,75*2,75*1,75,75,pixel,pixel);
			}
			if(obj[0][i].blockID == "wood"){
				hynz.draw.sprite(blocks,obj[0][i].x,obj[0][i].y,75*1,75*2,75,75,pixel,pixel);
			}
			if(obj[0][i].blockID == "leaves"){
				hynz.draw.sprite(blocks,obj[0][i].x,obj[0][i].y,75*2,75*2,75,75,pixel,pixel);
			}
			if(obj[0][i].blockID == "grass_plant"){
				hynz.draw.sprite(blocks,obj[0][i].x,obj[0][i].y,75*3,75*1,75,75,pixel,pixel);
			}
			if(obj[0][i].blockID == "air"){
				hynz.draw.setColor("#fff");
			}
			if(obj[0][i].blockID == "coal_ore"){
				hynz.draw.sprite(blocks,obj[0][i].x,obj[0][i].y,75*0,75*3,75,75,pixel,pixel);
			}
			if(obj[0][i].blockID == "gold_ore"){
				hynz.draw.sprite(blocks,obj[0][i].x,obj[0][i].y,75*0,75*3,75,75,pixel,pixel);
			}
		}
		// hynz.draw.rect("fill",obj[0][i].x,obj[0][i].y,pixel,pixel);
	}
	hynz.draw.setColor("#000"+game.time);
	hynz.draw.rect("fill",0,0,window.innerWidth,window.innerHeight);
	hynz.draw.setColor("#0ff7");
	hynz.draw.rect("fill",voxelX,voxelY,pixel,pixel);

	hynz.draw.setColor("#000");
	//hynz.draw.print(`Blocos no mundo: ${obj[0].length}`,10,30,30);
	hynz.draw.print(`FPS: ${myFps}`,10,30,30);
	if(window.innerWidth > 390){
		hynz.draw.print(`Version: ${game.version}`,window.innerWidth-250,30,25);
	}else{
		hynz.draw.print(`Version: ${game.version}`,10,60,25);
	}
}

window.addEventListener("keydown",(e)=>{
	if(inChat){
		if(e.key == "Enter"){
			sendChat();
		}
	}

	if(inChat == false){
		switch(e.key){
			case "Escape":
				document.getElementById('my-inventory').style.display = 'none';
				document.getElementById('main-menu').style.display = 'flex';
				break;
			case "w":
				voxelY -= pixel;
				break;
			case "a":
				voxelX -= pixel;
				break;
			case "s":
				voxelY += pixel;
				break;
			case "d":
				voxelX += pixel;
				break;
			case "Enter":
				for(let i = 0; i < obj[0].length; i++){
					if(obj[0][i].x == voxelX && obj[0][i].y == voxelY && obj[0][i].blockID != "air" && obj[0][i].blockID != "bedrock"){
						//obj[0].push({blockID:"air",x:voxelX,y:voxelY,w:pixel,h:pixel});
						obj[0].splice(obj[0].indexOf(obj[0][i]), 1);
					}
				}
				break;
			case "ArrowUp":
				for(let i = 0; i < obj[0].length; i++){
					obj[0][i].y += pixel;
				}
				voxelY += pixel;
				break;
			case "ArrowDown":
				for(let i = 0; i < obj[0].length; i++){
					obj[0][i].y -= pixel;
				}
				voxelY -= pixel;
				break;
			case "ArrowLeft":
				for(let i = 0; i < obj[0].length; i++){
					obj[0][i].x += pixel;
				}
				voxelX += pixel;
				break;
			case "ArrowRight":
				for(let i = 0; i < obj[0].length; i++){
					obj[0][i].x -= pixel;
				}
				voxelX -= pixel;
				break;
			case "f":
				num++;
				chunksGenerator(num);
				break;
			case "e":
				openInventory();
				closeMainMenu();
				break;
			case "c":
				canPlace = true;
				break;
			case "o":
				let world = obj[0];
				localStorage.setItem('world',JSON.stringify(world));
				break;
			case "ç":
				obj[0] = JSON.parse(localStorage.getItem('world'));
				break;
			case "t":
				openChat();
			case "1":
				blockSelected = "grass";
				break;
			case "2":
				blockSelected = "wood";
				break;
			case "3":
				blockSelected = "stone";
				break;
			case "4":
				blockSelected = "snow";
				break;
			case "5":
				blockSelected = "leaves";
				break;
		}
	}
});

setInterval(function(){ myFps = Math.floor(tick); tick = tick / 2; },1000);


function hynz_update(){
	render();
	WIDTH = hynz.window.getWidth();
	HEIGHT = hynz.window.getHeight();

	tick += 1;

	if(canPlace){
		canPlace = false;
		createBlock(blockSelected,voxelX,voxelY,pixel);
	}
}

window.onload = start();