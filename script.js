const btnElement = document.querySelector("#btn-new-todo");
const newTodoInputElement = document.querySelector("#new-todo");
const todoListElement = document.querySelector("#todo-list");
const allListElements = document.querySelectorAll("ul li")

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
    // newTodoInputElement.value = "";

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
    showLi()
}

btnElement.addEventListener("click", addNewTodo);

// filter function

const allOpen = document.querySelector("#all-todos");
const openTodos = document.querySelector("#open-todos");
const doneTodos = document.querySelector("#done-todos");

function showListElement() {
  if (allOpen.checked === true) {
    // show all li --> class .is-done is not important --> remove .out-of-filter from all
    console.log("👍");
  } else if (openTodos.checked === true) {
    // show open li --> has not class .is-done --> add .out-of-filter to .is-done
    console.log("👍👍");
  } else if (doneTodos.checked === true) {
    // show done li --> has class .is-done --> add .out-of-filter, when not is-done
    console.log("👍👍👍👍");
  }
}

function checkClassList() {
  // li.classList.contains("is-done") --> return true
}

allOpen.addEventListener("change", showListElement);
openTodos.addEventListener("change", showListElement);
doneTodos.addEventListener("change", showListElement);


function showLi() { // show all list elements of the todo ul
    for (let i = 0; i < document.querySelectorAll("ul li").length; i++) {
        // console.log(document.querySelectorAll("ul li")[i])
        // jedesmal wenn eine checkbox gechanged wird, soll die gesamte Liste überprüft werden, welche li's noch gecheckt sind
        document.querySelectorAll("ul li")[i].addEventListener("change", checkIsDone)
    }
}

function checkIsDone() {
    for (let item of document.querySelectorAll("ul li")) {
        if (item.classList.contains("is-done")) {
            
            console.log(item)
        }
    }
}


