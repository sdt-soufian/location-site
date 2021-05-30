

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
        $(Bprincipale[ID]).children().find('.btn-change').on('click', 'button', function(){
            if($(this).attr('id') == `right${ID}`){
                liste[y++].
                fadeIn().
                siblings().
                fadeOut()
            }
            if(y > liste.length-1){
                y =0;
            }
        })
        //console.log(ID)
        /*if(ID == btn.val()){
            console.log(`I am ${ID}`)
            if($(block[ID]).btn.attr('id') == 'right'){
                liste[y++].
                fadeIn().
                siblings().
                fadeOut()
            }
            if(y > liste.length-1){
                y =0;
            }*/
        /*}*/
    })
 
    

})





/*
$(block).each(function(index){
        var ID = $(this).attr('id');
        $(this).css("backgroundColor", "red")
        $(this).on('click', function(){
            if(index == ID){
                console.log('true')
            }
            else{
                console.log('false')
            }
        })
    })*/ 

    /*n'a pas marcher
    
       $(block).on('click', function(){
        var ID = $(this).attr('id')
        console.log(ID)
        $(block).each(function(index){
            if(index == ID){
                console.log($(this))
                $(this).on('click', 'button', function(){
                    if($(this).attr('id') == 'right'){
                        liste[y++]
                        .fadeIn()
                        .siblings()
                        .fadeOut()
                    }
                    else if($(this).attr('id') == 'left'){
                        liste[y--]
                        .fadeIn()
                        .siblings()
                        .fadeOut()
                    }
                    if(y > liste.length-1 || y==0){
                        y = 0
                    }
                })
            }
        })
    })*/