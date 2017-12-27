var config = {
    apiKey: "AIzaSyDIsNts-YS5A803UDEg-pELhwtgMmICt6w",
    authDomain: "aditya-f14ee.firebaseapp.com",
    databaseURL: "https://aditya-f14ee.firebaseio.com",
    projectId: "aditya-f14ee",
    storageBucket: "aditya-f14ee.appspot.com",
    messagingSenderId: "719539654966"
  };
firebase.initializeApp(config);

function abc(){
var number = document.getElementById("number");
var age = document.getElementById("age");
var phone = document.getElementById("phone");
var aadhaar = document.getElementById("aadhaar");

var submitBtn = document.getElementById("submitBtn");	
var roll = number.value;
var age = age.value;
var phone = phone.value;
var aadhaar = aadhaar.value;

var user = firebase.auth().currentUser;
var ab = user.displayName;
var uid = user.uid;
var firebaseRef = firebase.database().ref('Users').child(uid);

firebase.auth().currentUser.sendEmailVerification()

var data = {
name: ab,
roll: roll,
age: age,
phone: phone,
aadhaar: aadhaar
}

firebaseRef.set(data);
}

function bcd(){
var name = document.getElementById("name");
var number = document.getElementById("number");	
var ab = name.value;
var roll = number.value;

var firebaseRef = firebase.database().ref('Users');

var data = {
name: ab,
roll: roll
}

firebaseRef.on('child_added', function(snapshot) {
   var message = snapshot.val();
   if (message.name == ab && message.roll == roll)
   {window.location.assign("loginsuccessful.html")}
});
}

function exit(){
firebase.auth().signOut();	
}