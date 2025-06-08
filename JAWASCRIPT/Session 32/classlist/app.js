let arti=document.querySelector('article')

// ADD
arti.classList.add('sam')
arti.classList.add('sam','smarth','neha','durgesh')
arti.classList.add('gupta')
console.log(arti);


// Remove

arti.classList.remove('gupta','durgesh')
console.log(arti);

// toggle

arti.classList.toggle('toggle');

// contains(); return a  boolean of true/false

console.log(arti.classList.contains('sachin')); // false
console.log(arti.classList.contains('sam')); // true

