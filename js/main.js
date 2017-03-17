

//elemndi lisamine

document.getElementById("nupp1").addEventListener("click", function() {
	var value = document.getElementById("kast").value;
	if (value) { 
		lisauustegevus(value);
}
});


function lisauustegevus(text) {

	var list = document.getElementById('mnimekiri'); // kuhu lisab

	//mida tekitab

	var item = document.createElement("li");  //list itemi
	item.innerText = text;

	var nupud = document.createElement("div"); // div mis on li sees kuhu nupud lähevad
	nupud.classList.add("buttons2");

	var eemaldanupp = document.createElement("button"); // esiene nupp
	eemaldanupp.classList.add("eemaldanupp");

	var valmisnupp = document.createElement("button"); // teine nupp
	valmisnupp.classList.add("valmisnupp");

	//lisamise käsk

	nupud.appendChild(eemaldanupp);
	nupud.appendChild(valmisnupp);
	item.appendChild(nupud);

	//lisab esimeseks

	list.insertBefore(item, list.childNodes[0]);
	document.getElementById("kast").value = "";

	eemaldanupp.addEventListener("click", eemaldaasi);
	valmisnupp.addEventListener("click", edasiasi);
};

//eemalda element,
function  eemaldaasi(e) {
	var zz = this.parentNode.parentNode;
	 zz.parentNode.removeChild(zz);
}
function edasiasi(e) {

var ss = this.parentNode.parentNode
document.getElementById("vnimekiri").appendChild(ss);

}
//document.getElementById("uld").addEventListener("click", function() {
	 //if ( event.target.className === 'eemaldanupp') {
	  //var ss = this 
	  //console.log(this)
	 // ss.parentNode.removeChild(ss);
	//};
//});
