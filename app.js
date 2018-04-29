// listen for form submit event: click 'submit' OR hit enter
const form = document.getElementById('registrar');
//select form input element to get text users enter
const input = form.querySelector('input');

const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterLabel.textContent = "Hide those who haven't responded";
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);
filterCheckbox.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  const lis = ul.children; // reference to collection of element's children
  if (isChecked){
    for (let i = 0; i < lis.length; i++){
      let li = lis[i];
      if (li.className === 'responded'){
        li.style.display = '';
      } else {
        li.style.display = 'none';
      }
    }
  } else {
    for (let i = 0; i < lis.length; i++){
      let li = lis[i];
      li.style.display = '';
    }
  }
});

function createLI(text){
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  li.appendChild(span);
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
    // traverse dom
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(button.textContent === 'remove'){
      ul.removeChild(li);
    } else if (button.textContent === 'edit') {
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent; // value defaults original text into input
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
    } else if (button.textContent === 'save'){
        const input = li.firstElementChild;
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit';
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
