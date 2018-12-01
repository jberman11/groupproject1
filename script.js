
var schools = {
    austin: {
        lat: 30.28368,
        lng: -97.73360749999999,
        school: "UT"
    },
    norman: {
        lat: 35.2058508,
        lng: -97.44231620000001,
        school: "OU"
    },
    ames: {
        lat: 42.0162157,
        lng: -93.6345331,
        school: "Iowa St"
    },
    morgantown: {
        lat: 9.6489012,
        lng: -79.9539248,
        school: "WVU"
    },
    "fort worth": {
        lat: 32.7097444,
        lng: -97.3682427,
        school: "TCU"
    },
    waco: {
        lat: 31.5581942,
        lng: -97.1149085,
        school: "Baylor"
    },
    manhattan: {
        lat: 39.2030135,
        lng: -96.59389089999999,
        school: "K-State"
    },
    lubbock: {
        lat: 33.5912701,
        lng: -101.8728718,
        school: "Texas Tech"
    },
    stillwater: {
        lat: 36.1257008,
        lng: -97.06634460000001,
        school: "OSU"
    },
    lawerence: {
        lat: 32.8015479,
        lng: -96.84638869999999,
        school: "Kansas"
    },
    list: { working: true }
};
//to reset database use : database.ref("/-LSc934g9t_qnp53Al7j").set(schools)
database.ref("/-LSc934g9t_qnp53Al7j").once("value", function (snap) {
    schools = snap.val()
})
var reference = "-LSc934g9t_qnp53Al7j"



$("#searchButton").on("click", function () {
    event.preventDefault()
    var school = $("#userInput").val().trim();
    school = school.toLowerCase();
    $(".card").css("display", "initial");

    $("#teamLocals").hide();
    weatherReturn(school);
    map.setCenter(new google.maps.LatLng(schools[school].lat, schools[school].lng))
    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: schools[school]
    });

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
        eMessage = $("<h1>");
        eMessage.html("I'm sorry we could not find a school in " + school + ", please try your search again, or Add Your School!");
        $("#teamLocals").show();
        $(eMessageBox).append(eMessage);
        $("#teamLocals").append(eMessageBox);
        $("#teamPicture").remove();
    };
    $("#maps").attr("height", "200px")
    $("#maps").attr("width", "200px")
})

function weatherReturn(q) {
    if (q = "manhattan") {
        q = "manhattan,KS"
    }


    var APIKey ="b39534895fae3a01555e692ed02510ac"// "a99dd1eaf6a70e1bc8fa6e1d71493d6b";
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
$(".addSchool").on("click", function () {
    $("#locationField").show()
    $(".addSchool").hide();
})

var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        { types: ['geocode'] });
    autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    var place = autocomplete.getPlace();
    console.log(autocomplete)
    let newurl = place.url
    console.log(newurl)
    let addresss = newurl.replace("https://maps.google.com/?q=", "")
    let add2 = addresss.replace("&ftid=0x865b5375c63082ad:0xdb303cb4e47ee4e8", "")
    console.log(add2)
    queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + add2 + "&key=AIzaSyCcLNf1UpaVT7gzHTDrXkLsnf07P-lHyl4"
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        newLat = response.results[0].geometry.location.lat
        newLng = response.results[0].geometry.location.lng
        newCity = response.results[0].address_components[3].short_name
        newCity = newCity.toLowerCase()

        schools[newCity] = { lat: newLat, lng: newLng }


    })
}

//maps function

function initMap() {
    map = new google.maps.Map(document.getElementById('maps'), {
        zoom: 16,
        center: { lat: 30, lng: -90 }
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: { lat: 30, lng: -90 }
    });
    marker.addListener('click', toggleBounce);
    initAutocomplete()
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}




$("#userInput").keypress(function (event) {
    var inputValue = event.which;

    // allow letters and whitespaces only for userInput text box, user validation
    if (!((inputValue >= 97 && inputValue <= 121) || (inputValue >= 65 && inputValue <= 90)) && (inputValue != 32 && inputValue != 39 && inputValue != 38)) {
        event.preventDefault();

    }
});
$("#schoolName").keypress(function (event) {
    var inputValue = event.which;
    // allow letters and whitespaces only for schoolName text box, user validation
    if (!((inputValue >= 97 && inputValue <= 121) || (inputValue >= 65 && inputValue <= 90)) && (inputValue != 32 && inputValue != 39 && inputValue != 38)) {
        event.preventDefault();

    }
});


//adding new schools to firebase

$("#searchButton2").on("click", function (event) {
    event.preventDefault()
    console.log("working")
    var newSchool = $("#schoolName").val().trim()
    newSchool = newSchool.toLowerCase()

    if (!schools.list[newSchool]) {
        schools.list[newSchool] = true;
        if (!schools[newCity]) {
            
            schools[newCity] = { lat: newLat, lng: newLng, school: newSchool }
            
        } else { 
            newCity = newCity + "*"
            schools[newCity] = { lat: newLat, lng: newLng, school: newSchool }
             }
        
        let addToDataList = database.ref("/" + reference).set(schools)
        makeButton(newCity)

        $("#sorry").empty()
        $("#locationField").hide()
        $(".addSchool").show();

    }
    else {
        $("#sorry").text("school already exists")
        $("#schoolName").val("")
        $("#autocomplete").val("")
    }
})


function makeButton(city){
    var btn = $("<button class ='btn btn-outline-light my-2 my-sm-0 float-left'>")
    $(btn).text(schools[city].school)

    $("#btnDiv").append(btn)
    $(btn).on("click", function () {
        event.preventDefault()
        $(".card").css("display", "initial");
    
        $("#teamLocals").hide();
        weatherReturn(city);
        map.setCenter(new google.maps.LatLng(schools[city].lat, schools[city].lng))
        marker = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: schools[city]
        });
        check(city)

})}

for ( var city in schools){
    if (city === "list"){}else{
    makeButton(city)}
}

function check (school){
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
        $("#stylesheet1").attr("href", "./assets/stylesheets/kansas.css");
        var tLogo = $("<img>");
        tLogo.attr("src", "assets/images/kansas_jayhawks.png");
        tLogo.attr("alt", "University of Kansas Team Logo");
        $("#teamLogo").empty
        $("#emess").remove();
    };
}