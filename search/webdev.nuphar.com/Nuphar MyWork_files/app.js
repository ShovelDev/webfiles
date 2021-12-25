var title = "New Website"
var favicon = "https://nuphar.netlify.app/icon.png"

var css = ""
var js = ""
var html = `<title>${title}</title>
<meta charset="UTF-8">
<link rel="icon" href="${favicon}}">
<body>
<style>${css}</style>
<script>${js}</script>
</body>`

//functions

function view(){
	favicon = document.getElementById("icon").value
	css = document.getElementById("css").value
	title = document.getElementById("title").value
	js = document.getElementById("js").value
	web = `<title>${title}</title>

	<link rel="icon" href="${favicon}}">
	<body>
	<script>${js}</script>
	<style>${css}</style>
	${document.getElementById('html').value}
	</body>`
	var website = window.open("website.com")
	website.document.write(web)
}

function downloadcss() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(css));
    element.setAttribute('download', "style.css");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function downloadjs() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(js));
    element.setAttribute('download', "app.js");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function downloadhtml() {
	web = `<title>${title}</title>

	<link rel="icon" href="${favicon}}">
	<body>
	<script>${js}</script>
	<style>${css}</style>
	${document.getElementById('html').value}
	</body>`
	
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(web));
    element.setAttribute('download', "index.html");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function downloadAll(){
	downloadhtml()
	downloadcss()
	downloadjs()
}