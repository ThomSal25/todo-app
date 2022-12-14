const btnElement = document.querySelector("#btn-new-todo");
const newTodoInputElement = document.querySelector("#new-todo");
const todoListElement = document.querySelector("#todo-list");

function addNewTodo() {
  console.log("Click");

  // TODO Nur Todo erzeugen wenn Textfeld nicht leer
  if (newTodoInputElement.value.length >= 2) {
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

    checkboxElement.addEventListener("change", () => {
      liElement.classList.toggle("is-done");
    });

    // li element render / dem ul zuweisen
    todoListElement.appendChild(liElement);
  } else {
    alert(
      "Sorry ich konnte das Todo nicht hinzufügen, es muss mindestens 2 Zeichen beinhalten."
    );
  }
}

btnElement.addEventListener("click", addNewTodo);