console.log('scripts sourced');


$(document).ready(function(){

//start of button click function
  $( '.mathOperator').on('click', function(){
    console.log('button click working');
    var requestObject = {
      firstInput : $('#firstInput').val(),
      secondInput : $('#secondInput').val(),
      type: $(this).text()
    };//end var requestObject
    console.log(requestObject);
  //  start ajax post - create object to send to server
    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: requestObject,
      success: function( response ) {
      console.log( 'send requestObject to server');
      $('#output').val(response.calculation);
    }//end sucess
  }); //end ajax POST
}); //end of button click function

//start of clear button function
$('.clearOperator').on('click', function() {
  console.log( 'clear inputs working');
    $('#firstInput').val('');
    $('#secondInput').val('');
    $('#output').val('');
    //$('#output').val('');
   }); //end of clear button function
});//end of document ready
