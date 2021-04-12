var firebaseConfig = {
      apiKey: "AIzaSyAOHghxluwsCQNb9GZtlz9tk3IzIvCCzyc",
      authDomain: "kwitter-abfb8.firebaseapp.com",
      databaseURL: "https://kwitter-abfb8-default-rtdb.firebaseio.com",
      projectId: "kwitter-abfb8",
      storageBucket: "kwitter-abfb8.appspot.com",
      messagingSenderId: "105604490045",
      appId: "1:105604490045:web:9bd902e8f941fe38895b54",
      measurementId: "G-7EV03XK499"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}

getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
