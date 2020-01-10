var modeLogin = document.querySelector("#modeLogin");
var title = document.querySelector("body #title .container-fluid");
var shadow = document.querySelector("body #title .shadow");
var footer = document.querySelector("#footer");


modeLogin.addEventListener("click", function(){

  title.classList.toggle("mode");
  shadow.classList.toggle("mode");
  footer.classList.toggle("mode");
  document.body.classList.toggle("mode");
});
