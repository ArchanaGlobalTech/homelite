let data = new Object();
function httpCall() {
  function success() {
    data = JSON.parse(this.responseText); //parse the string to JSON
    console.log(data);
  }

  // function to handle error
  function error(err) {
    console.log("Request Failed", err); //error details will be in the "err" object
  }
  var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
  xhr.onload = success; // call success function if request is successful
  xhr.onerror = error; // call error function if request failed
  xhr.open("GET", "http://localhost:8081/sweetpeople/home"); // open a GET request
  xhr.send(); // send the request to the server.
}
httpCall();

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("element-behind-brandname").textContent =
    data["titleText"];
  document.getElementById("telephoneNumber1").textContent =
    data["telephoneNumber"];
  document.getElementById("telephoneNumber2").textContent =
    data["telephoneNumber"];
  document.getElementById("telephoneNumberText1").textContent =
    data["telephoneNumberText"];
  document.getElementById("xs-deliver").textContent =
    data["telephoneNumberText"];
  document.getElementById("jumbotran-main-text").textContent =
    data["centerCarousalHeader"];
  document.getElementById("jumbotran-sub-text1").textContent =
    data["centerCarousalLine1"];
  document.getElementById("jumbotran-sub-text2").textContent =
    data["centerCarousalLine2"];
  document.getElementById("jumbotran-sub-text3").textContent =
    data["centerCarousalLine3"];
  document.getElementById("jumbotran-sub-text4").textContent =
    data["centerCarousalLine4"];
  document.getElementById("menu-tile-text").textContent = data["tileHeader1"];
  document.getElementById("specials-tile-text").textContent =
    data["tileHeader2"];
  document.getElementById("map-tile-text").textContent = data["tileHeader3"];
});
