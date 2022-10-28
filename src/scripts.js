let currentDate = new Date().toJSON().slice(0, 10);
document.getElementById("dob").max = currentDate;

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

const form = document.getElementById("gakan");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dob = document.getElementById("dob");
  const err = document.getElementById("dob-err");
  if (dob.value == "") {
    dob.style["border"] = "1px solid red";
    err.style["display"] = "block";
    err.innerHTML = "Please input your Date Of Birth";
    return false;
  } else {
    var ToDate = new Date();
    if (new Date(dob.value).getTime() > ToDate.getTime()) {
      dob.style["border"] = "1px solid red";
      err.style["display"] = "block";
      err.innerHTML =
        "Invalid Date Of Birth. Input a date less than or equal to today";
      return false;
    } else {
      dob.style["border"] = "1px solid #ced4da";
      err.style["display"] = "none";
      err.innerHTML = "";
    }
  }

  document.getElementById("submit").disabled = true;
  document.getElementById("submit").innerHTML = "Generating . . .";

  const birthday = dob.value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const dayOfWeekName = new Date(birthday).toLocaleString("default", {
    weekday: "long",
  });
  let myAkanName = "";
  if (gender == "Male") {
    myAkanName = maleAkans[dayOfWeekName];
  } else {
    myAkanName = femaleAkans[dayOfWeekName];
  }

  document.getElementById("gakan").reset();
  document.getElementById("submit").disabled = false;
  document.getElementById("submit").innerHTML = "Generate name";
  document.getElementById("myAkan").innerHTML =
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
