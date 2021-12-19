function search(url="index.html"){
	var link = document.location.href.replace("index.html", "")
	finallink = link + "/search/" + url + "/index.html"

	var histname = localStorage.length
	localStorage.setItem("Site (" + histname + ") ", url)

	document.location.href = finallink
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