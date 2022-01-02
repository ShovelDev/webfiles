var ester = parseInt(Math.random() * 3)
var f = ""
ester = parseInt(ester)

if(ester == 0){
	document.getElementById("secret").src = "icons/gamepad.png"
	f = 'alert("I Like Games 🎮❤")'
}
if(ester == 1){
	document.getElementById("secret").src = "icons/pizza.png"
	f = `document.body.style.background = "yellow"
	document.body.style.color = "white`
}
if(ester == 2){
	document.getElementById("secret").src = "icons/guy.png"
	f = "window.location.href='https://peytta.netlify.app/search/pighit.com/'"
}

function use(){
	eval(f)
}
