function reloadResults(){
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search1');
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

addEventListener("keypress", (e)=>{
  if (e.key == "Enter") {
    if (document.getElementById("search1").value != "") {
      reloadResults()
    }
  }
})

window.onload = function(){
  reloadResults()
  document.getElementById("search1").focus();
}

var secret = document.getElementById("secret")
var ester = Math.random() * 2
var f = "

if(ester == 0){
	secret.src = "icons/gamepad.png"
	f = 'alert("I Like Games 🎮❤")'
}
if(ester == 1){
	secret.src = "icons/pizza.png"
	f = `document.body.style.background = "yellow"
	document.body.style.color = "white`
}
if(ester == 2){
	secret.src = "icons/guy.png"
	f = "window.location.href='https://peytta.netlify.app/search/pighit.com/'"
}

function use(){
	return f
}
