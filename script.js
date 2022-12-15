const btnElement = document.querySelector("#btn-new-todo");
const newTodoInputElement = document.querySelector("#new-todo");
const todoListElement = document.querySelector("#todo-list");
const formElement = document.querySelector("form");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  addNewTodo();
});

function addNewTodo() {
  // TODO Nur Todo erzeugen wenn Textfeld nicht leer
  if (newTodoInputElement.value.length >= 5) {
    // checkbox Element erzeugen
    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";

    // li Element erzeugen
    const liElement = document.createElement("li");

    // checkbox Element li hinzufügen
    liElement.appendChild(checkboxElement);

    // li Element new todo input text zuweisen
    const textNode = document.createTextNode(newTodoInputElement.value);
    liElement.appendChild(textNode);
    newTodoInputElement.value = "";

    checkboxElement.addEventListener("change", () => {
      liElement.classList.toggle("is-done");
    });

    // li element render / dem ul zuweisen
    todoListElement.appendChild(liElement);
  } else {
    alert(
      "Sorry ich konnte das Todo nicht hinzufügen, es muss mindestens 5 Zeichen beinhalten."
    );
  }
  // console.log(allListElements, document.querySelectorAll("ul li"))
  showLi();
}

// filter function

const allOpen = document.querySelector("#all-todos");
const openTodos = document.querySelector("#open-todos");
const doneTodos = document.querySelector("#done-todos");

function showListElement() {
  //filtern mit CSS
  todoListElement.classList.remove("show-open");
  todoListElement.classList.remove("show-done");
  if (openTodos.checked === true) {
    //add class .show-open --> ul
    todoListElement.classList.add("show-open");
  } else if (doneTodos.checked === true) {
    todoListElement.classList.add("show-done");
  }

  // filtern mit for-Schleife
  //   for (let item of document.querySelectorAll("ul li")) {
  //     if (allOpen.checked === true) {
  //       item.classList.remove("out-of-filter");
  //     } else if (openTodos.checked === true) {
  //       if (item.classList.contains("is-done")) {
  //         item.classList.add("out-of-filter");
  //       } else {
  //         item.classList.remove("out-of-filter");
  //       }
  //     } else if (doneTodos.checked === true) {
  //       if (!item.classList.contains("is-done")) {
  //         item.classList.add("out-of-filter");
  //       } else {
  //         item.classList.remove("out-of-filter");
  //       }
  //     }
  //   }
}

allOpen.addEventListener("change", showListElement);
openTodos.addEventListener("change", showListElement);
doneTodos.addEventListener("change", showListElement);

// lösche done's
const deleteDone = document.querySelector("#delete-all-done");

deleteDone.addEventListener("click", function () {
  const doneListElements = document.querySelectorAll("li.is-done");
  doneListElements.forEach((doneTodo) => {
    doneTodo.remove();
  });
});
