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

var b = document.getElementById("origin-input");
var c = document.getElementById("destination-input");
var a = document.getElementById("demo");

var submitBtn = document.getElementById("submit");	

var b = b.value;
var c = c.value;
var a = a.innerHTML;
var aa = a.replace(/km/g, '')*6;
var abc = Math.ceil(aa);

var user = firebase.auth().currentUser;
var ab = user.displayName;
var uid = user.uid;

var firebaseRef = firebase.database().ref('Payment').child(uid);

var data = {
Name: ab,
Source: b,
Destination: c,
Rate: abc
}

firebaseRef.set(data);
}