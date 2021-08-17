// firebase links
var firebaseConfig = {
    apiKey: "AIzaSyCzLN0HzuNeOw_ad1Kk8jRNM6a_UBuO7kA",
    authDomain: "classtest-a5abb.firebaseapp.com",
    databaseURL: "https://classtest-a5abb-default-rtdb.firebaseio.com",
    projectId: "classtest-a5abb",
    storageBucket: "classtest-a5abb.appspot.com",
    messagingSenderId: "54590184475",
    appId: "1:54590184475:web:31c8219a5cb3746c8becbe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name_input").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "Add User"
    });
}