const firebaseConfig = {
      apiKey: "AIzaSyCTf7kgeE-iSNxDLzqTuO-DAJ_FocBujGs",
      authDomain: "job-finder-app-capstone.firebaseapp.com",
      databaseURL: "https://job-finder-app-capstone-default-rtdb.firebaseio.com",
      projectId: "job-finder-app-capstone",
      storageBucket: "job-finder-app-capstone.appspot.com",
      messagingSenderId: "737754198615",
      appId: "1:737754198615:web:e4b213094b7fb4b251e912",
      measurementId: "G-ZTYFF750J3"
    };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        nametag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
                        messagetag = "<h4 class='message_h4'>"+message+"</h4>";
                        row = nametag+messagetag
                        document.getElementById("output").innerHTML+=row;

                        
                  }
            });
      });
}
getData();

function back() {
      // localStorage.removeItem("roomname");
      window.location = "Ja_room.html";
}

function send() {
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
      });
      document.getElementById("message").value="";
}
