// Add item
function addItem(e) {
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
  
    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);
  
    // Create edit button element
    var editBtn = document.createElement('button');
    // Add classes to edit button
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));
    // Append button to li
    li.appendChild(editBtn);
  
    // Append li to list
    itemList.appendChild(li);
  }
  