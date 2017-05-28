console.log('scripts sourced');


$(document).ready(function(){

//start of button click function
  $( '.mathOperator').on('click', function(){
    console.log('button click working');
    var requestObject = {
      firstInput : $('#firstInput').val(),
      secondInput : $('#secondInput').val(),
    };//end var requestObject

  //  start ajax post - create object to send to server
    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: requestObject,
      success: function( response ) {
      console.log( 'send requestObject to server');
      $('#output').val(response.result);
    }//end sucess
  }); //end ajax POST
}); //end of button click function

//start of clear button function
$('.clearOperator').on('click', function() {
  console.log( 'clear inputs working');
    $('#value1').val('');
    $('#value2').val('');
    //$('#output').val('');
   }); //end of clear button function
});//end of document ready
