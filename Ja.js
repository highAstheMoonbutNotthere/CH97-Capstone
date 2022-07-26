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

//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);


function addUser() {
    username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
        purpose:"add new user"
    })
    localStorage.setItem("username", username);
    window.location = "Ja_room.html"
}