

$(window).on('load', function(){
    var block = $('div').find('.btn-change');
    var Bprincipale = $('.section-principale').children()
    console.log(Bprincipale)
    var liste = [$('#image1'), $('#image2'), $('#image3')]
    var y = 0;
    $('#menu-icon').on('click', function(){
        $('.nav-bar').fadeToggle();
    })

    $(block).on('click', 'button', function(){
        var btn = $(this)
        var ID = btn.parent().attr('id');
        if($(this).attr('id') == 'right'){
            var a = $(this).parent().prev().children()[y++];
            $(a).fadeIn().
            siblings().
            fadeOut()
            console.log(y)
            //console.log($(this).parent().prev().children()[y++])
        }
        if(y > $(this).parent().prev().children().length-1 || y==0){
			y= 0
		}
    })

})





