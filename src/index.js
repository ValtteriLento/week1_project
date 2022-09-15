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
  const addDataButton = document.getElementById("add-data");

  myButton.addEventListener("click", function () {
    console.log("hello world");

    let newTitle = document.getElementById("title");

    newTitle.innerHTML = "My notebook";
  });

  addDataButton.addEventListener("click", function () {
    const texts = document.getElementById("texts");

    let newListItem = document.createElement("li");

    newListItem.innerHTML = document.getElementById("text").value;

    texts.appendChild(newListItem);
  });
}
