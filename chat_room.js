const firebaseConfig = {
    apiKey: "AIzaSyAlnvuZ2BnsJ0oVlriNv4GOTS2rpRoH9lM",
    authDomain: "quitter-b765e.firebaseapp.com",
    databaseURL: "https://quitter-b765e-default-rtdb.firebaseio.com",
    projectId: "quitter-b765e",
    storageBucket: "quitter-b765e.appspot.com",
    messagingSenderId: "446696722832",
    appId: "1:446696722832:web:7977d555f31b75cb3b2315",
    measurementId: "${config.measurementId}"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="WELCOME " + user_name + "!!";

function addRoom(){
  var room_name=document.getElementById("room_name").value;
firebase.database.ref("/").child(room_name).update({
  purpose : "adding a new room"
});
localStorage.setItem("room_name",room_name);
window.location="chat_page.html";
}

function getData() {
  firebase.database().ref("/").on('value',

function(snapshot) {
  document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) 
{childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});
});
}
getData();

