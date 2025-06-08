







// selecting element



// by tag
// console.log($('h1'));

// // by class
// console.log($('.durgu'))

// // by id
// console.log($('#gupta'))

// Manupulating element
// css adding
// $('h1').css('color','red')
// $('h1').css('fontSize','80px')

// $('h1').css({
//     color:'red',
//     backgroundColor : 'plum'
// })

// access text

// console.log($('p').text()); // text is a method----> textContent

// console.log($('p').text('durgesh kumar gupta'))

// console.log($('p').html());


// attribute manupulation.....

// console.log($('a').text());
// console.log($('a').attr('href'));// get
// console.log($('a').attr('href','https://leetcode.com')); // set

// selecting particular elements

// $('h1:nth-of-type(2)').css('border','3px solid yellow');

// $('h1:first()').css('border','9px solid black')

// $('h1:last()').css('border','9px solid green')


// alternative way of doing the same

$('h1').first().css('border','9px solid black')

$('h1').last().css('border','9px solid green')


// getting the value of inputs

console.log($('input').val())


// events...
// click

// $('button').click(function(){
//     console.log("events in jquery");
// })


// new concept and important .....(this)
// 'this' is NOT SAME as that of your js // 'this' alag hai
// event.target==this (same kaam karega almost)
// 'this' points to the element over which the event is being triggered
// makww sure never use arrow function it does not work here

// $('li').click(function(){
//     $(this).css('color','crimson')
// })


// effects...

$('#fadeout').click(function(){
    $('#container').fadeOut();
})





