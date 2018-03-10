
(function ($) {

Drupal.behaviors.usernameCheck = {
  attach: function (context) {
    $('#username-check-informer:not(.username-check-processed)', context)
    .each(function() {
      var input = $(this).parents('.form-item').find('input');
      
      Drupal.usernameCheck.username = '';
      input
      .keyup(function () {
        if(input.val() != Drupal.usernameCheck.username) {
          clearTimeout(Drupal.usernameCheck.timer);
          Drupal.usernameCheck.timer = setTimeout(function () {Drupal.usernameCheck.check(input)}, parseFloat(Drupal.settings.usernameCheck.delay)*1000);
        
          if(!$("#username-check-informer").hasClass('username-check-informer-progress')) {
            $("#username-check-informer")
              .removeClass('username-check-informer-accepted')
              .removeClass('username-check-informer-rejected');
          }
            
          $("#username-check-message")
            .hide();
        }
      })
      .blur(function () {
        if(input.val() != Drupal.usernameCheck.username) {
          Drupal.usernameCheck.check(input);
        }
      });    
    })
    .addClass('username-check-processed'); 
  }
};

Drupal.usernameCheck = {};
Drupal.usernameCheck.check = function(input) {
  clearTimeout(Drupal.usernameCheck.timer);
  Drupal.usernameCheck.username = input.val();
  
  $.ajax({
    url: Drupal.settings.usernameCheck.ajaxUrl,
    data: {username: Drupal.usernameCheck.username},
    dataType: 'json',
    beforeSend: function() {
      $("#username-check-informer")
        .removeClass('username-check-informer-accepted')
        .removeClass('username-check-informer-rejected')
        .addClass('username-check-informer-progress');
    },
    success: function(ret){
      if(ret['allowed']){
        $("#username-check-informer")
          .removeClass('username-check-informer-progress')
          .addClass('username-check-informer-accepted');
        
        input
          .removeClass('error');
      }
      else {
        $("#username-check-informer")
          .removeClass('username-check-informer-progress')
          .addClass('username-check-informer-rejected');
        
        $("#username-check-message")
          .addClass('username-check-message-rejected')
          .html(ret['msg'])
          .show();
      }
    }
   });
}

})(jQuery); 
