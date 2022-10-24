function dialogue(d, n, ms, dbh, bshow, dhide, dhms){
	document.getElementById("dialogue").innerHTML = "";
	document.getElementById("name").innerHTML = n;
	let count = ms;
	let dummy = "";
	for (let a = 0; a < bshow.length; a++){
		if (bshow[a][0] == '-'){
			dummy = bshow[a].substring(1);
			document.getElementById(dummy).style.visibility = "hidden";
			document.getElementById(dummy).style.position = "fixed";
		}
	}
	for (let i = 0; i < d.length; i++) {
		setTimeout(dialogueStep, count, d[i]);
		count += ms;
		if (i == (d.length - 1)){
			setTimeout(dbshow, (ms * d.length), bshow);
		}
		if (dhide == true){
			setTimeout(dihide, (ms * d.length), dhms, dbh, bshow);
		}
	}
	ddhide();
	if (dbh){
		dbhow(true);
	}
	else{
		dbhow(false);
	}
}
function dualDialogue(xtd, xtdn, xtdms, d, n, ms, dbh, bshow, dhide, dhms){
	dialogue(d, n, ms, dbh, bshow, dhide, dhms);
	let e = d.length * ms;
	setTimeout(DDP2, e, xtd, xtdn, xtdms);
}
let isDark;
function darken(){
	document.getElementById('body').style.backgroundImage = "linear-gradient(black, black)";
	document.getElementById('dialogue').style.backgroundImage = "linear-gradient(black, black)";
	document.getElementById('name').style.backgroundImage = "linear-gradient(black, black)";
	document.getElementById('dialogue2').style.backgroundImage = "linear-gradient(black, black)";
	document.getElementById('name2').style.backgroundImage = "linear-gradient(black, black)";
	document.getElementById('dialogue').style.textAlign = "center";
	document.getElementById('dialogue').style.color = "white";
	document.getElementById('dbholder').style.backgroundColor = "gray";
	document.getElementById('dbholder').style.border = "3px solid white";
	isDark = true;
	for (let u = 1; u < 7; u++){
		document.getElementById('db'+u).style.backgroundImage = "linear-gradient(to top, black, gray)";
		document.getElementById('db'+u).style.border = "5px outset gray";
	}
}
function lighten(){
	document.getElementById('body').style.backgroundImage = "linear-gradient(to right, gray, black)";
	document.getElementById('dialogue').style.backgroundImage = "linear-gradient(to right, red, cyan)";
	document.getElementById('name').style.backgroundImage = "linear-gradient(to top, white, gray)";
	document.getElementById('dialogue2').style.backgroundImage = "linear-gradient(to right, red, cyan)";
	document.getElementById('name2').style.backgroundImage = "linear-gradient(to top, white, gray)";
	document.getElementById('dialogue').style.textAlign = "left";
	document.getElementById('dialogue').style.color = "black";
	document.getElementById('dbholder').style.backgroundColor = "yellow";
	document.getElementById('dbholder').style.border = "3px solid orange";
	isDark = false;
	for (let u = 1; u < 7; u++){
		document.getElementById('db'+u).style.backgroundImage = "linear-gradient(to top, purple, blue)";
		document.getElementById('db'+u).style.border = "5px outset purple";
	}
}
function DDstep(o) {
	document.getElementById("dialogue2").style.opacity = o;
	document.getElementById("name2").style.opacity = o;
}
function DDP2(d, n, ms) {
	document.getElementById("dialogue2").innerHTML = d;
	document.getElementById("name2").innerHTML = n;
	let count = 1 / ms;
	let nenen = 0;
	for (let i = 0; i < 1; i += count) {
		setTimeout(DDstep, nenen, i)
		nenen += ms/100;
	}
}
function ddhide() {
	document.getElementById("dialogue2").style.opacity = 0;
	document.getElementById("name2").style.opacity = 0;
}
function dihide(ms, dbh, bshow){
	let count = ms;
	let pc = 70;
	let p = 70/ms;
	document.getElementById('name').style.visibility = 'hidden';
	for (let i = 0; i < ms; i++){
		setTimeout(dOpenLoop, i, pc, -p);
		pc -= p;
	}
	setTimeout(() => {
		document.getElementById('dialogue').style.visibility = 'hidden';
		dbshow(bshow);
	}, (ms))
	if (dbh){
		dbhow(true);
	}
	else {
		dbhow(false);
	}
}
function dbshow(bshow){
	let dummy;
	if (bshow != null){
		for (let o = 0; o < bshow.length; o++){
			if (bshow[o][0] != '-'){
				document.getElementById(bshow[o]).style.visibility = "visible";
				document.getElementById(bshow[o]).style.position = "static";
			}
			if (bshow[o][0] == '-'){
				dummy = bshow[o].substring(1);
				document.getElementById(dummy).style.visibility = "hidden";
				document.getElementById(dummy).style.position = "fixed";
			}
		}
	}
}
function dstart(d, n, mso, msd, dbh, bshow = null){
	let count = mso;
	let pc = 0;
	let p = 70/mso;
	document.getElementById("dialogue").style.visibility = "visible";
	for (let i = 0; i < mso; i++){
		setTimeout(dOpenLoop, i, pc, p);
		pc += p;
	}
	document.getElementById("name").style.visibility = "visible";
	dialogue(d, n, msd, dbh, bshow);
}
function dOpenLoop(pc, p){
	let pls = pc + p;
	document.getElementById("dialogue").style.width = pls+"%";
	if (isDark){
		document.getElementById("dialogue").style.left = (50 - (pls/2)) + "%";
	}
}
function dialogueStep(d){
	document.getElementById("dialogue").innerHTML = document.getElementById("dialogue").innerHTML + d;
}
function dbhow(sh){
	if (sh){
		document.getElementById("dbholder").style.visibility = "visible";
	}
	else {
		document.getElementById("dbholder").style.visibility = "hidden";
	}
}
