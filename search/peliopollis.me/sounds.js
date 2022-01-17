function play(){
	gameplay = true
	document.getElementById("popup").style.display = "none"
	document.getElementById("game").play()
}

function sound(){
	document.getElementById("game").volume = document.getElementById("sound").value
	document.getElementById("game").play()
}

function sellplay(){
	document.getElementById("sell_sound").play()
}
function alertplay(){
	document.getElementById("alert_sound").play()
}
function trashplay(){
	document.getElementById("trash_sound").play()
}