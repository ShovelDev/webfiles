var gameplay = false

function closemsg(){
	document.getElementById("jornal").style.left = "120%"
}

function closemsg1(){
	document.getElementById("shop").style.left = "-120%"
}

function closemsg2(){
	document.getElementById("achievements").style.top = "150%"
}

function achv(){
	document.getElementById("achievements").style.top = "50%"
}

function accept(){
	var cs = Math.floor(Math.random()*3)
	if (cs == 1) {
		money -= 1500
		alertplay()
		document.getElementById("jornal").style.left = "99%"
		document.getElementById("message").innerText = "Attention, Owner of the city suffers blow and suffers 1500 dollars of damage"
	}else{
		money += 1500
		alertplay()
		document.getElementById("jornal").style.left = "99%"
		document.getElementById("message").innerText = "Attention, City owner makes partnership and earns $1500 in profit."
	}
	document.getElementById("shop").style.left = "-120%"
}

document.addEventListener("contextmenu", (e)=>{
	e.preventDefault()
})

function sellplay(){
	document.getElementById("sell_sound").play()
}
function alertplay(){
	document.getElementById("alert_sound").play()
}

function nature(){
	if (!gameplay) return
	document.getElementById('card-1').style.display = ""
	document.getElementById('card-2').style.display = "none"
	document.getElementById('card-3').style.display = "none"
}

function population(){
	if (!gameplay) return
	document.getElementById('card-1').style.display = "none"
	document.getElementById('card-2').style.display = "none"
	document.getElementById('card-3').style.display = ""
}

function city(){
	if (!gameplay) return
	document.getElementById('card-2').style.display = ""
	document.getElementById('card-1').style.display = "none"
	document.getElementById('card-3').style.display = "none"
}

var chose = 0
var chose1 = 0
var autosell = false

var forest = 0

if (localStorage.getItem("forest") == null) {
	forest = 100
}else{
	forest = localStorage.getItem("forest")
}

if (localStorage.getItem("autosell") == null) {
	autosell = false
}else{
	autosell = localStorage.getItem("autosell")
	document.getElementById("autos").disabled = true
}

var water = 0

if (localStorage.getItem("water") == null) {
	water = 100
}else{
	water = localStorage.getItem("water")
}

var energy = 0

if (localStorage.getItem("energy") == null) {
	energy = 0
}else{
	energy = localStorage.getItem("energy")
}

var trash = 0

if (localStorage.getItem("trash") == null) {
	trash = 0
}else{
	trash = localStorage.getItem("trash")
}

var toxic = 0

if (localStorage.getItem("toxic") == null) {
	toxic = 0
}else{
	toxic = localStorage.getItem("toxic")
}

var money = 0

if (localStorage.getItem("money") == null) {
	money = 1000
}else{
	money = localStorage.getItem("money")
}

var houses = 0

if (localStorage.getItem("houses") == null) {
	houses = 100
}else{
	houses = localStorage.getItem("houses")
}

setInterval(function(){
	if (!gameplay) return
	chose = Math.floor(Math.random()*5)
	chose1 = Math.floor(Math.random()*8)
	if (forest > 0 && water >= 10) {
		energy += 10
	}

	if (chose1 == 1) {
		document.getElementById("shop").style.left = "0%"
		document.getElementById("message1").innerText = "Hey, I own a SuperCars car company, and we want to partner with you."
	}
	if (chose1 == 2) {
		document.getElementById("shop").style.left = "0%"
		document.getElementById("message1").innerText = "Hey, I'm a very rich and famous guy and I was wondering if you want to get sponsored?"
	}
	if (chose1 == 3) {
		document.getElementById("shop").style.left = "0%"
		document.getElementById("message1").innerText = "Hey, I'm a businessman and I want to invest in your town, will you?"
	}

	if (chose == 1) {
		alertplay()
		document.getElementById("jornal").style.left = "99%"
		document.getElementById("message").innerText = "Attention, Heavy rain arrives from 10% of the city's forest but increases 10% of the city's water."
		if (water < 100) {
			water+= 10
		}
		if (forest > 0) {
			forest-= 15
		}
	}
	if (chose == 2) {
		alertplay()
		document.getElementById("jornal").style.left = "99%"
		document.getElementById("message").innerText = "Attention, Fire kills 40% of the city's forest."
		if (forest > 0) {
			forest-= 40
		}
	}
	if (chose == 3) {
		alertplay()
		document.getElementById("jornal").style.left = "99%"
		document.getElementById("message").innerText = "Attention, drought arrives and takes 30% of the city's water."
		if (water > 0) {
			water-= 30
		}
	}
	if (chose == 4) {
		alertplay()
		document.getElementById("jornal").style.left = "99%"
		document.getElementById("message").innerText = "Attention, Toxic gas is spread throughout the city and contaminated water is removed and toxicity levels in the city increase, be careful."
		if (water > 0) {
			water = 10
		}
		if (toxic <= 90) {
			toxic+= 50
		}
	}
	if (money < 100) {
		document.getElementById("jornal").style.left = "99%"
		document.getElementById("message").innerText = "Attention, city presents monetary crisis with total cache with less than 100 dollars."
	}
	if (houses > 0) {
		money += houses
	}
},8000)

function forest_add(){
	if (!gameplay) return
	if (forest < 100 && money >= 10) {
		water-=10
		forest+= 10
		money-=10
		sellplay()
	}
}

setInterval(function sellauto(){
	if (autosell && energy >= 10) {
		money += 10
		energy -= 10
		sellplay()
	}
},10000)

function water_add(){
	if (!gameplay) return
	if (water < 100 && money >= 20) {
		water+= 10
		money-=20
		sellplay()
	}
}

function sell(){
	if (!gameplay) return
	if (energy >= 10) {
		money += energy
		energy = 0
		sellplay()
	}
}

function sell_trash(){
	if (!gameplay) return
	if (trash >= 10) {
		money += 1
		trash -= 10
		sellplay()
	}
}

function buy(){
	if (!gameplay) return
	if (money >= 100) {
		money-= 100
		houses++
		sellplay()
	}
}

function buy_autoSell(){
	if (autosell == false && money >= 1000) {
		autosell = true
		money -= 1000
		document.getElementById("autos").disabled = true
		localStorage.setItem("autosell", true)
	}
}

function clearn(){
	toxic = 0
}