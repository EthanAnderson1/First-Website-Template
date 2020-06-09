const form = document.getElementById("form");
const allParagraphs = document.querySelectorAll(".para");
const allHeaders = document.querySelectorAll(".header");
const sampleParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae diam luctus, consectetur liberoat, lacinia purus. Phasellus non massa ut neque venenatis faucibus. In vehicula tellus at nunc aliquetgravida. Curabitur malesuada nisl nec consectetur suscipit. Sed mattis molestie est, eu mollis neque euismodsit amet. Sed dignissim, dui quis dignissim ultrices, augue odio tincidunt elit, nec malesuada felis liberoid nunc.";
const sampleHeader = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const titleText = document.querySelector('.titleText');
const nameInput = document.querySelector('#name');

allParagraphs.forEach((paragraph) => paragraph.innerText = sampleParagraph)
allHeaders.forEach((header) => header.innerText = sampleHeader)

form.addEventListener('submit', onSubmit);

function onSubmit(e){
  e.preventDefault();
  if(nameInput.value == ''){
    displayErrorMessage('empty field');
  }else{
    titleText.innerText = `Welcome ${nameInput.value}`;
    nameInput.value = '';
  }
}

function displayErrorMessage(arg){
  console.log('lol');
  switch(true){
    case (arg == 'empty field'):
      alert('No Input found');
      break
  }
}