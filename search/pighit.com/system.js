function echo(text=""){
	document.getElementById('output').innerText = document.getElementById('output').innerText + `
` + text
	document.getElementById("bottom").scrollIntoView();
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
	document.getElementById("bottom").scrollIntoView();
}

function cls(){
	document.getElementById('output').innerText = ""
	document.getElementById("bottom").scrollIntoView();
}

function color(color="lime"){
	document.getElementById("output").style.color = color
	document.getElementById("bottom").scrollIntoView();
}

addEventListener("keypress", (e)=>{
	if (e.key == "Enter") {
		var cmd_enter = document.getElementById('command').value
		document.getElementById("bottom").scrollIntoView();

		if (cmd_enter == "clear") {
			document.getElementById('output').innerText = ""
		}else{
			if (cmd_enter.includes("print")) {
				if (cmd_enter.includes("loop print ")) {
					var print = cmd_enter.replace("loop print ", "")
					setInterval(function(){
						document.getElementById('output').innerText = document.getElementById('output').innerText + `
						` + print
						document.getElementById("bottom").scrollIntoView();
					}, 1)
				}else{
					document.getElementById('output').innerText = document.getElementById('output').innerText + `
					` + cmd_enter.replace("print ", "")
					document.getElementById("bottom").scrollIntoView();
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
					document.getElementById("bottom").scrollIntoView();
				}else{
					if (cmd_enter == "list") {
						for(var i=0, len=localStorage.length; i<len; i++) {
						    var key = localStorage.key(i);
						    document.getElementById('output').innerText = document.getElementById('output').innerText + `
							` + "File (" + i + ") >" + key
							document.getElementById("bottom").scrollIntoView();
						}
					}else{
						if (cmd_enter.includes("read ")) {
							var file = cmd_enter.replace("read ", "")
							if (localStorage.getItem(file) == null) {
								document.getElementById('output').innerText = document.getElementById('output').innerText + `
								` + "The file don't exist"
								document.getElementById("bottom").scrollIntoView();
							}else{
								if (localStorage.getItem(file) == "") {
									document.getElementById('output').innerText = document.getElementById('output').innerText + `
									` + "The file is empty"
									document.getElementById("bottom").scrollIntoView();
								}else{
									document.getElementById('output').innerText = document.getElementById('output').innerText + `
									` + localStorage.getItem(file)
									document.getElementById("bottom").scrollIntoView();
								}
							}
						}else{
							if (cmd_enter.includes("edit")) {
								var file = cmd_enter.replace("edit ", "")
								if (localStorage.getItem(file) == null) {
									document.getElementById('output').innerText = document.getElementById('output').innerText + `
									` + "The file don't exist"
									document.getElementById("bottom").scrollIntoView();
								}else{
									var content = prompt("Content")
									localStorage.setItem(file, content)
									document.getElementById("bottom").scrollIntoView();
								}
							}else{
								if (cmd_enter.includes("exe ")) {
									if (cmd_enter.includes("loop exe ")) {
										var exe = cmd_enter.replace("loop exe ", "")
										setInterval(function(){
											document.getElementById('output').innerText = document.getElementById('output').innerText + `
											` + eval(exe)
											document.getElementById("bottom").scrollIntoView();
										}, 1)
									}else{
										var exe = cmd_enter.replace("exe ", "")
										document.getElementById('output').innerText = document.getElementById('output').innerText + `
										` + eval(exe)
										document.getElementById("bottom").scrollIntoView();
									}
								}else{
									if (cmd_enter.includes("exit")) {
										close()
									}else{
										if (cmd_enter == "break") {
											document.location.reload()
											document.getElementById("bottom").scrollIntoView();
										}else{
											if (cmd_enter.includes("card")) {
												var card = cmd_enter.replace("card ", "")
												var script = document.createElement("script")
												script.src = card
												document.body.appendChild(script)

												document.getElementById("bottom").scrollIntoView();
											}else{
												document.getElementById('output').innerText = document.getElementById('output').innerText + `
												` + "> Syntax Error"
												document.getElementById("bottom").scrollIntoView();
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