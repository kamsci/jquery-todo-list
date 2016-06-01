$(document).ready(function() {

// user adds item to list
  // get input from user
$('#submit').click(function(e) {
  e.preventDefault();
  var item = $('#addItem').val();
  $('ul').first().append('<li>' + item + '<button class="btn">X</button' + '</li>');
  $('#addItem').val('');
  $('#addItem').focus();
});
  // add new list item to html
  // add 'delete' box next to item

  $('ul').delegate('li', 'click', function() {
    $(this).remove();
  });


// $('div').delegate('li button', function (

// user removes item from list
  // click x to delete
  // end of doc ready

// clear and refocus after each submit


});
