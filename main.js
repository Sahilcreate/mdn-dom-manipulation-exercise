const ul = document.querySelector("ul");
const input = document.querySelector("input");
const buttonAdd = document.querySelector("button");


buttonAdd.addEventListener("click", addItem);

function addItem () {
    var inputValue = input.value;
    input.value = '';

    const li = document.createElement("li");
    const span = document.createElement("span");
    const buttonDelete = document.createElement("button");

    li.appendChild(span);
    li.appendChild(buttonDelete);

    span.textContent = inputValue;
    buttonDelete.textContent = "Delete";

    ul.appendChild(li);

    buttonDelete.addEventListener("click", () => {
        buttonDelete.parentElement.remove();
    });

    input.focus();
}

