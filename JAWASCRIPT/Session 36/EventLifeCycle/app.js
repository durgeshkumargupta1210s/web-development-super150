let grandparent = document.querySelector('#grandParent');
let parent = document.querySelector('#Parent');
let child = document.querySelector('#child');


// for event bubbling phase....buttom to top approach
// grandparent.addEventListener('click', () => {
//     console.log('grandfather clicked !!')
// },false)

// parent.addEventListener('click', () => {
//     console.log('parent clicked !!')
// },false)

// child.addEventListener('click', () => {
//     console.log('child clicked !!')
// },false)




// for event capturing phase... top to buttom approach
// grandparent.addEventListener('click', () => {
//     console.log('grandfather clicked !!')
// },true)

// parent.addEventListener('click', () => {
//     console.log('parent clicked !!')
// },true)

// child.addEventListener('click', () => {
//     console.log('child clicked !!')
// },true)



// question
// grandparent.addEventListener('click', () => {
//     console.log('grandfather clicked !!')
// },true)  // first print

// parent.addEventListener('click', () => {
//     console.log('parent clicked !!')
// },false)  // third print

// child.addEventListener('click', () => {
//     console.log('child clicked !!')
// },true) // second print



// stop propagation..

grandparent.addEventListener('click', (e) => {
    console.log('grandfather clicked !!')
},true)

parent.addEventListener('click', (e) => {
    console.log(e);
    e.stopPropagation();
    console.log('parent clicked !!')
},true) 

child.addEventListener('click', (e) => {
    console.log('child clicked !!')
},true) 

