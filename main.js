let mainDiv = document.querySelector(".main");
let successDiv = document.getElementById("success-div");

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = {};
  let field = e.target.querySelector("input");

  data[field.name] = field.value;
  console.log("data::", data);
  let span = document.getElementsByTagName('span')[0];
  span.textContent = `${data[field.name]}`
});


document.getElementById("subscribe-Btn").addEventListener("click", () => {
  successDiv.style.display = "block";
  mainDiv.style.display = "none";
});

document.getElementById("dismiss-btn").addEventListener("click", () => {
  successDiv.style.display = "none";
  mainDiv.style.display = "block";
  // document.querySelector('input').placeholder="";
});
