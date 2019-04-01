console.log("JS nya nyambung ea");
var hasilakhir = "";
function angka(x){
	var tampil = document.querySelector('#input').value;
	if (tampil==0) {tampil=x;}
		else {tampil+=x;}
	document.querySelector('#input').value = tampil;
}
function koma(){
	var tampil = document.querySelector('#input').value;
	if (tampil.includes(".")==false) {tampil+=".";}
	document.querySelector('#input').value = tampil;
}
function hapus(){
	var tampil = document.querySelector('#input').value;
	document.querySelector('#hitung').value = "";
	document.querySelector('#input').value = "0";
	hasilakhir = "";
}
function opr(x) {
	var tampil = document.querySelector('#input').value;
	if(hasilakhir == '')
	{
		if(x=='1')
		{
			tampil+=" + ";
			document.querySelector('#hitung').value += tampil;
		}
		else if(x=='2')
		{
			tampil+=" - ";
			document.querySelector('#hitung').value += tampil;
		}
		else if(x=='3')
		{
			tampil+=" * ";
			document.querySelector('#hitung').value += tampil;
		}
		else if (x=='4') {
			tampil+=" / ";
			document.querySelector('#hitung').value += tampil;
		}
		console.log("true jalan");
	} else
	{
		if(x=='1')
		{
			document.querySelector('#hitung').value ="";
			hasilakhir+=" + ";
			document.querySelector('#hitung').value += hasilakhir;
		}
		else if(x=='2')
		{
			document.querySelector('#hitung').value ="";
			hasilakhir+=" - ";
			document.querySelector('#hitung').value += hasilakhir;
		}
		else if(x=='3')
		{
			document.querySelector('#hitung').value ="";
			hasilakhir+=" * ";
			document.querySelector('#hitung').value += hasilakhir;
		}
		else if (x=='4') {
			document.querySelector('#hitung').value ="";
			hasilakhir+=" / ";
			document.querySelector('#hitung').value += hasilakhir;
		}
		console.log("false jalan");
	}
	document.querySelector('#input').value = "0";
}
function kurung(x) {
	var tampil = document.querySelector('#input').value;
	if(x=='1')
	{
		if (tampil==0) {tampil=" ( ";}
		else {tampil+=" ( ";}
	}
	else if(x=='2')
	{
		if (tampil==0) {tampil=" ) ";}
		else {tampil+=" ) ";}
	}
	document.querySelector('#input').value = tampil;
}
function hasil(){
	var tampil = document.querySelector('#input').value;
	var hitung = document.querySelector('#hitung').value;
	// var hasil = ;
	var hasil = hitung + tampil;
	hasilakhir = eval(hasil);
	document.querySelector('#hitung').value = hasil;
	document.querySelector('#input').value = eval(hasil);
	console.log(hasilakhir);
}
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
