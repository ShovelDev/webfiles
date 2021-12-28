function add(obj){
	var text = document.getElementById('text').innerText + obj.getAttribute("id")
	document.getElementById('text').innerText = text
}

function complete(){
	if (document.getElementById('text').innerText != "") {
		var text = document.getElementById('text').innerText
		document.getElementById('text').innerText = eval(text);
	}
	if (document.getElementById('text').innerText == "NaN") {
		document.getElementById('text').innerText = "Math invalid"
	}
}

function cleararea(){
	document.getElementById('text').innerText = ""
}

function deln(){
	var deleteN = document.getElementById('text').innerText.substring(document.getElementById('text').innerText.length-1);
	document.getElementById('text').innerText = document.getElementById('text').innerText.replace(deleteN, "")
}