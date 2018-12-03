/*-------using JQuery.........*/

$(function ()
{
    var url = 'https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&amp;id=1261481&amp;units=metric';
    $.getJSON(url)
        .done(function(data){
            console.log(data);
            document.getElementById("cloud_data").innerHTML = data.clouds.all;
            document.getElementById("temp").innerHTML = data.main.temp;
            document.getElementById("pre").innerHTML = data.main.pressure;
            document.getElementById("hmdt").innerHTML = data.main.humidity;
            document.getElementById("max").innerHTML = data.main.temp_max;
            document.getElementById("min").innerHTML = data.main.temp_min;
        });
});