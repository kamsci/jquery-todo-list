$(document).ready(function() {
// get input from user
// add new list item to html
// clear and refocus after each submit
// add 'delete' box next to item
  $('#submit').click(function(e) {
    e.preventDefault();
    var item = $('#addItem').val().trim();
    if (item !== '') {
      $('ul').first().append('<li>'
        + item
        + '<button class="btn">X</button'
        + '</li>');
      $('#addItem').val('').focus();
      // $('#addItem');

      var numItems = $('ul li').length();
      $('ul li:nth-child('+numItems+')').on('click', function() {
        $(this).remove();
      });
    }
  });

  // $('li').on('click', 'button', function() {
  //   $(this).remove();
  // });
}); // end of doc ready
