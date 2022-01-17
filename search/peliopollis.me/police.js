var police = 0
var salary = 0
var assaut = 0

var Prejudice = 0

setInterval(function(){
	assaut = Math.floor(Math.random()*5)

	if (assaut == 1) {
		Prejudice++
		money -= 1000
		alertplay()
		document.getElementById("jornal").style.left = "99%"
		document.getElementById("message").innerText = "Attention, central bank of the city suffers assault and loses 1000 dollars."
	}
	if (assaut == 2) {
		Prejudice++
		houses -= 2
		alertplay()
		document.getElementById("jornal").style.left = "99%"
		document.getElementById("message").innerText = "Attention, Killer kills 2 people in the city, watch out"
	}
	if (assaut == 3) {
		Prejudice++
		money -= 5000
		alertplay()
		document.getElementById("jornal").style.left = "99%"
		document.getElementById("message").innerText = "Attention, bandits mine crypto-coins and bring $5000 to the city."
	}
	if (assaut == 4) {
		Prejudice++
		houses -= 50
		alertplay()
		document.getElementById("jornal").style.left = "99%"
		document.getElementById("message").innerText = "Attention, Serial Killer kills 50 people in the city."
	}
},7000)

setInterval(function(){
	salary = police
},100000)

function pay_salary(){
	if (money >= police) {
		money -= police
		salary = 0
	}
}

function contract(){
	if (money >= 100) {
		police ++
	}
}