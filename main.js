const btnAdd = document.querySelector('button.add');
const inputValue = document.querySelector('input.add');
const ul = document.querySelector('ul');
const ItemsNumber = document.getElementsByClassName('task');
const displayCount = document.querySelector('h1 span');
const searchPhrase = document.querySelector('section .search');

const toDoList = [];

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((element, key) => {
    element.dataset.key = key;
    ul.appendChild(element);
  });
}

const removeItem = (e) => {
  const key = e.target.parentNode.dataset.key;

  e.target.parentNode.remove();
  toDoList.splice(key, 1);
  renderList();
  searchItem();

  displayCount.textContent = ItemsNumber.length;
};

const addItem = () => {
  event.preventDefault();
  if (inputValue) {
    const taskTitle = inputValue.value;
    const task = document.createElement('li');
    task.innerHTML = taskTitle + "<button>Usuń</button>";
    task.classList.add('task');
    toDoList.push(task);
    renderList();
    if (searchPhrase) {
      searchItem();
    }
    inputValue.value = "";
    task.querySelector('button').addEventListener('click', removeItem);
    displayCount.textContent = ItemsNumber.length;
  }
}

const searchItem = () => {
  let elements = toDoList;
  let searchText = searchPhrase.value.toLowerCase();
  elements = elements.filter(li => li.innerHTML.replace("<button>Usuń</button>", "").toLowerCase().includes(searchText));

  ul.textContent = "";
  elements.forEach((element, key) => {
    ul.appendChild(element);
    displayCount.textContent = ItemsNumber.length;
  });
}

btnAdd.addEventListener('click', addItem);
searchPhrase.addEventListener('input', searchItem);
