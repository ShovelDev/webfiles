function Ads(obj){
	//Objects in ads
	var ads_body = document.createElement("div")
	var new_ads = document.createElement("img")
	var ads_link = document.createElement("a")
	var ads_text = document.createElement("span")
	var ads_button = document.createElement("button")

	//Setup Objects
	ads_text.innerText = "ads"

	new_ads.setAttribute("src", obj.thumb)
	ads_link.setAttribute("href", obj.link)

	ads_link.setAttribute("href", obj.link)

	//Style
	ads_link.style.textDecoration = "none"
	ads_text.style.textDecoration = "none"

	ads_button.style.backgroundColor = "red"
	ads_button.style.color = "white"
	ads_button.innerText = "X"
	ads_button.style.border = "1px solid white"
	ads_button.style.display = "none"

	new_ads.style.border = "1px solid black"

	//Target
	if (obj.target != null) {
		ads_link.setAttribute("target", obj.target)
	}

	ads_button.onclick = function(){
		ads_body.style.display = "none"
	}


	//Show Ads
	ads_link.appendChild(ads_text)
	ads_link.appendChild(new_ads)

	if (obj.append != null) {
		obj.append.appendChild(ads_body)
		ads_body.appendChild(ads_link)
	}else{
		ads_button.style.display = ""
		ads_body.appendChild(ads_link)
		document.body.appendChild(ads_body)
		ads_body.style.position = "fixed"
		ads_body.style.left = "50%"
		ads_body.style.top = "50%"
		ads_body.style.transform = "translate(-50%, -50%)"
		ads_body.appendChild(ads_button)
	}
}