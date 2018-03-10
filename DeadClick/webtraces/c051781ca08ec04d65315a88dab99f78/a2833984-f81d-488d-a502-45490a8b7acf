var StagedDonations = StagedDonations || {};

$(document).ready(function(){

  (function(){

    this.updateContainerHeight = function(height) {
      $('.progress-stages').animate({'min-height':height},300);
    }

    this.updateProgressIndicator = function(indicator, direction) {
      var current = indicator.find('.active');
      var next = current.next();
      var previous = current.prev();
      if (direction && current.next().length) { // direction = 0 if going backwards, 1 if going forwards
        current.addClass('completed').find('.stage-count-inner').addClass('icon-tick');
        current.removeClass('active');
        next.addClass('active');
        next.addClass('seen');
      } else if (!direction && current.prev().length) {
        current.removeClass('active');
        previous.addClass('active');
      } else {
        // do nothing
      }
    }

    this.updateProgressStages = function(stages, direction) {
      var ns = this;
      var current = stages.find('.active');
      var next = current.next();
      var previous = current.prev();
      if (direction && current.next().length) { // direction = 0 if going backwards, 1 if going forwards
        current.hide('slide',{direction:'left',easing:'easeInBack'},300,function(){
          $(this).removeClass('active');
          current.next().show('slide',{direction:'left'},300,function(){$(this).addClass('active');});
        });
      } else if (!direction && current.prev().length) {
        current.hide('slide',{direction:'left',easing:'easeInBack'},function(){$(this).removeClass('active');
          current.prev().show('slide',{direction:'left'},300,function(){$(this).addClass('active');});
        });
      } else {
        // do nothing
      }
    }

    this.triggerAlert = function(alertMessage, insertBefore) {
      var message = '<div class="form-error">'+alertMessage+'</div>';
      insertBefore.before(message);
    }

    this.removeAlerts = function() {
      $('.form-error').remove();
      $('.error').each(function(){
        $(this).removeClass('error');
      });
    }

    this.validateEmail = function(email) { 
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    this.validateDonations = function(currentStage) {
      var donationAmount = parseFloat($('#donation_amount_other').val());
      switch (currentStage) {

        case "1":
          if ((donationAmount < 0.01) && ($('.progress-stage input[type="radio"]:checked').length == 0)) {
            $('#donation_amount_other').addClass('error');
            this.triggerAlert("Invalid donation amount",$('#donation_amount_other'));
            return false;
          } else {
            return true;
          }
          break;

        case "2":
          var validatedEmail = this.validateEmail($('#donation_email').val());
          if (!$('#donation_billing_address_address1').val()) {
            $('#donation_billing_address_address1').addClass('error');
            this.triggerAlert("Address1 can't be blank",$('#donation_billing_address_address1'));
            return false;
          }
          if (!$('#donation_billing_address_city').val()) {
            $('#donation_billing_address_city').addClass('error');
            this.triggerAlert("City can't be blank",$('#donation_billing_address_city'));
            return false;
          }
          if (!$('#donation_billing_address_zip').val()) {
            $('#donation_billing_address_zip').addClass('error');
            this.triggerAlert("Postal code can't be blank",$('#donation_billing_address_zip'));
            return false;
          }
          if (!$('#donation_first_name').val() && !$('#donation_last_name').val() && !$('#donation_email').val()) {
            $('#donation_email').addClass('error');
            this.triggerAlert("You must supply at least a first and last name or a valid email address",$('#donation_email'));
            return false;
          }
          if (!validatedEmail) {
            $('#donation_email').addClass('error');
            this.triggerAlert("Email address not valid",$('#donation_email'));
            return false;
          }
          else {
            return true;
          }
          break;

        default:
          return true;
      }

    }

  }).apply(StagedDonations);

  if ($('.progress-indicator-stages').length) {

    var progressIndicator = $('.progress-indicator-stages');
    var progressStages = $('.progress-stages');

    // Stage indicator click functions
    $('.progress-indicator-stages .stage-count').each(function(){$(this).click(function(event){
      event.preventDefault();
      if (!$(this).parent().hasClass('active')) {
        if ($(this).parent().hasClass('completed') || $(this).parent().hasClass('seen')) {
          var clickedIndicatorStageClass = $.grep($(this).parent().attr("class").split(" "), function(v, i){
            return v.indexOf('stage-') === 0;
          }).join();
          var currentActiveIndicator = progressIndicator.find('.active');
          var desiredProgressStage = progressStages.children('.'+clickedIndicatorStageClass);
          var currentActiveStage = progressStages.find('.active');
          currentActiveIndicator.removeClass('active');
          $(this).parent().addClass('active');
          currentActiveStage.hide('slide',{direction:'left',easing:'easeInBack'},300,function(){
            $(this).removeClass('active');
            desiredProgressStage.show('slide',{direction:'left'},300,function(){$(this).addClass('active');});
          });
        }
      }
    });});

    // Prev and next stage actions on form
    $('.progress-stage-button-next').each(function(){$(this).click(function(event){
      event.preventDefault();
      StagedDonations.removeAlerts();
      var currentStage = $('.progress-stage.active').attr('data-stageid');
      var isValid = StagedDonations.validateDonations(currentStage);
      if (isValid) {
        StagedDonations.updateProgressIndicator(progressIndicator, 1);
        StagedDonations.updateProgressStages(progressStages, 1);
      } else {
        progressIndicator.find('.active').removeClass('completed').find('.stage-count-inner').removeClass('icon-tick');
        progressIndicator.find('.active').next().removeClass('seen');
      }
    });});

    $('.progress-stages .radio').each(function(){$(this).click(function(event){
      StagedDonations.updateProgressIndicator(progressIndicator, 1);
      StagedDonations.updateProgressStages(progressStages, 1);
    });});

    $('.progress-stage-button-prev').each(function(){$(this).click(function(event){
      event.preventDefault();
      StagedDonations.removeAlerts();
      StagedDonations.updateProgressIndicator(progressIndicator, 0);
      StagedDonations.updateProgressStages(progressStages, 0);
    });});

    progressStages.find('input[type="submit"]').click(function(event){
      progressIndicator.find('.active').addClass('completed').find('.stage-count-inner').addClass('icon-tick');
    });

  }

});