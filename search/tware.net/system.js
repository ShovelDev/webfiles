var menubar = false

function openapp(app){
	if (true) {
		var app_window = document.createElement("div")
		var aplication = document.createElement("iframe")
		var close_app = document.createElement("button")
		var full_app = document.createElement("button")
		var fullscreen = false

		app_window.appendChild(aplication)
		app_window.appendChild(close_app)

		aplication.src = app.getAttribute("id")
		document.body.appendChild(app_window)
		aplication.style.width = "600px"
		aplication.style.height = "400px"
		aplication.style.borderRadius = "15px 0px 15px 0px"
		aplication.style.border = "2px solid white"
		aplication.style.position = "absolute"
		aplication.style.left = "50%"
		aplication.style.top = "50%"
		aplication.style.transform = "translate(-50%, -50%)"
		aplication.style.boxShadow = "5px 5px 5px rgba(0,0,0,0.2)"

		close_app.style.cursor = "pointer"
		close_app.style.position = "absolute"
		close_app.style.left = "70%"
		close_app.style.top = "20.4%"
		close_app.style.background = "linear-gradient(120deg, red, pink)"
		close_app.style.border = "2px solid white"
		close_app.style.borderRadius = "5px"
		close_app.addEventListener("mouseenter", (e)=>{
			close_app.style.background = "linear-gradient(120deg, pink, red)"
		})
		close_app.addEventListener("mouseout", (e)=>{
			close_app.style.background = "linear-gradient(120deg, red, pink)"
		})
		close_app.innerText = "X"
		close_app.onclick = function(){
			app_window.style.display = "none"
			aplication = null
			app_window = null
			close_app = null
		}
	}
}

function closemenu(){
	document.getElementById('menubar').style.left = "-200px"
	document.getElementById('menubar').style.opacity = "0"
	document.getElementById('menubar').style.width = "0px"
}

function openmenu(){
	document.getElementById('menubar').style.left = "10px"
	document.getElementById('menubar').style.opacity = "1"
	document.getElementById('menubar').style.width = "170px"
}

function closesystem(){
	var r=confirm("You Want shutdown the system?");
	if (r) {
		close();
	}else{
		return
	}
}

document.addEventListener("contextmenu", function (event){
	event.preventDefault()
	document.getElementById("context_menu").classList.remove("hide")

	const {x: mouseX, y: mouseY} = event

	document.getElementById("context_menu").style.left = mouseX + "px"
	document.getElementById("context_menu").style.top = mouseY + "px"
});

document.addEventListener("click", function (e){
	if (document.getElementById("context_menu").mouseover) {
		document.getElementById("context_menu").classList.add("hide")
	}
})

