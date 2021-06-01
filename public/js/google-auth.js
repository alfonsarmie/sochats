let signOutBtn = document.getElementById('sign-out')

let url = (window.location.hostname.includes('localhost')) ? 'http://localhost:8080/login' : 'HERE GOES MY DOMAIN'

function onSignIn(googleUser) {
    signOutBtn.classList.remove("d-none")

    var profile = googleUser.getBasicProfile();
   /* console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.*/
    var id_token = googleUser.getAuthResponse().id_token;

    const data = {id_token};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(data => console.log('Success to connect server:', data))
      .catch(error => console.error('Error:', error))

}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');

    signOutBtn.classList.add("d-none")

});
}