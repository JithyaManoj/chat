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
room_name = localStorage.getItem("romname");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        subfolder_id = childKey;
                        subfolder_data = childData;
                        name=subfolder_data["name"];
                        message=subfolder_data["message"];
                        like=subfolder_data["like"];

                        nametag='<h4>'+name+'<img class="user_tick" scr="tick.png"></h4>';
                        messagetag='<h4 class="message_h4">'+ message+'</h4>';
                        button_start_tag='<button class="btn btn-warning" onclick="updatelike(this.id)"id="'+subfolder_id+'" value="'+like+'">';
                        buttontext_tag='<span class="glyphicon glyphicon-thumbs-up">like:'+like+'</span></button><hr>';
                        row=nametag+messagetag+button_start_tag+buttontext_tag;
                        document.getElementById("output").innerHTML+=row
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("userkey");
      localStorage.removeItem("romname");
      window.location = "index.html"
}

function send() {
      message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:message,
            like:0
      });
      document.getElementById("msg").value="";
}

function updatelike(muttonid){
      currentlike=document.getElementById(muttonid).value;
      currentlike=Number(currentlike)+1;
      firebase.database().ref(room_name).child(muttonid).update({
            like:currentlike
      });
}

function back(){
      window.location = "kwitter_room.html"
}