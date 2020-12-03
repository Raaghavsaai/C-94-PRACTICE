//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyC0sV4coxWizAVvOz9Qs3tCVu2aTuEKh1U",
    authDomain: "kwitter-86b17.firebaseapp.com",
    databaseURL: "https://kwitter-86b17.firebaseio.com",
    projectId: "kwitter-86b17",
    storageBucket: "kwitter-86b17.appspot.com",
    messagingSenderId: "772309210944",
    appId: "1:772309210944:web:5c0986eb28799b21644ca5",
    measurementId: "G-5L30VHRTWE"
}; // Initialize Firebase 
firebase.initializeApp(firebaseConfig);

function adduser() {
    username = document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        Purpose: "Adding user"
    });
}