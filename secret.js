var ester = parseInt(Math.random() * 3)
var f = ""
ester = parseInt(ester)

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
	f = "document.querySelector('#search1').style.transition = .2s;document.querySelector('#search1').style.position = absolute;document.querySelector('#search1').style.top = 100%;"
	f = f + "document.querySelector('#logo1').style.transition = .2s;document.querySelector('#logo1').style.position = absolute;document.querySelector('#logo1').style.top = 100%"
}

function use(){
	eval(f)
}
