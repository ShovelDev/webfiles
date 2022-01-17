setInterval(function(){
	trash+=10
	if (trash >= 90) {
		houses --
		trashplay()
	}
},7000)

setInterval(function(){
	if (trash >= 50) {
		toxic ++
	}
	if (toxic >= 100) {
		houses --
		money --
	}
},500)

/*
function newach(text="New Achievement"){
	var ach = document.createElement("h5")
	var br = document.createElement("br")
	ach.innerText = text
	document.getElementById("achievements").appendChild(ach)
	document.getElementById("achievements").appendChild(br)
}
*/

setInterval(function(){
	document.getElementById("money").innerText = "Total:" + money
	document.getElementById("house").innerText = "City Size:" + houses
	document.getElementById("forest").innerText = forest
	document.getElementById("water").innerText = water
	document.getElementById("energy").innerText = energy
	document.getElementById("trash").innerText = trash
	document.getElementById("toxic").innerText = toxic
	document.getElementById("police-total").innerText = "Police:" + police
	document.getElementById("pay-salary").innerText = "Pay Salary:" + salary
	document.getElementById("prejudice").innerText = "Prejudice:" + Prejudice

	if (forest > 100) {
		forest = 100
	}
	if (forest < 0) {
		forest = 0
	}
	if (water > 100) {
		water = 100
	}
	if (water < 0) {
		water = 0
	}
	if (energy > 100) {
		energy = 100
	}
	if (energy < 0) {
		energy = 0
	}
	if (houses < 0) {
		houses = 0
	}
	if (police < 0) {
		police = 0
	}
	money = parseInt(money)
	forest = parseInt(forest)
	water = parseInt(water)
	houses = parseInt(houses)
	energy = parseInt(energy)
	trash = parseInt(trash)
	toxic = parseInt(toxic)
	police = parseInt(police)

	localStorage.setItem("forest", forest)
	localStorage.setItem("water", water)
	localStorage.setItem("energy", energy)
	localStorage.setItem("money", money)
	localStorage.setItem("houses", houses)
	localStorage.setItem("trash", trash)
	localStorage.setItem("toxic", toxic)
	localStorage.setItem("police", police)

	if (money < 100) {
		document.getElementById("money").style.color = "red"
	}else{
		document.getElementById("money").style.color = "black"
	}
	if (trash >= 50) {
		document.getElementById("trash").style.color = "yellow"
	}
	if (trash >= 70) {
		document.getElementById("trash").style.color = "orange"
	}
	if (trash >= 90) {
		document.getElementById("trash").style.color = "red"
	}
	if (toxic < 50) {
		document.getElementById("toxic").style.color = "white"
	}
	if (toxic >= 50) {
		document.getElementById("toxic").style.color = "gold"
	}
	if (toxic >= 70) {
		document.getElementById("toxic").style.color = "green"
	}
	if (toxic >= 90) {
		document.getElementById("toxic").style.color = "lime"
	}
	if (toxic < 50) {
		document.getElementById("toxic").style.color = "white"
	}
},10)