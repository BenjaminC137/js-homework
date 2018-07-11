//function displayLarger(a, b){
//	if(a > b){
//		message = "a";
//		alert(message);
//	}
//	else{
//		message = "b";
//		alert(message);
//	}
//}
//
//largest = largest.sort((a, b, c, d, e) => (largest));
//	alert(largest);
//
//var entry;
//var row = "";
//var currentNumber = 0;
//
//function diamond(entry){
//	if(!entry){
//		entry = 5;
//	}
//	for(i = 1; i <= entry; i ++){
//		currentNumber ++;
//		row = row.concat(currentNumber);
//		console.log(row);
//	}
//
//	for(i = entry; i > 1; i --){
//		line --;
//		console.log(currentNumber);
//	}
//}
//
//var a = {};
//
//var person = {
//name: "Bob",
//age: 29,
//gender: "neutral",
//}
//
//var employee = {
//Name: "Steve",
//Title: "chief",
//IDnumber: 04,
//}


function currentDate () {
	var myDate = new Date (Date.now());
	var month = myDate.getMonth();
	var year = myDate.getFullYear();
	var day = myDate.getDate();
	console.log(month + "/" + day + "/" + year);
	return(month + "/" + day + "/" + year);
}

//function isLeap(yearInput){
////	var currentDate = new Date(Date.now());
////	var year = currentDate.getFullYear();
//
//	if(yearInput % 4 != 0){
//		return false;
//	}
//	else if(yearInput % 100 == 0 && yearInput % 400 != 0){
//		return false;
//	}
//	else{
//		return true;
//	}
//	return true;
//}

//function areConsecutive(a,b,c,d,e){
//	var myArray = [a,b,c,d,e];
//	for(i = 0; i < 5; i ++)
//	if((myArray[i] + 1) != (myArray[i + 1])){
//		return false;
//	}
//	return true;
//}



function testForArrays() {
	var myArray = [4,3,4,3,5];
	return myArray;
}
var colorState = 1;
//document.ondblclic
var i = 14;

document.onscroll = function(){
	var j = document.getElementsByTagName("body");
	if(colorState == 1){
//	j[0].style.backgroundColor = "red";
//	j[0].style.color = "yellow";
//	j[0].style.textShadow = "2px 2px 2px green";
	if(i < 100){
		i++
	}
	else{
		i += -1;
		 }
	j[0].style.fontSize = i +"px";

	colorState = 1;
	}
//	else{
////	j[0].style.backgroundColor = "blue";
////	j[0].style.color = "lightgreen";
////	j[0].style.textShadow = "8px 2px 4px #fff";
//	j[0].style.fontSize = "24px";
//	colorState = 1;
//	}
	console.log("key pressed");
}
