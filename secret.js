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

var tg = 0
function use(){
	if(!magic){
		eval(f)
	}else{
		tg++
		document.getElementById("search1").style.transition = "2s";
		document.querySelector("button").style.transition = "2s";
		
		if(tg == 1){
			document.getElementById("search1").style.transform = "rotate(-360deg)";
			document.querySelector("button").style.transform = "rotate(360deg)";
		}else{
			document.getElementById("search1").style.transform = "rotate(360deg)";
			document.querySelector("button").style.transform = "rotate(-360deg)";
		}
		
		if(tg == 2){
			tg = 0
		}
	}
}
