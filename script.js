
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
    var school = $("#userInput").val().trim();
    school = school.toLowerCase();
    $(".card").css("display","initial");
    
    $("#teamLocals").hide();
    getWeather();

    /*if/else to see if user input matches a big12 city, if so, changes style to school
    themed by changing style sheet and adding school logo.
     else it displays message that, that city is not a BIG12 school city and displays
     list of city/school pairings. */
    if (school === "austin") {
        $("#stylesheet1").attr("href", "./assets/stylesheets/uta.css");
        var tLogo = $("<img>");
        tLogo.attr("src", "assets/images/texas_longhorns.png");
        tLogo.attr("alt", "The University of Texas at Austin Team Logo");
        $("#teamLogo").html(tLogo);
        $("#emess").remove();
    } else if (school === "waco") {
        $("#stylesheet1").attr("href", "./assets/stylesheets/baylor.css");
        var tLogo = $("<img>");
        tLogo.attr("src", "assets/images/baylor_bears.png");
        tLogo.attr("alt", "University of Baylor Team Logo");
        $("#teamLogo").html(tLogo);
        $("#emess").remove();
    } else if (school === "ames") {
        $("#stylesheet1").attr("href", "./assets/stylesheets/isu.css");
        var tLogo = $("<img>");
        tLogo.attr("src", "assets/images/iowa_state_cyclones.png");
        tLogo.attr("alt", "Iowa State University Team Logo");
        $("#teamLogo").html(tLogo);
        $("#emess").remove();
    } else if (school === "lawrence") {
        $("#stylesheet1").attr("href", "./assets/stylesheets/kansas.css");
        var tLogo = $("<img>");
        tLogo.attr("src", "assets/images/kansas_jayhawks.png");
        tLogo.attr("alt", "University of Kansas Team Logo");
        $("#teamLogo").html(tLogo);
        $("#emess").remove();
    } else if (school === "manhattan") {
        $("#stylesheet1").attr("href", "./assets/stylesheets/ksu.css");
        var tLogo = $("<img>");
        tLogo.attr("src", "assets/images/kansas_state_wildcats.png");
        tLogo.attr("alt", "Kansas State University Team Logo");
        $("#teamLogo").html(tLogo);
        $("#emess").remove();
    } else if (school === "norman") {
        $("#stylesheet1").attr("href", "./assets/stylesheets/oklahoma.css");
        var tLogo = $("<img>");
        tLogo.attr("src", "assets/images/oklahoma_sooners.png");
        tLogo.attr("alt", "Oklahoma University Team Logo");
        $("#teamLogo").html(tLogo);
        $("#emess").remove();
    } else if (school === "stillwater") {
        $("#stylesheet1").attr("href", "./assets/stylesheets/osu.css");
        var tLogo = $("<img>");
        tLogo.attr("src", "assets/images/oklahoma_state_cowboys.png");
        tLogo.attr("alt", "Oklahoma State University Team Logo");
        $("#teamLogo").html(tLogo);
        $("#emess").remove();
    } else if (school === "fort worth") {
        $("#stylesheet1").attr("href", "./assets/stylesheets/tcu.css");
        var tLogo = $("<img>");
        tLogo.attr("src", "assets/images/tcu_horned_frogs.png");
        tLogo.attr("alt", "Texas Christian University Team Logo");
        $("#teamLogo").html(tLogo);
        $("#emess").remove();
    } else if (school === "lubbock") {
        $("#stylesheet1").attr("href", "./assets/stylesheets/ttu.css");
        var tLogo = $("<img>");
        tLogo.attr("src", "assets/images/texas_tech_red_raiders.png");
        tLogo.attr("alt", "Texas Tech University Team Logo");
        $("#teamLogo").html(tLogo);
        $("#emess").remove();
    } else if (school === "morgantown") {
        $("#stylesheet1").attr("href", "./assets/stylesheets/wvu.css");
        var tLogo = $("<img>");
        tLogo.attr("src", "assets/images/west_virginia_mountaineers.png");
        tLogo.attr("alt", "West Virginia University Team Logo");
        tLogo.attr("id", "teamPicture")
        $("#teamLogo").html(tLogo);
        $("#emess").remove();
    } else { 
        $("#stylesheet1").attr("href", "style.css");
        $(".card").css("display", "none");
        eMessageBox = $("<div>");
        eMessageBox.attr("id", "emess")
        eMessageBox.addClass("container");
        eMessage = $("<h1>");
        eMessage.html("I'm sorry there is no BIG12 school in " + school + " ,please try your search again.");
        $("#teamLocals").show();
        $(eMessageBox).append(eMessage);
        $("#teamLocals").append(eMessageBox);
        $("#teamPicture").remove();
    };
    $("#maps").attr("height", "200px")
    $("#maps").attr("width","200px")
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
        weatherIcon.attr("id", "weatherPic")
        weatherIcon.attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

        $("#weatherCity").text(response.name);
        $("#weatherTemp").text(response.main.temp + " °F");
        $("#weatherIcon").html(weatherIcon);
        $("#weatherCondition").text(response.weather[0].description);

        
    });
}
//this is the autocomplete text box
$("#locationField").hide()
var placeSearch, autocomplete;
      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
      };
      $(".addSchool").on("click", function() {
        $("#locationField").show()
      })
      function initAutocomplete() {
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
            {types: ['geocode']});
        autocomplete.addListener('place_changed', fillInAddress);
      }

      function fillInAddress() {
        var place = autocomplete.getPlace();
        console.log(autocomplete)
        let newurl = place.url
        let addresss = newurl.replace ("https://maps.google.com/?q=", "")
        let add2 = addresss.replace("&ftid=0x865b5375c63082ad:0xdb303cb4e47ee4e8","")
        console.log(add2)
        queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+add2+"&key=AIzaSyCcLNf1UpaVT7gzHTDrXkLsnf07P-lHyl4"
        console.log(queryURL)
        $.ajax({
        url: queryURL,
        method: "GET"
            }).then(function (response) {
        console.log(response.results[0].geometry.location.lat,response.results[0].geometry.location.lng)
        })
    }  
