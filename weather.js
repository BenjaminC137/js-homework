var cityAndState = "Chicago, IL";
var resultsText;
var forcastResult;
var jsonDataTenDay;
var weatherAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + cityAndState + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

//$.getJSON(weatherAPI, (jsonData) => { console.log(jsonData.query.results.channel.description); })

$.getJSON(weatherAPI, (jsonData) => { $("place").html(jsonData.query.results.channel.description); })

$.getJSON(weatherAPI, (jsonData) => { $("weather").html(jsonData.query.results.channel.item.description); })


//$.getJSON(weatherAPI, (jsonData) => { $("p").text(jsonData.query.results.channel.item.forecast); })

//$.getJSON(weatherAPI, (jsonData) => { $.each(jsonData.query.results.channel.item, function	(key, value){$("p").append(key + ": " + value + "<br>")}); })

//$.getJSON(weatherAPI, (jsonData) => { $.each(jsonData.query.results.channel.item.forecast, function	(index, value){
//	$.each(this.items, function(){ console.log(this.value)
//		});
//	 });
//});

//{ $.each(jsonData, function())
//	forcastResult = jsonDataTenDay.query.results.channel.item.forecast;



//
//function callback1(jsonDataCity){
//	console.log("callback1 running");
//	console.log(jsonDataCity.query.results.channel.description);
//}
//
//function callback2(jsonDataTenDay){
//	console.log("callback2 running");
//	forcastResult = jsonDataTenDay.query.results.channel.item.forecast;
//	$("p").text("weather will go here.");
//}



//$.getJSON(weatherAPI, callback1);
//
////$.getJSON(weatherAPI, function(jsonDataTenDay){ console.log(jsonDataTenDay.query.results.channel.item.forecast); })
//
//$.getJSON(weatherAPI, callback2);
//
//console.log("Putting forecast into inner html");
//resultsText.innerHTML = jsonDataTenDay;


//$.getJSON(weatherAPI, function(jsonData){ console.log(jsonData); })

            function getFormvalue(){
                var fname = document.getElementsByName("fname")[0];
                var lname = document.getElementsByName("lname")[0];
                //This is what the assignment asks for:
                console.log(fname.value);
                console.log(lname.value);

                //How do people use this?  Form validation!
                var isValid = true;
                if(fname.value.length === 0){
                    fname.style.boxShadow = "1px 1px 1px red";
                    isValid = false;
                }

                if(lname.value.length === 0){
                    lname.style.boxShadow = "1px 1px 1px red";
                    isValid = false;
                }
                return isValid;;
            }


//https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
