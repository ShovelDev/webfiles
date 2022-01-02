var navbar = 0
var secret = document.getElementById("secret")
var ester = Math.random() * 2
var f = "

if(ester == 0){
	secret.src = "icons/gamepad.png"
	f = 'alert("I Like Games 🎮❤")'
}
if(ester == 1){
	secret.src = "icons/pizza.png"
	f = `document.body.style.background = "yellow"
	document.body.style.color = "white`
}
if(ester == 2){
	secret.src = "icons/guy.png"
	f = "window.location.href='https://peytta.netlify.app/search/pighit.com/'"
}

function use(){
	return f
}

function search(url){
	if (document.getElementById('search').value != "" || document.getElementById('search1').value != "") {
		var link = document.location.href.replace("index.html", "")
		finallink = link + "/search/" + url + "/"

		localStorage.setItem("search", url)

		document.location.href = document.location.href.replace("index.html", "") + "results.html"
	}
}

function saveHist(url="index.html"){
	var link = document.location.href.replace("index.html", "")
	finallink = link + "/search/" + url + "/"

	var histname = localStorage.length
	localStorage.setItem("Site (" + histname + ") ", url)
}

function imlucky(){
	var random = Math.random() * localStorage.length

	var rlink = document.location.href.replace("index.html", "")
	var rsite = localStorage.getItem(localStorage.key(random))
	rfinallink = rlink + "/search/" + rsite + "/"

	var rhistname = localStorage.length
	//rlocalStorage.setItem("Site Search (" + rhistname + ") ", url)

	document.location.href = rfinallink
}

function toggleMore(){
	navbar++

	if (navbar > 1) {
		navbar = 0
	}

	document.getElementById('navbar').style.transition = ".2s"

	if (navbar == 1) {
		document.getElementById('navbar').style.left = "0"
	}else{
		document.getElementById('navbar').style.left = "-100%"
	}
}
