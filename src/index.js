import "./styles.css";

let num = 9;

function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

let form = document.querySelector("#form");
form.addEventListener("submit", formSubmit);

// Display
function Display() {}

// prototype
Display.prototype.add = function add(book) {
  var tableBody = document.querySelector("#tableBody");
  var uiString = `<tr>
  <td class="tt">${book.name}</td>
  <td class="tt">${book.author}</td>
  <td class="tt">${book.type}</td>
</tr>`;

  tableBody.innerHTML += uiString;
};

// clear
Display.prototype.clear = function clear() {
  let formId = document.querySelector("#form");
  formId.reset();
};

// validate
Display.prototype.validate = function validate(book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

// show message
Display.prototype.show = function show(message) {
  let msg = document.querySelector("#msg");
  msg.innerHTML = `<strong>Message: ${message} </strong>`;
  msg.style.backgroundColor = "rgb(122, 170, 233)";

  setTimeout(function () {
    msg.innerHTML = "";
    msg.style.backgroundColor = "white";
  }, 2000);
};

// main function
function formSubmit(e) {
  let bookName = document.querySelector("#bookName").value;
  let author = document.querySelector("#author").value;

  let fiction = document.querySelector("#fiction");
  let programming = document.querySelector("#computer");
  let cooking = document.querySelector("#cooking");
  let type;

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(bookName, author, type);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("Successfully Added!");
  } else {
    display.show("This book can't be added");
  }
  e.preventDefault();
}
