import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const myButton = document.getElementById("my-button");

  myButton.addEventListener("click", function () {
    console.log("Hello World!");
  });
}
