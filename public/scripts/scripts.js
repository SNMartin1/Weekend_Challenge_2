console.log('scripts sourced');


$(document).ready(function(){

//start of button click function
  $( '.mathOperator').on('click', function(){
    console.log('button click working');
    var requestObject = {
      firstInput : $('#firstInput'),
      secondInput : $('#secondInput'),
      thirdInput: $('.mathOperator')
    };//end var requestObject
  }); //end of button click function

// start of clear button function
   $( '.clearOperator').on('click', function(){
     console.log( 'clear inputs working');
     $( ".inputs" ).empty();
   }); //end of clear button function

//  start ajax post - create object to send to server
  $.ajax({
    type: 'POST',
    url: '/calculate',
    data: requestObject,
    success: function( response ) {
    console.log( 'send requestObject to server');
  }//end sucess
}); //end ajax POST

});//end of document ready
