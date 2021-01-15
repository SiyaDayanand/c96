//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCNI9hFuVDJNYhEwcpCOtqZwky3ncFvkyM",
      authDomain: "kwitter-7597c.firebaseapp.com",
      databaseURL: "https://kwitter-7597c-default-rtdb.firebaseio.com",
      projectId: "kwitter-7597c",
      storageBucket: "kwitter-7597c.appspot.com",
      messagingSenderId: "999606677700",
      appId: "1:999606677700:web:703d0cae524ea771101991"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

//End code
      } });  }); }
getData();




