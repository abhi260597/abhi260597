var config = {
    apiKey: "AIzaSyDIsNts-YS5A803UDEg-pELhwtgMmICt6w",
    authDomain: "aditya-f14ee.firebaseapp.com",
    databaseURL: "https://aditya-f14ee.firebaseio.com",
    projectId: "aditya-f14ee",
    storageBucket: "aditya-f14ee.appspot.com",
    messagingSenderId: "719539654966"
  };
firebase.initializeApp(config);

function aabb(){
	
alert(abc);

var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
 var date = day + "/" + month + "/" + year;

	var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

	if (minutes < 10) {
	 minutes = "0" + minutes;
  }
	var time = hours + ":" + minutes;

var b = document.getElementById("origin-input");
var c = document.getElementById("destination-input");
var a = document.getElementById("dm");
var s1 = document.getElementById("SLan");
var s2 = document.getElementById("SLon");
var d1 = document.getElementById("DLan");
var d2 = document.getElementById("DLon");

var submitBtn = document.getElementById("submit");	

var b = b.value;
var c = c.value;
//var a = a.value;
var s1 = s1.value;
var s2 = s2.value;
//var d1 = d1.value;
//var d2 = d2.value;

alert(s1);
console.log(s1);

var user = firebase.auth().currentUser;
var ab = user.displayName;
var uid = user.uid;

var firebaseRef = firebase.database().ref('Payment').child(uid);

var data = {
Name: ab,
Source: b,
Destination: c,
Booking_Date: date,
Booking_Time: time,
Source_Latitude: s1
//Rate: a
//Source Longitude: s2,
//Destination Latitude: d1,
//Destination Longitude: d2
}

firebaseRef.set(data);
}