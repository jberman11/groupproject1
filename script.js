
var city = "";

function getWeather() {
    var city = $("#userInput").val().trim()
    weatherReturn(city);
}

$("#searchButton").on("click", function() {
    getWeather();
})

function weatherReturn(q) {


    var APIKey = "a99dd1eaf6a70e1bc8fa6e1d71493d6b";
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + q + ",USAi&units=imperial&appid=" + APIKey;
    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var weatherIcon = $("<img>");
        weatherIcon.attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

        $("#weatherCity").text(response.name);
        $("#weatherTemp").text(response.main.temp);
        $("#weatherIcon").html(weatherIcon);
        $("#weatherCondition").text(response.weather[0].description);

        console.log(response.weather[0].description)
        console.log(response.name)
        console.log(response.weather[0].icon)
        console.log(response.main.temp)
        console.log(response)
    });
}

