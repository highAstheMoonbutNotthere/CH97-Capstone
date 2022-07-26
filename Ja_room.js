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

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location = "index.html";
}

function addservice() {
      roomname = document.getElementById("room_name").value;
      document.getElementById("room_name").value = "";
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding new room"
      });
      localStorage.setItem("roomname", roomname);
      window.location = "Ja_page.html";
}

function redirect(name) {
      localStorage.setItem("roomname", name);
      window.location = "Ja_page.html";

}


