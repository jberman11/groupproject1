$("button").on("click", function(){
    // console.log("BUTTON CLICK")

    var queryURL = "https://api.yelp.com/v3/businesses/{id}/reviews"
    var type =$(this).data("search");
    var queryURL = "https://api.yelp.com/v3/businesses/search/?term=tacos@location=new"+type+"&api_key=XDImZ5nl0kkIpjU73d043cXt4NTtFdLgs4iD5WdmSlEbw8sbI2GvzGWbRd_-TWUSwA24u6qnbDLmO5ePsaIS6zDQGAvpDkJ-pEWionZnGjg1NpoWp1nIMF70qibuW3Yx";
        console.log(queryURL);

        $.ajax({queryURL, method:'GET'})
            .done(function(response){
                console.log(response);
            })
})                                                                                              