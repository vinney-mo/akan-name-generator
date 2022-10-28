const dob = document.getElementById("dob");
let currentDate = new Date().toJSON().slice(0, 10);
dob.max = currentDate;

const form = document.getElementById("gakan");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
