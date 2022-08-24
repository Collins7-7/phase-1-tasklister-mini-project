document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const li = document.createElement("li");
    const userInput = document.getElementById("new-task-description");
    li.textContent = userInput.value;
    let ul = document.getElementById('tasks');
    ul.append(li);
    const button = document.createElement('button');
    button.innerText = 'X'
    const div = document.getElementById('list');
    li.appendChild(button);
    button.addEventListener('click', () => {
      li.remove();
    });
  });
});