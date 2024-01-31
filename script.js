let punchedIn = false;
let punchInTime;
let totalHours = parseFloat(localStorage.getItem("totalHours")) || 0;

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
  setTimeout(updateClock, 1000);
}

function punch() {
  if (punchedIn) {
    const punchOutTime = new Date();
    const hoursWorked = (punchOutTime - punchInTime) / 3600000;
    totalHours += hoursWorked;

    localStorage.setItem("totalHours", totalHours);

    document.getElementById(
      "hours-logged"
    ).textContent = `Total Hours Logged: ${totalHours.toFixed(2)}`;
    document.getElementById("punch-button").textContent = "Clock In";
    punchedIn = false;
  } else {
    punchInTime = new Date();

    document.getElementById("punch-button").textContent = "Clock Out";
    punchedIn = true;
  }
}

document.getElementById("punch-button").addEventListener("click", punch);

updateClock();
document.getElementById(
  "hours-logged"
).textContent = `Total Hours Logged: ${totalHours.toFixed(2)}`;
