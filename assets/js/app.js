let data;

if (localStorage.getItem('todoList')) {
  data = JSON.parse(localStorage.getItem('todoList'));
  renderTodoList();
} else {
  data = {
    not: [],
    done: []
  };
}

document.getElementById('add').addEventListener('click', function() {
  let taskName = document.getElementById('task').value;

  addTask(taskName);
})

// --------------関数---------------

function addTask(taskName) {
  
  addTaskToDOM(taskName);
  document.getElementById('task').value = '';

  data.not.push(taskName);

  dataObjectUpdated();
}

function addTaskToDOM(taskName, isDone) {
  let list;
  if (isDone) {
    list = document.getElementById('done');
  } else {
    list = document.getElementById('not-yet');
  }

  let not = createItem(taskName);

  let buttons = createBtnArea();

  let remove = createRemoveBtn();

  let done = createDoneBtn();

  buttons.appendChild(remove);
  buttons.appendChild(done);
  not.appendChild(buttons);
  list.appendChild(not);
}

function createItem(taskName) {
  let not = document.createElement('li');
  not.textContent = taskName;

  return not;
}

function createBtnArea() {
  let buttons = document.createElement('div');
  buttons.classList.add('buttons');

  return buttons;
}

function createRemoveBtn() {
    let remove = document.createElement('button');
    let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';

    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    remove.addEventListener('click', removeTask);

    return remove;
}

function createDoneBtn() {
  let done = document.createElement('button');
  let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';

  done.classList.add('done');
  done.innerHTML = doneIcon;

  done.addEventListener('click', doneTask)
  
  return done;
}

function removeTask() {
  let task = this.parentNode.parentNode;
  let id = task.parentNode.id;
  let value = task.textContent;

  task.remove();

  if (id === 'not-yet') {
    data.not.splice(data.not.indexOf(value), 1);
  } else {
    data.done.splice(data.done.indexOf(value), 1);
  }
  
  dataObjectUpdated();
}

function doneTask() {
  let task = this.parentNode.parentNode;
  let id = task.parentNode.id;
  if (id !== 'not-yet') {
    return;
  }

  let value = task.textContent;

  let target = document.getElementById('done');
  target.appendChild(task);

  data.not.splice(data.not.indexOf(value), 1);
  data.done.push(value);
  dataObjectUpdated();
}

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
}

function renderTodoList() {
  for (let taskName of data.not) {
    addTaskToDOM(taskName, false);
  }

  for (let taskName of data.done) {
    addTaskToDOM(taskName, true);
  }
}