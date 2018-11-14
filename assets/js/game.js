//---------------------
// GUEP Game
//---------------------

jQuery( function() {

    var btn_start = jQuery( '.intro__start' ),
        game = jQuery( '.game' ),
        intro = jQuery( '.intro' );

    btn_start.on( 'click' , function () {
        
        game.addClass( '--start' );
        intro.addClass( '-is-disabled' );
        game.addClass( '-is-active' );

        return false;
    });

    var steps = [ 'step1','step2','step3','step4','step5','step6','step7','step8' ],
        counter = 0,
        btn_next = jQuery( '.game__next-step' );

    btn_next.on('click', function() {
        
        if (counter > 7 ){

            game.removeClass( '--start' ).addClass( '--end' );
            
            setTimeout( function() {

                game.removeClass( '--step8' ).removeClass( '--end' );
                
            }, 5000 );
            
            counter = 0;

        } else {

            if (counter > 0) {
                game.removeClass( '--' + steps[counter - 1]);
                game.addClass( '--' + steps[counter]);
                counter++;
            } else {
                game.addClass( '--' + steps[counter]);
                counter++;
            }
            
            return false;

        }
        
    });
    

});