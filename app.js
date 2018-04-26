// listen for form submit event: click 'submit' OR hit enter
const form = document.getElementById('registrar');
//select form input element to get text users enter
const input = form.querySelector('input');

const ul = document.getElementById('invitedList');

function createLI(text){
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);

  // edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'edit';
  li.appendChild(editButton);

  // remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'remove';
  li.appendChild(removeButton);

  return li;
}

form.addEventListener('submit', (e) =>
  {
    // prevent submit object e default behavior
    // so page doesn't reload on submit
    e.preventDefault();
    const text = input.value;
    input.value = '';

    const li = createLI(text);
    ul.appendChild(li);
  });

// click received by button and 'bubbles up' to li and then ul
ul.addEventListener('click', (e) => {
  // filter click events that aren't buttons
  if (e.target.tagName === 'BUTTON'){
    if(e.target.textContent === 'remove'){
    // get parent node of button
    const li = e.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
    } else if (e.target.textContent === 'edit') {
        console.log(e.target.textContent);
    }
  }
});

// use checkbox change event to get/set responded class
ul.addEventListener('change', (e) => {
  const checkbox = e.target;
  const checked = checkbox.checked; // storing truth value
  const listItem = checkbox.parentNode.parentNode; // traverse to li

  if (checked){
    listItem.className = 'responded';
  } else {
    listItem.className = '';
  }
});
