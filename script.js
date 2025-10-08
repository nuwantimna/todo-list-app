function addTask() {
  const input = document.getElementById('taskInput');
  const list = document.getElementById('taskList');
  if (input.value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = input.value;
  li.onclick = () => li.classList.toggle('done');
  list.appendChild(li);
  input.value = '';
}

