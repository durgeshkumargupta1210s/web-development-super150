
// adding a todo
$('input').keypress(function(e){
    //   console.log(e);
    if(e.which===13){
        const todotext=$(this).val();
        // console.log(todotext);
        $('#list').append(`<li> <span>x</span> ${todotext} </li>`)

        $(this).val('');
    }
})

// mark as completed

$('li').on('click', function(){
    $(this).toggleClass('completed');
})

// delete todo

// $('ul').on('click','span', function(e){
//         e.stopPropagation();// to stop event bubbling
//         $(this).parent().fadeOut(600,function(){
//             $(this).remove();
//         })
// })

$('span').on('click', function(e){
        // e.stopPropagation();// to stop event bubbling
        $(this).parent().fadeOut(600,function(){
            $(this).remove();
        })
})

// toggle input
 $('#plus').click(function(){
    $('input').fadeToggle();
 })





