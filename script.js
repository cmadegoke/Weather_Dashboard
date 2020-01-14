
var searchForm = document.querySelector("#searchform");
var searchInput = document.querySelector('#searchinput');
var clearbtn = document.querySelector("#clearButton");
var searchResults = document.querySelector("#searchResponse");
var Searchbtn =document.querySelector("#SearchResults");
console.log(Searchbtn)


function handleformsubmit(event){
    event.preventDefault();
    console.log(searchInput.value)
    var cityID = searchInput.value;
    if (!cityID) {
        return false
    }

 var queryUrl = `http://api.openweathermap.org/data/2.5/forecast/?q=${cityID}&APPID=e37e1b254dd810c3870001c45995ed30`

 $.ajax({
     url : queryUrl,
     method: 'GET',
     origin: '*',
 })
 .then(function(weatherRES) {
    //  console.log(weatherRES);

    // function forecast(){
    const dayOne = {
      cityname: weatherRES.city.name,
      Datenanme: weatherRES.list[0].dt_txt,
      IconImage: weatherRES.list[0].weather[0].icon,
      Temp: weatherRES.list[0].main.temp,
      Humidity: weatherRES.list[0].main.humidity,
      WindSpeed: weatherRES.list[0].wind.speed,
     UvIndex: weatherRES.list[0].main.temp,

    };
    const dayTwo = {
        cityname: weatherRES.city.name,
        Datenanme: weatherRES.list[8].dt_txt,
        IconImage: weatherRES.list[8].weather[0].icon,
        Temp: weatherRES.list[8].main.temp,
        Humidity: weatherRES.list[8].main.humidity,
        WindSpeed: weatherRES.list[8].wind.speed,
       UvIndex: weatherRES.list[8].main.temp,

    };
    const dayThree = {
        cityname: weatherRES.city.name,
        Datenanme: weatherRES.list[16].dt_txt,
        IconImage: weatherRES.list[16].weather[0].icon,
        Temp: weatherRES.list[16].main.temp,
        Humidity: weatherRES.list[16].main.humidity,
        WindSpeed: weatherRES.list[16].wind.speed,
       UvIndex: weatherRES.list[16].main.temp,

    };
    const dayFour = {
        cityname: weatherRES.city.name,
        Datenanme: weatherRES.list[24].dt_txt,
        IconImage: weatherRES.list[24].weather[0].icon,
        Temp: weatherRES.list[24].main.temp,
        Humidity: weatherRES.list[24].main.humidity,
        WindSpeed: weatherRES.list[24].wind.speed,
       UvIndex: weatherRES.list[24].main.temp,

    };
    const dayFive = {
        cityname: weatherRES.city.name,
        Datenanme: weatherRES.list[32].dt_txt,
        IconImage: weatherRES.list[32].weather[0].icon,
        Temp: weatherRES.list[32].main.temp,
        Humidity: weatherRES.list[32].main.humidity,
        WindSpeed: weatherRES.list[32].wind.speed,
       UvIndex: weatherRES.list[32].main.temp,

    };
    var forecast = [dayOne,dayTwo, dayThree, dayFour, dayFive ];

    searchResults.innerhtml=dayFive;
  
 })

}


function searchResults(weatherRES){

     for (var i= 0; i < forecast.length; i++){
         return
         
        var card = $('<div>').addClass("card")
        var $cardHeader = $('<h5>').addClass(`card-header bg info text-light`)
        // $card.html(forecast[0]);
        // weatherRES.append($card)


        //  $cardHeader.text(forecast[i].);

         $card.append($cardHeader);
         forecast.append ($card);


     }


}


function handleclearclick(event){

}

Searchbtn.addEventListener('click', handleformsubmit);
 
//  clearbtn.addEventListener("click", handleclearclick);