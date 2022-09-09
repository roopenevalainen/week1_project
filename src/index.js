'import "./styles.css";';
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
  const changeHeaderbuttonFunctionality = document.getElementById("my-button");

  changeHeaderbuttonFunctionality.addEventListener("click", function () {
    printToLog();
    changeHeader();
  });
  const addElementButtonFunctionality = document.getElementById("add-data");
  addElementButtonFunctionality.addEventListener("click", function () {
    addElement();
    //clearTextArea();
  });

  const clearListButtonFunctionality = document.getElementById(
    "clearListButton"
  );
  clearListButtonFunctionality.addEventListener("click", function () {
    clearList();
  });
}
function printToLog() {
  console.log("Hello world");
}

function changeHeader() {
  let h1 = document.getElementById("heading");
  if (h1.innerText === "Hello world!") {
    h1.innerText = "My Notebook";
  } else {
    h1.innerText = "Hello world!";
  }
}
function addElement() {
  const userList = document.getElementById("data-list");
  let newElement = document.createElement("li");
  newElement.innerText = document.getElementById("user-input").value;
  userList.appendChild(newElement);
}

//function clearTextArea() {
  //let textArea = document.getElementById("user-input");
  //textArea.value = "";
//}

function clearList() {
  const list = document.getElementById("data-list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

//References:
//https://stackoverflow.com/questions/25816982/changing-heading-with-buttons
//https://www.w3schools.com/jsref/met_node_removechild.asp
