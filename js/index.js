  var config = {
    apiKey: "AIzaSyC0db5HvK0sG_SJtBkeGuBueNhpLSta4Kw",
    authDomain: "maps-cc23d.firebaseapp.com",
    databaseURL: "https://maps-cc23d.firebaseio.com",
    projectId: "maps-cc23d",
    storageBucket: "",
    messagingSenderId: "703821381347"
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
nme: ab,
roll: roll,
age: age,
phone: phone,
aadhaar: aadhaar,
pos:ccc
}

firebaseRef.set(data);
}

function bcd(){
var nme = document.getElementById("name");
var number = document.getElementById("number");	
var ab = name.value;
var roll = number.value;

var firebaseRef = firebase.database().ref('Users');

var data = {
nme: ab,
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