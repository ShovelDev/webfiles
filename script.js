function hidepopup(popup){
	document.querySelector(popup).style.display="none"
}

function search(){
	var search = document.getElementById('search').value
	window.open("websites/" + search + "/")
}