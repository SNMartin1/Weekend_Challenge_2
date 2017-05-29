var express = require( 'express');
var app = express();
var path = require ('path');
var bodyParser = require( 'body-parser');

//var calculation =

//uses
app.use(express.static( 'public' ));
app.use(bodyParser.urlencoded( { extended: true }));

//listen
app.listen (5656, function(){
  console.log( 'server up on 5656');
});

//base url
app.get ('/', function(req, res){
  console.log( 'base url hit');
  res.sendFile(path.resolve('views/index.html'));
});

app.post( '/calculate', function( req, res ){
  console.log( 'post hit to /calculate:', req.body );
  var responseObject = {
    calculation: math(req.body)
  };
  res.send(responseObject);
});

var math = function(object){
switch (object.type) {
  case '+':
    return Number(object.firstInput) + Number(object.secondInput);
  case '-':
    return Number(object.firstInput) - Number(object.secondInput);
  case '*':
    return Number(object.firstInput) * Number(object.secondInput);
  case '/':
    return Number(object.firstInput) / Number(object.secondInput);
  default:
    break;
}
};
