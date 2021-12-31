echo("")
echo("Shell v.1")

function $f(filename="NewFile.txt", content=""){
	if (filename != "") {
		localStorage.setItem(filename, content)
		console.log("File " + filename + " Created")
	}else{
		console.error("Erro: The file name is invalid")
	}
}

function $d(filename="NewFile.txt"){
	if (filename != "") {
		localStorage.removeItem(filename)
		console.log("File " + filename + " Deleted")
	}else{
		console.error("Erro: The file name is invalid")
	}
}

function $e(filename="NewFile.pp"){
	console.log("Opening the Program")
	if (filename.includes(".js") || filename.includes(".pp")) {
		if (filename != "") {
			console.warn("Running the Program")
			eval(localStorage.getItem(filename))
		}else{
			console.error("The program don't exist")
		}
	}
}

function $i(script, id="script"){
	var sc = document.createElement("script")
	sc.src = script
	sc.setAttribute("id", id)
	document.body.appendChild(sc)
}

function $_(id){
	if (id != "output", id != "command", id != "bottom") {
		document.body.removeChild(document.getElementById(id))
	}
}

function $r(){
	color("lime")
	cls()
	localStorage.clear()
	bk()
}