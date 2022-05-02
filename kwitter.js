 function login(){
     username=document.getElementById("username").value;
     localStorage.setItem("userkey",username);
     window.location="kwitter_room.html";
 }