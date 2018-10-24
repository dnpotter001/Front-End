
const hello = document.getElementById('hello');

hello.addEventListener("click", greeting);

function greeting() {
  hello.style.color = "hotpink";
  console.log("hello");
  hello.innerHTML = "HOT PINK";
}
