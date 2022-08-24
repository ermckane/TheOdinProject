function myFunction() {
    alert('hello');
  }
  
  myFunction();
  // calls the function once
  

  const myArray = ['I', 'love', 'chocolate', 'frogs'];
  const madeAString = myArray.join(' ');
  console.log(madeAString);

  const madeAnotherString = myArray.join('|');
  console.log(madeAnotherString);

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', (event) => output.textContent 
= `I watched you press "${event.key}".`);
