

function register() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;

  var dob = document.getElementById("dob").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var select = document.getElementById("course").value;
  var knowing = document.getElementById("know").value;
  var knowing = document.getElementById("know1").value;
  var knowing = document.getElementById("know2").value;


 
  var userData = {
    firtName: firstName,
    lastName:lastName,
    dob: dob,
    address: address,
    city: city,
    state: state,
    email: email,
    course:select,
    source:knowing,
  };

  console.log(userData);

}

