function addItem() {
  // TODO: add 'item' to the list of TODOs

  //Step 1: identify the value of the myInput element. 
  const inputvalue = document.getElementById('myInput').value;

  //Step 2: Create a text node containing that value
  const textnode = document.createTextNode(inputvalue);

  //Step 3: Create a new li element and append the text node to it
  const newlist = document.createElement('li');
  newlist.appendChild(textnode);
  //Step 4: Append the li element to the existing myTODOs element.
  document.getElementById('myTODOs').appendChild(newlist);
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = addItem;
}
