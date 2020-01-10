var modeLogin = document.querySelector("#modeLogin");
var title = document.querySelector("body #title .container-fluid");
var features = document.querySelector("#features .container-fluid, background");
var footer = document.querySelector("#footer");



modeLogin.addEventListener("click", function(){

  title.classList.toggle("mode");
  features.classList.toggle("mode");
  footer.classList.toggle("mode");

  document.body.classList.toggle("mode");
});
