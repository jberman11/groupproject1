var config = {
    apiKey: "AIzaSyDGe9ZBe3dajFQalr9jOgK_JYhwJM0scbM",
    authDomain: "gamedayapp-e7876.firebaseapp.com",
    databaseURL: "https://gamedayapp-e7876.firebaseio.com",
    projectId: "gamedayapp-e7876",
    storageBucket: "gamedayapp-e7876.appspot.com",
    messagingSenderId: "880487468006"
};

firebase.initializeApp(config);
var database = firebase.database()


//function checks if a naming instance already exists in the database, and if it does sets the new addition to null
//built to be called in a click fucntion for a form.
function checkfirebase(id1, id2, id3) {//paramaters are DOM id strings

    //assigning ids to new varables as JQuery parseable strings
    var idOne = "#" + id1
    var idTwo = "#" + id2
    var idThree = "#" + id3

    //variables used to grab values from DOM elements
    var name = $(idOne).val().trim()
    var zip = $(idTwo).val().trim()
    var datee = $(idThree).val().trim()

    //pushing and storing all new information as an object in firebase
    let school = database.ref("/schools").push({ school: name, zipcode: zip, date: datee })

    //listener for when the value of the database changes
    database.ref("/schools").on('value', function (data) {

        var schoolid = school.path.pieces_[1] // specific to the id of the pushed object
        var schoolsObj = data.val() // the entirety of the object under the schools node
        var arr = Object.keys(schoolsObj) // an arr of keys under the schools node

        for (i = 0; i < (arr.length - 1); i++) { // loop through the schools node and check if a school name is the same as new value
            database.ref("/schools/" + arr[i]).once('value', function (snap) {//comparison function
                console.log(snap.val(), schoolsObj[schoolid].school)
                var compare = snap.val()
                if( schoolsObj[schoolid].school === compare.school){ // each object in the schools node vs new object
                    database.ref("/schools/"+ schoolid).set(null)//if they match, set most recent to null

                }


            })
        }
    })

}