// listen for form submit event: click 'submit' OR hit enter
const form = document.getElementById('registrar');
//select form input element to get text users enter
const input = form.querySelector('input');

const ul = document.getElementById('invitedList');

form.addEventListener('submit', (e) =>
  {
    // prevent submit object e default behavior
    // so page doesn't reload on submit
    e.preventDefault();

    const text = input.value;
    input.value = '';

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

// click received by button and 'bubbles up' to li and then ul
ul.addEventListener('click', (e) => {
  // filter click events that aren't buttons
  if (e.target.tagName === 'BUTTON'){
    // get parent node of button
    const li = e.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
  }

  });
