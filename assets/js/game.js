//---------------------
// GUEP Game
//---------------------

jQuery( function() {

    var start = jQuery( '.intro__start' ),
        intro = jQuery( '.intro' );

    start.on( 'click' , function () {
        
        jQuery(this).parent( intro ).addClass( '-is-disabled' );
        
        return false;
    });

});