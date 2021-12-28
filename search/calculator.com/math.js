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

function clear(){
	document.getElementById('text').innerText = null
}