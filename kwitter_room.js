var firebaseConfig = {
      apiKey: "AIzaSyDovNBbL1IS_qvoK_CIFoBX8v06dwaa5bI",
      authDomain: "kwitter-aa357.firebaseapp.com",
      databaseURL: "https://kwitter-aa357-default-rtdb.firebaseio.com",
      projectId: "kwitter-aa357",
      storageBucket: "kwitter-aa357.appspot.com",
      messagingSenderId: "289725555702",
      appId: "1:289725555702:web:aa19ae96301f194bb39dd7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("userkey");

document.getElementById("username").innerHTML = "welcome" + username

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                 console.log(Room_names)
                  row='<div class="room_name" id="'+ Room_names+'"onclick="redirect(this.id)">'+Room_names+'</div> <hr>';
                  document.getElementById("output").innerHTML+=row
                  //End code
            });
      });
}
getData();

function addroom() {
      roomname =document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"created"
      });
      localStorage.setItem("romname",roomname);
      window.location="kwitter_page.html"
}
 function redirect(room){
      localStorage.setItem("romname",room);
      window.location="kwitter_page.html"
 }

  function logout(){
      localStorage.removeItem("userkey");
      localStorage.removeItem("romname");
      window.location="index.html"
  }