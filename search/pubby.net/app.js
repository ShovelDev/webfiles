var game = document.querySelector("canvas")
ctx = game.getContext("2d")

var score = 0

var mouseX = game.width/2

const object = function(x, y, width, height, color, rotation=0){
	this.x = x
	this.y = y
	this.width = width
	this.height = height
	this.color = color
	this.rotation = rotation
	this.middleX = this.x+this.width/2
	this.middleY = this.y+this.height/2

	this.place = function(){
		ctx.save()
		ctx.beginPath()
		this.middleY = y+this.height/2
		this.middleX = x+this.width/2
		ctx.translate(this.middleX,this.middleY);
		ctx.rotate(this.rotation * Math.PI / 180);
		ctx.translate(-this.middleX, -this.middleY);
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.restore()
	}

	this.colliding = function(obj2){
	  	if (this.x < obj2.x + obj2.width &&
		   this.x + this.width > obj2.x &&
		   this.y < obj2.y + obj2.height &&
		   this.y + this.height > obj2.y) {
		   	return true
		}
	}

	this.click = function(){
		if (Cursor.colliding(this)) {
			if (Screen.click) {
				return true
			}else{
				return false
			}
		}
	}

	this.touch = function(){
		if (Touch.colliding(this)) {
			if (Screen.touch) {
				return true
			}else{
				return false
			}
		}
	}

	this.hover = function(){
		if (Cursor.colliding(this) || Touch.colliding(this) && Mobile) {
			return true
		}else{
			return false
		}
	}
}


var pubby = new object(game.width/2, game.height-20, 5, 5, "#F4EEA9", 0)
var apple = new object(game.width/2, 30, 5, 5, "#ff5454", 0)

var full = new object(game.width/2-30, game.height/2-30, 10, 10, "#ff5454", 0)
Cursor = new object(0,0,1,1,"transparent")

function ground(){
	ctx.save()
	ctx.beginPath()
	ctx.rotate(0);
	ctx.fillStyle = "green";
	ctx.fillRect(0, game.height-15, game.width, game.height);
	ctx.restore()
}

document.addEventListener("mousemove", (e)=>{
	mouseX = e.clientX/10
})

function gameloop(){

	requestAnimationFrame(gameloop)
	ctx.clearRect(0, 0, game.width, game.height)

	if (pubby.x > mouseX.x) {
		pubby.x -= 2
	}
	if (pubby.x < mouseX.x) {
		pubby.x += 2
	}

	pubby.x = mouseX+80

	apple.y ++

	if (apple.colliding(pubby)) {
		apple.y = 0
		apple.x = Math.random() * game.width
		if (apple.x > game.width-300 || apple.x < game.width-600) {
			apple.x = Math.random() * game.width
		}
		score++
	}

	if (apple.y == game.height) {
		apple.y = 0
		apple.x = Math.random() * game.width
	}

	pubby.place()
	apple.place()
	ground()

	ctx.save()
	ctx.beginPath();
	ctx.fillStyle = "#F0BB62";
	ctx.font = "10px Arial";
	ctx.fillText("Score: " + score, 2, 8);
	ctx.restore()

}
gameloop()