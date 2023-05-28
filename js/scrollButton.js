const button = document.createElement("button");
button.innerHTML = '⇧';
button.id = "backToTopBtn";
document.body.appendChild(button);

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

button.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});