function Ads(obj){
	//Objects in ads
	var new_ads = document.createElement("img")
	var ads_link = document.createElement("a")
	var ads_text = document.createElement("span")

	//Setup Objects
	ads_text.innerText = "ads"

	new_ads.setAttribute("src", obj.thumb)
	ads_link.setAttribute("href", obj.link)

	ads_link.setAttribute("href", obj.link)

	//Style
	ads_link.style.textDecoration = "none"
	ads_text.style.textDecoration = "none"

	new_ads.style.border = "1px solid black"

	//Target
	if (obj.target != null) {
		ads_link.setAttribute("target", obj.target)
	}


	//Show Ads
	ads_link.appendChild(ads_text)
	ads_link.appendChild(new_ads)
	obj.append.appendChild(ads_link)
}