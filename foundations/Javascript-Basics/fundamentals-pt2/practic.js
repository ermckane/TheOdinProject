const button = document.querySelector('button');

function greet() {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);

// Length property returns the length of a string

let txt = 'The Rising will not stop with me Roque. I am just the figure of a tide.';
let lengthnum = txt.length;
console.log(lengthnum)

// slice() extracts part of a string and returns the extracted part in a new string.
// It takes 2 parameters: the start positions, and the end position (end not included).

let str = 'Apples, Bananas, Watermelon';
let part = str.slice(8,15);
console.log(part)

// If the parameter is negative, the position is counted from the end of the string.

let str2 = "Apples, Bananas, Watermelons";
let part2 = str2.slice(-20,-13);
console.log(part2);

//substring() is similar to slice() but the start and end values less than 0 are treated as 0.