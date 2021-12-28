function hidePopup(popup){
	document.querySelector(popup).style.transition = "5s"
	document.querySelector(popup).style.left = "-100%"

	document.querySelector(popup).style.opacity = "0"
}

function showPopup(popup){
	document.querySelector("#popup1").style.transition = "5s"
	document.querySelector("#popup1").style.left = "-100%"

	document.querySelector("#popup1").style.opacity = "0"

	document.querySelector(popup).style.transition = "3s"
	document.querySelector(popup).style.transform = "translate(-50%, -50%)"

	document.querySelector(popup).style.left = "50%"
	document.querySelector(popup).style.top = "50%"

	document.querySelector(popup).style.opacity = "1"
}

function code(){
	alert("<script src='https://peytta-mywork.netlify.app/mywork.js'></script>")
}
