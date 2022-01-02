var ester = parseInt(Math.random() * 3)
var f = ""
ester = parseInt(ester)
magic = false

if(ester == 0){
	document.getElementById("secret").src = "icons/gamepad.png"
	f = 'alert("I Like Games 🎮❤")'
}
if(ester == 1){
	document.getElementById("secret").src = "icons/pizza.png"
	f = `document.querySelector("html").style.background = "yellow";document.querySelector("body").style.background = "yellow";document.body.style.color = "white"`
}
if(ester == 2){
	document.getElementById("secret").src = "icons/guy.png"
	magic = true
}

function use(){
	if(!magic){
		eval(f)
	}else{
		document.getElementById("search1").style.transition = "2s";
		document.getElementById("search1").style.position = "absolute";
		document.getElementById("search1").style.top = "150%";
		document.getElementById("search1").style.transform = "rotate(360deg)";
		
		document.getElementById("rs").style.transition = "2s";
		document.getElementById("rs").style.position = "absolute";
		document.getElementById("rs").style.top = "150%";
		document.getElementById("rs").style.transform = "rotate(-360deg)";
	}
}
