// Check of specific todo by clicking
$('ul').on("click", "li", function () { 
    $(this).toggleClass("completed");
});


$("ul").on("click", "span", function (e) { 
    $(this).parent().fadeOut(500, function(){   // this odnosi sie do span
        $(this).remove()                        // this odnosi sie do parent span czyli do 'li'
    })
    e.stopPropagation();                        // zatrzymuje klikniecian a wiekszych obiektach w któryh span sie znajduje
});


$("input[type='text'").keypress(function(e){
    if(e.which === 13){
        var todoText = $(this).val()
        $(this).val("")
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
})

$(".fa-plus").click(function(){
    $("input").fadeToggle()
})