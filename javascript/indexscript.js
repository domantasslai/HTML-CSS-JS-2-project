// console.log("connected");
var modeButton = document.querySelector("#mode");
var cta = document.querySelector("#cta .container-fluid");
var title = document.querySelector("#title .container-fluid");
var features = document.querySelector("#features .container-fluid");
var testimonials = document.querySelector("#testimonials #testimonial-carousel");

var footer = document.querySelector("#footer");
var card = document.querySelector("#pricing .pricing-column");

modeButton.addEventListener("click", function(){
  cta.classList.toggle("mode");
  title.classList.toggle("mode");
  features.classList.toggle("mode");
  testimonials.classList.toggle("mode");

  footer.classList.toggle("mode");
  document.body.classList.toggle("mode");
});
