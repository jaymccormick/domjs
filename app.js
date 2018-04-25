// listen for form submit event: click 'submit' OR hit enter
const form = document.getElementById('registrar');
//select form input element to get text users enter
const input = form.querySelector('input');

form.addEventListener('submit', (e) =>
  {
    // prevent submit object e default behavior
    // so page doesn't reload on submit
    e.preventDefault();

    const text = input.value;
    input.value = '';
    const ul = document.getElementById('invitedList');
    const li = document.createElement('li');
    li.textContent = text;
    const label = document.createElement('label');
    label.textContent = 'confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    const button = document.createElement('button');
    button.textContent = 'remove';
    li.appendChild(button);
    ul.appendChild(li);
  });
