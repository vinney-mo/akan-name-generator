let currentDate = new Date().toJSON().slice(0, 10);
document.getElementById("dob").max = currentDate;
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
});
