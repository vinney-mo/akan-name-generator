//Set max date to today for the DoB input
let currentDate = new Date().toJSON().slice(0, 10);
document.getElementById("dob").max = currentDate;

//Akan Name Objects
const maleAkans = {
  Sunday: "Kwasi",
  Monday: "Kwadwo",
  Tuesday: "Kwabena",
  Wednesday: "Kwaku",
  Thursday: "Yao",
  Friday: "Kofi",
  Saturday: "Kwame",
};
const femaleAkans = {
  Sunday: "Akosua",
  Monday: "Adwoa",
  Tuesday: "Abenaa",
  Wednesday: "Akua",
  Thursday: "Yaa",
  Friday: "Afua",
  Saturday: "Amma",
};

//Error display for the iput fields
const dobRrr = document.getElementById("dob-err");
const genderERrr = document.getElementById("gender-err");

//Event Listener for the close button for generated Akan names
const close = document.getElementById("close");
close.addEventListener("click", (event) => {
  document.getElementById("myAkan").style["display"] = "none";
  document.getElementById("myAkanDetails").innerHTML = "";
});

//Event listener to clear all
const clear = document.getElementById("clear");
clear.addEventListener("click", (event) => {
  dob.style["border"] = "1px solid #ced4da";
  dobRrr.style["display"] = "none";
  dobRrr.innerHTML = "";
  genderERrr.style["display"] = "none";
  genderERrr.innerHTML = "";
  document.getElementById("gakan").reset();
  document.getElementById("myAkan").style["display"] = "none";
  document.getElementById("myAkanDetails").innerHTML = "";
});

//Even listener for submitting form
const form = document.getElementById("gakan");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let err = 0;
  const dob = document.getElementById("dob");

  //Validate DoB input
  if (dob.value == "") {
    dob.style["border"] = "1px solid red";
    dobRrr.style["display"] = "block";
    dobRrr.innerHTML = "Please input your Date Of Birth";
    err++;
  } else {
    var ToDate = new Date();
    if (new Date(dob.value).getTime() > ToDate.getTime()) {
      dob.style["border"] = "1px solid red";
      dobRrr.style["display"] = "block";
      dobRrr.innerHTML =
        "Invalid Date Of Birth. Input a date less than or equal to today";
      err++;
    } else {
      dob.style["border"] = "1px solid #ced4da";
      dobRrr.style["display"] = "none";
      dobRrr.innerHTML = "";
    }
  }

  //Validate Gender selection
  if (!document.querySelector('input[name="gender"]:checked')) {
    genderERrr.style["display"] = "block";
    genderERrr.innerHTML = "Please select gender";
    err++;
  } else {
    genderERrr.style["display"] = "none";
    genderERrr.innerHTML = "";
  }

  //If errors resturn falsse
  if (err > 0) return false;

  //If no errors proced to genate Akan names
  document.getElementById("submit").disabled = true;
  document.getElementById("submit").innerHTML = "Generating . . .";

  const birthday = dob.value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  //Get day of the week from DoB
  const dayOfWeekName = new Date(birthday).toLocaleString("default", {
    weekday: "long",
  });
  let myAkanName = "";
  if (gender == "Male") {
    myAkanName = maleAkans[dayOfWeekName];
  } else {
    myAkanName = femaleAkans[dayOfWeekName];
  }

  //Reset form and diaplay info
  document.getElementById("gakan").reset();
  document.getElementById("submit").disabled = false;
  document.getElementById("submit").innerHTML = "Generate name";
  document.getElementById("myAkan").style["display"] = "block";
  document.getElementById("myAkanDetails").innerHTML =
    "<p>Birthday : <strong>" +
    birthday +
    "</strong> Gender:  <strong>" +
    gender +
    "</strong> </p>" +
    "<p >You were born on a <strong>" +
    dayOfWeekName +
    "</strong></p>" +
    "<p>You Akan name is <strong>" +
    myAkanName +
    "</strong></p>";
  "<p>You Akan name is <strong>" + myAkanName + "</strong></p>";
});
