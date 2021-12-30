function echo(text=""){
	document.getElementById('output').innerText = document.getElementById('output').innerText + `
` + text
}

function bk(){
	document.location.reload()
}

function final() {
	echo("")
	echo("")
	echo("")
	echo("")
	echo("")
	echo("")
	echo("")
}

function cls(){
	document.getElementById('output').innerText = ""
}

function color(color="lime"){
	document.getElementById("output").style.color = color
}

addEventListener("keypress", (e)=>{
	if (e.key == "Enter") {
		var cmd_enter = document.getElementById('command').value

		if (cmd_enter == "clear") {
			document.getElementById('output').innerText = ""
		}else{
			if (cmd_enter.includes("print")) {
				if (cmd_enter.includes("loop print ")) {
					var print = cmd_enter.replace("loop print ", "")
					setInterval(function(){
						document.getElementById('output').innerText = document.getElementById('output').innerText + `
						` + print
					}, 1)
				}else{
					document.getElementById('output').innerText = document.getElementById('output').innerText + `
					` + cmd_enter.replace("print ", "")
				}
			}else{
				if (cmd_enter.includes("new")) {
					document.getElementById('output').innerText = document.getElementById('output').innerText + `
					` + "File Name:"
					var filename = prompt("")
					if (filename == "") {
						filename = prompt("")
					}
					filename = filename.replace(" ", "-")
					localStorage.setItem(filename + ".txt", "")
					document.getElementById('output').innerText = document.getElementById('output').innerText + `
					` + "New file (" + filename + ".txt) Created"
				}else{
					if (cmd_enter == "list") {
						for(var i=0, len=localStorage.length; i<len; i++) {
						    var key = localStorage.key(i);
						    document.getElementById('output').innerText = document.getElementById('output').innerText + `
							` + "File (" + i + ") >" + key
						}
					}else{
						if (cmd_enter.includes("read ")) {
							var file = cmd_enter.replace("read ", "")
							if (localStorage.getItem(file) == null) {
								document.getElementById('output').innerText = document.getElementById('output').innerText + `
								` + "The file don't exist"
							}else{
								if (localStorage.getItem(file) == "") {
									document.getElementById('output').innerText = document.getElementById('output').innerText + `
									` + "The file is empty"
								}else{
									document.getElementById('output').innerText = document.getElementById('output').innerText + `
									` + localStorage.getItem(file)
								}
							}
						}else{
							if (cmd_enter.includes("edit")) {
								var file = cmd_enter.replace("edit ", "")
								if (localStorage.getItem(file) == null) {
									document.getElementById('output').innerText = document.getElementById('output').innerText + `
									` + "The file don't exist"
								}else{
									var content = prompt("Content")
									localStorage.setItem(file, content)
								}
							}else{
								if (cmd_enter.includes("exe ")) {
									if (cmd_enter.includes("loop exe ")) {
										var exe = cmd_enter.replace("loop exe ", "")
										setInterval(function(){
											document.getElementById('output').innerText = document.getElementById('output').innerText + `
											` + eval(exe)
										}, 1)
									}else{
										var exe = cmd_enter.replace("exe ", "")
										document.getElementById('output').innerText = document.getElementById('output').innerText + `
										` + eval(exe)
									}
								}else{
									if (cmd_enter.includes("exit")) {
										close()
									}else{
										if (cmd_enter == "break") {
											document.location.reload()
										}else{
											if (cmd_enter.includes("card")) {
												var card = cmd_enter.replace("card ", "")
												var script = document.createElement("script")
												script.src = card
												document.body.appendChild(script)
											}else{
												document.getElementById('output').innerText = document.getElementById('output').innerText + `
												` + "> Syntax Error"
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		document.getElementById('command').value = ""
	}
})