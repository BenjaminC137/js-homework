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


//function currentDate () {
//	var myDate = new Date (Date.now());
//	var month = myDate.getMonth();
//	var year = myDate.getFullYear();
//	var day = myDate.getDate();
//	console.log(month + "/" + day + "/" + year);
//	return(month + "/" + day + "/" + year);
//}

//leap:
//Write a function to return if the given year is a leap year. A year is leap if it is divisible by 4, but not divisible 100, unless it is also divisible by 400.
function isLeap(yearInput){
//	var currentDate = new Date(Date.now());
//	var year = currentDate.getFullYear();

	if(yearInput % 4 != 0){
		return false;
	}
	else if(yearInput % 100 == 0 && yearInput % 400 != 0){
		return false;
	}
	else{
		return true;
	}
	return true;
}

