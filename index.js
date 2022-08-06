const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
icon.onclick = function () {
  search.classList.toggle("active");
};
const clear = document.querySelector(".clear");

clear.onclick = function () {
  document.getElementById("mysearch").value = "";
};
