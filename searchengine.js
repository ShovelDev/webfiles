function search(url){
	if (document.getElementById('search').value != "") {
		var link = document.location.href.replace("index.html", "")
		finallink = link + "/search/" + url + "/"

		var histname = localStorage.length
		localStorage.setItem("Site Search (" + histname + ") ", url)

		document.location.href = finallink
	}
}

function saveHist(url="index.html"){
	var link = document.location.href.replace("index.html", "")
	finallink = link + "/search/" + url + "/"

	var histname = localStorage.length
	localStorage.setItem("Site (" + histname + ") ", url)
}

function reloadResults(){
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("results");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
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
