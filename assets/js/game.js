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

    var steps = [ 'step1','step2','step3','step4','step5','step6','step7','step8', 'step9','step10', 'step11','step12','step13' ],
        counter = 0,
        btn_next = jQuery( '.game__mountains' ); 
        // Mutreta que eu fiz para tornar a própria tela button do jogo

    btn_next.on('click', function() {

        if (game.hasClass('--driving')) {
            return false;
        } else {

            if (counter > 12 ){
                game.addClass( '--driving' );
                game.removeClass( '--start' ).addClass( '--end' );
                
                setTimeout( function() {
    
                    game.removeClass( '--step13' ).removeClass( '--end' ).removeClass( '--driving' );
                    
                }, 5000 );
                
                counter = 0;
    
            } else {
    
                if (counter > 0) {
                    game.addClass ( '--driving' );
                    game.removeClass( '--' + steps[counter - 1]);
                    game.addClass( '--' + steps[counter]);
                    counter++;
    
                    setTimeout( function() {
    
                        game.removeClass( '--driving' );
                        
                    }, 5000 );
    
                } else {
                    game.addClass ( '--driving' );
                    game.addClass( '--' + steps[counter]);
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