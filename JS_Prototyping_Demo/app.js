var myStack, myQueue, addBtn, removeBtn, inputVal, stackWrap;

myStack = new Stack();
myQueue = new Queue();

addBtn = document.getElementById("push");
inputVal = document.getElementById("pushInput");
stackWrap = document.getElementById("stackWrap");
queueWrap = document.getElementById("queueWrap");
removeBtn = document.getElementById('pop');

function addToDataStructure(dataStructure, listElement, inputElement){
  var el;
  dataStructure.add(inputElement.value);
  el =  document.createElement('li');
  el.innerHTML = inputElement.value;
  if(dataStructure instanceof Stack) {
    listElement.insertBefore(el, listElement.firstElementChild );
  } else if(dataStructure instanceof Queue) {
    listElement.appendChild(el);
  }
}

function removeFromDataStructure(dataStructure, listElement){
  if ( dataStructure.length > 0 ) {
    dataStructure.remove();
    listElement.removeChild(listElement.firstElementChild);
  } else {
    dataStructure instanceof Stack ? alert('Stack is empty !!!') : alert('Queue is empty !!!')
  }
}

addBtn.addEventListener("click", function() {
  var el;
  if (inputVal.value.length > 0 ) {
    addToDataStructure(myStack, stackWrap, inputVal);
    addToDataStructure(myQueue, queueWrap, inputVal);
    inputVal.value = '';
  } else {
    alert('You have not entered anything!');
  }
});

removeBtn.addEventListener("click", function() {
  removeFromDataStructure(myStack, stackWrap);
  removeFromDataStructure(myQueue, queueWrap);
});
