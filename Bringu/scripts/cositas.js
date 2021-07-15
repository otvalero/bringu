function showMadridMap() {
  document.getElementById("locationDiv").style.display = "none";
  document.getElementById("locationProximamente").style.display = "flex";
  document.getElementById("locationProximamenteCity").textContent =
    "Pronto estaremos en Madrid";
  document.getElementById("cityOptionMadrid").classList.add("selectedLocation");

  document.getElementById("cityOptionBcn").classList.remove("selectedLocation");
  document
    .getElementById("cityOptionSevilla")
    .classList.remove("selectedLocation");
  document
    .getElementById("cityOptionValencia")
    .classList.remove("selectedLocation");
}
function showValenciaMap() {
  document.getElementById("locationDiv").style.display = "none";
  document.getElementById("locationProximamente").style.display = "flex";
  document.getElementById("locationProximamenteCity").textContent =
    "Pronto estaremos en Valencia";
  document
    .getElementById("cityOptionValencia")
    .classList.add("selectedLocation");

  document.getElementById("cityOptionBcn").classList.remove("selectedLocation");
  document
    .getElementById("cityOptionMadrid")
    .classList.remove("selectedLocation");
  document
    .getElementById("cityOptionSevilla")
    .classList.remove("selectedLocation");
}

function showSevillaMap() {
  document.getElementById("locationDiv").style.display = "none";
  document.getElementById("locationProximamente").style.display = "flex";
  document.getElementById("locationProximamenteCity").textContent =
    "Pronto estaremos en Sevilla";
  document
    .getElementById("cityOptionSevilla")
    .classList.add("selectedLocation");
  document.getElementById("cityOptionBcn").classList.remove("selectedLocation");
  document
    .getElementById("cityOptionMadrid")
    .classList.remove("selectedLocation");
  document
    .getElementById("cityOptionValencia")
    .classList.remove("selectedLocation");
}

function showBcnMap() {
  document.getElementById("locationDiv").style.display = "flex";
  document.getElementById("locationProximamente").style.display = "none";
  document.getElementById("cityOptionBcn").classList.add("selectedLocation");

  document
    .getElementById("cityOptionSevilla")
    .classList.remove("selectedLocation");
  document
    .getElementById("cityOptionMadrid")
    .classList.remove("selectedLocation");
  document
    .getElementById("cityOptionValencia")
    .classList.remove("selectedLocation");
}

window.addEventListener("scroll", (checkHeader) => {
  let scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    document.getElementById("header").classList.add("headerScrolling");
  } else {
    document.getElementById("header").classList.remove("headerScrolling");
  }
});
