

$(window).on('load', function(){
    var block = $('div').find('.btn-change');
    var Bprincipale = $('.section-principale').children()
    console.log(Bprincipale)
    var liste = [$('#image1'), $('#image2'), $('#image3')]
    var y =0;
    $('#menu-icon').on('click', function(){
        $('.nav-bar').fadeToggle();
    })

    $(block).on('click', 'button', function(){
        var btn = $(this)
        var ID = btn.parent().attr('id');
        //console.log($(block[ID]).parent().parent().parent())
        console.log($(Bprincipale[ID]).children().find('.btn-change'))
            if($(Bprincipale[ID]).children().find('.btn-change').children().attr('id') == `right${ID}`){
                liste[y++].
                fadeIn().
                siblings().
                fadeOut()
            }
            if(y > liste.length-1){
                y = 0;
            }
    })

})





