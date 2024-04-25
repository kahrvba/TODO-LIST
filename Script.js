// Get the necessary elements
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Add a task when the 'Add' button is clicked
document.getElementById('add-btn').addEventListener('click', addTask);

// Add a task when the 'Enter' key is pressed
inputBox.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});

// Function to add a task
function addTask() {
  if (inputBox.value.trim() === '') {
    alert('Please enter a task');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  li.innerHTML = inputBox.value.trim();

  // Create a close button for the list item
  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', removeTask);

  // Add the close button to the list item
  li.appendChild(closeBtn);

  // Add the list item to the list container
  listContainer.appendChild(li);

  // Clear the input box
  inputBox.value = '';

  // Save the tasks to local storage
  saveData();
}

// Function to remove a task
function removeTask(event) {
  const li = event.target.parentElement;
  listContainer.removeChild(li);

  // Save the tasks to local storage
  saveData();
}

// Function to save tasks to local storage
function saveData() {
  localStorage.setItem('data', Array.from(listContainer.children)
    .map(li => li.outerHTML)
    .join('')
  );
}

// Function to load tasks from local storage
function showList() {
  const savedData = localStorage.getItem('data');
  if (savedData) {
    listContainer.innerHTML = savedData;

    // Add click event listeners to all close buttons

