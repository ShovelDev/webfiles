cls()
var actualip = "1.1.1.2"
var home = localStorage.getItem("Websalad.home")

if (home == null) {
	home = actualip
}

echo("Â Websalad Browser Â")
echo("")
echo("Importing Internet card...")

var it = document.createElement("script")
it.setAttribute("id", "website")
it.src = "https://pignet.netlify.app/internet.js"
document.body.appendChild(it)

echo("Internet card imported.")

function br(ip=home){
	color("lime")
	console.log("Searching...")
	console.log("")

	if (ip != "") {
		document.body.removeChild(document.getElementById('website'))
		var web = document.createElement("script")
		web.src = "https://pignet.netlify.app/web/" + ip + ".web"
		web.setAttribute("id", "website")
		document.body.appendChild(web)
		actualip = ip
	}else{
		document.body.removeChild(document.getElementById('website'))
		var web = document.createElement("script")
		web.src = "https://pignet.netlify.app/web/1.1.1.1.web"
		web.setAttribute("id", "website")
		document.body.appendChild(web)
		console.warn("Please set a ip")
		actualip = home
	}
}

function reload(){
	document.body.removeChild(document.getElementById('website'))
	var web = document.createElement("script")
	web.src = "https://pignet.netlify.app/web/" + actualip + ".web"
	web.setAttribute("id", "website")
	document.body.appendChild(web)
}

function Home(){
	document.body.removeChild(document.getElementById('website'))
	var web = document.createElement("script")
	web.src = "https://pignet.netlify.app/web/" + home + ".web"
	web.setAttribute("id", "website")
	document.body.appendChild(web)
}

function setHome(){
	home = actualip
	localStorage.setItem("Websalad.home", home)
}