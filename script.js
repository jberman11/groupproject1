
var schools = {
    austin: {
        lat : 30.28368,
        lng : -97.73360749999999,
    },
    norman: {
        lat:35.2058508,
        lng:-97.44231620000001,
    },
    ames: {
        lat:42.0162157,
        lng:-93.6345331,
    },
    morgantown: {
        lat:9.6489012 ,
        lng:-79.9539248,
    },
    "fort worth":{
        lat:32.7097444 ,
        lng:-97.3682427,
    },
    waco:{
        lat:31.5581942 ,
        lng:-97.1149085,
    },
    manhattan:{
        lat:39.2030135 ,
        lng:-96.59389089999999,
    },
    lubbock:{
        lat:33.5912701 ,
        lng:-101.8728718,
    },
    stillwater:{
        lat:36.1257008 ,
        lng:-97.06634460000001,
    },
    lawerence:{
        lat:32.8015479,
        lng: -96.84638869999999,
    },
};

function getWeather() {
    var city = $("#userInput").val().trim()
    weatherReturn(city);
}

$("#searchButton").on("click", function() {
    event.preventDefault()
    $(".card").css("display","initial");
    $("#teamLocals").hide();
    getWeather();
})

function weatherReturn(q) {


    var APIKey = "a99dd1eaf6a70e1bc8fa6e1d71493d6b";
    // Here we are building the URL we need to query the database
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + q + ",USAi&units=imperial&appid=" + APIKey;
    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var eMessageBox;
        var eMessage;
        var weatherIcon = $("<img>");
        weatherIcon.attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

        $("#weatherCity").text(response.name);
        $("#weatherTemp").text(response.main.temp + " °F");
        $("#weatherIcon").html(weatherIcon);
        $("#weatherCondition").text(response.weather[0].description);

        if (q === "austin") {
            $("body").css("background-color", "#CC5500");
            $("body").css("color", "white");
            $("nav").css("background-color", "white");
            $("nav").css("color", "#CC5500");
            $(".card-header").css("background-color", "white");
            $(".card-header").css("color", "#CC5500");
            $("#emess").remove();
        } else if (q === "waco") {
            $("body").css("background-color", "#002419");
            $("body").css("color", "#fdba31");
            $("nav").css("background-color", "#fdba31");
            $("nav").css("color", "#002419");
            $(".card-header").css("background-color", "#fdba31");
            $(".card-header").css("color", "#002419");
            $("#emess").remove();
        } else if (q === "ames") {
            $("body").css("background-color", "#C8102E");
            $("body").css("color", "#F1BE48");
            $("nav").css("background-color", "#F1BE48");
            $("nav").css("color", "#C8102E");
            $(".card-header").css("background-color", "#F1BE48");
            $(".card-header").css("color", "#C8102E");
            $("#emess").remove();
        } else if (q === "lawrence") {
            $("body").css("background-color", "#0051BA");
            $("body").css("color", "#E8000D");
            $("nav").css("background-color", "#E8000D");
            $("nav").css("color", "#0051BA");
            $(".card-header").css("background-color", "#E8000D");
            $(".card-header").css("color", "#0051BA");
            $("#emess").remove();
        } else if (q === "manhattan") {
            $("body").css("background-color", "#512888");
            $("body").css("color", "#A7A7A7");
            $("nav").css("background-color", "#A7A7A7");
            $("nav").css("color", "#512888");
            $(".card-header").css("background-color", "#A7A7A7");
            $(".card-header").css("color", "#512888");
            $("#emess").remove();
        } else if (q === "norman") {
            $("body").css("background-color", "#841719");
            $("body").css("color", "#fcfada");
            $("nav").css("background-color", "#fcfada");
            $("nav").css("color", "#841719");
            $(".card-header").css("background-color", "#fcfada");
            $(".card-header").css("color", "#841719");
            $("#emess").remove();
        } else if (q === "stillwater") {
            $("body").css("background-color", "#FF7300");
            $("body").css("color", "#000000");
            $("nav").css("background-color", "#000000");
            $("nav").css("color", "#FF7300");
            $(".card-header").css("background-color", "#000000");
            $(".card-header").css("color", "#FF7300");
            $("#emess").remove();
        } else if (q === "fort worth") {
            $("body").css("background-color", "#4D1979");
            $("body").css("color", "#FFFFFF");
            $("nav").css("background-color", "#FFFFFF");
            $("nav").css("color", "#4D1979");
            $(".card-header").css("background-color", "#FFFFFF");
            $(".card-header").css("color", "#4D1979");
            $("#emess").remove();
        } else if (q === "lubbock") {
            $("body").css("background-color", "#CC0000");
            $("body").css("color", "#000000");
            $("nav").css("background-color", "#000000");
            $("nav").css("color", "#CC0000");
            $(".card-header").css("background-color", "#000000");
            $(".card-header").css("color", "#CC0000");
            $("#emess").remove();
        } else if (q === "morgantown") {
            $("body").css("background-color", "#002855");
            $("body").css("color", "#EAAA00");
            $("nav").css("background-color", "#EAAA00");
            $("nav").css("color", "#002855");
            $(".card-header").css("background-color", "#EAAA00");
            $(".card-header").css("color", "#002855");
            $("#emess").remove();
        } else { 
            $(".card").css("display","none");
            eMessageBox = $("<div>");
            eMessageBox.attr("id", "emess")
            eMessageBox.addClass("container");
            eMessage = $("<h1>");
            eMessage.html("I'm sorry there is no BIG12 school in " + q + " ,please try your search again.");
            $("#teamLocals").show();
            $(eMessageBox).append(eMessage);
            $("#teamLocals").append(eMessageBox);
        };
    });
}

