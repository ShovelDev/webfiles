var navbar = 0
function search(url){
	var bar = document.getElementById('search').value
	if (document.getElementById('search').value != "" || document.getElementById('search1').value != "") {
		if(bar.includes(".com") || bar.includes(".net") || bar.includes(".org") || bar.includes(".app") || bar.includes(".io") || bar.includes(".ml") || bar.includes(".me") || bar.includes(".top") || bar.includes(".online")){
			document.location.href = "https://peytta.netlify.app/search/" + url
		}else{
			var link = document.location.href.replace("index.html", "")
			finallink = link + "/search/" + url + "/"

			localStorage.setItem("search", url)

			document.location.href = document.location.href.replace("index.html", "") + "results.html"
		}
	}
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
