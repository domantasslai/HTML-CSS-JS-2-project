function formValidation() {
  var uname = document.registration.username;
  var passid = document.registration.passid;
  var ucountry = document.registration.country;
  var uemail = document.registration.email;
  if (allLetter(uname)) {
      if (ValidateEmail(uemail)) {
            if (countryselect(ucountry)) {
                if (passid_validation(passid, 5, 35)) {
                  return true;
                }
            }
      }
  }
  return false;

}


function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert("Password should not be empty / length be between " + mx + " to " + my);
    passid.focus();
    return false;
  }
  return true;
}

function allLetter(uname) {
  var uname_len = uname.value.length;
  var letters = /^[A-Za-z]+$/;
  if (uname_len == 0 || uname_len >= 35 || uname_len < 5) {
    alert('Username should not be empty / length be between 5 to 35');
    uname.focus();
    return false;
  }
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert('Username must have alphanumeric characters only');
    uname.focus();
    return false;
  }
}


function countryselect(ucountry) {
  if (ucountry.value == "Default") {
    alert('Select your country from the list');
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}



function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}
