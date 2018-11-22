//---------------------
// GUEP Game
//---------------------

jQuery( function() {

    var btn_start = jQuery( '.intro__start' ),
        game = jQuery( '.game__scenario' ),
        intro = jQuery( '.intro' );

    btn_start.on( 'click' , function () {
        
        game.addClass( '--start' ).addClass( '-is-active' ).addClass( '--driving' ).removeClass( '-is-disabled' );
        intro.addClass( '-is-disabled' );
        

        setTimeout( function() {

            game.removeClass( '--driving' );
            
        }, 5000 );

        return false;
    });

    var steps = [ 'step1','step2','step3','step4','step5','step6','step7','step8', 'step9','step10', 'step11', 'step12' ],
        counter = 0,
        btn_next = jQuery( '.game__mountains' );

    btn_next.on('click', function() {

        if (game.hasClass('--driving')) {
            //return false;
        } else {

            if (counter > 11 ){
                game.find( '.game__quote' ).each(function(){
                    jQuery( this ).removeClass( '--is-active' );
                    if (jQuery( this ).hasClass( '--' + steps[counter] )){
                        jQuery( this ).addClass( '--is-active' );
                    }
                })
                
    
                game.removeClass( '--step12' ).removeClass( '--start' ).removeClass( '-is-active' ).addClass( '-is-disabled' );
                intro.removeClass( '-is-disabled' );
                
                counter = 0;
    
            } else {
    
                if (counter > 0) {
                    game.addClass ( '--driving' );
                    game.removeClass( '--' + steps[counter - 1]);
                    game.addClass( '--' + steps[counter]);
                    game.find( '.game__quote' ).each(function(){
                        jQuery( this ).removeClass( '--is-active' );
                        if (jQuery( this ).hasClass( '--' + steps[counter] )){
                            jQuery( this ).addClass( '--is-active' );
                        }
                    })
                    counter++;
    
                    setTimeout( function() {
    
                        game.removeClass( '--driving' );
                        
                    }, 5000 );
    
                } else {
                    game.addClass ( '--driving' );
                    game.addClass( '--' + steps[counter]);
                    game.find( '.game__quote' ).each(function(){
                        jQuery( this ).removeClass( '--is-active' );
                        if (jQuery( this ).hasClass( '--' + steps[counter] )){
                            jQuery( this ).addClass( '--is-active' );
                        }
                    })
                    counter++;
    
                    setTimeout( function() {
    
                        game.removeClass( '--driving' );
                        
                    }, 5000 );
    
                }
                
                return false;
            }
        }
    });
});