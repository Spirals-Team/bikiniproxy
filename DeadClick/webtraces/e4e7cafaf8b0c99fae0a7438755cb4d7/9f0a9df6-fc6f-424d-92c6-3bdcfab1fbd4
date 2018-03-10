/* jshint loopfunc:true */

(function (window, document, undefined) {
  'use strict';

  var VALIDATION_URL  = "https://app.geckoboard.com/sign-up-validation";
  // Match error content... Terrible we should rely on type
  var ERRORS_WITH_LOGIN_LINK = [
    'is already taken',
    'has already been taken',
  ];
  var signupFormFirstError; // To store ref to first invalid form el to give focus

  H5F.setup(document.getElementById('form-signup'), {
    invalidClass: "invalid"
  });

  var $form = $('.form-signup'),
      isValidating = false,
      attemptedSubmit = false,
      tracked = false,
      $submitBtn = $form.find('input:submit');

  // If we're on a reasonable browser, use placeholders
  // instead of labels and weep
  if (!$.fn.placeholder.input) {
    $form.addClass('show-labels');
  }

  $form.on('submit', function (e) {
    // Fix for safari
    // Other browsers doesn't trigger the events
    if ( this.checkValidity && !this.checkValidity() ) {
      e.preventDefault();
      return;
    }
    // If validation is pending, don't submit the form,
    // disable the submit button
    // but record the fact that we tried to submit it.
    $submitBtn.attr("disabled", true);
    $form.addClass("form-submitted");

    $form.find('input, select').each(function (_idx, elem) {
      updateValidity(elem);
    });

    if (isValidating) {
      attemptedSubmit = true;
      e.preventDefault();
      return;
    }

    // We've passed validation and submission is good to go
    if (!tracked) {
      tracked = true;

      // Track the signup
      if (window.analytics) {
        analytics.track('Validated signup');
      }
      if (window.ga) {
        ga('create', 'UA-16139750-12');
        ga('send', 'event', 'Conversion', 'Validated signup');
      }
      e.preventDefault();

      // Give the track call 300ms to complete then allow the submission to continue
      setTimeout(function () {
        $form.submit();
      }, 300);
    }
  });

  $form.find('input, select')
    .on('change', function (e) {
      e.preventDefault();
      updateValidity(e.target);
    })
    .on('invalid', function (e) {
      e.preventDefault();
      if (!signupFormFirstError) {
        signupFormFirstError = e.target;
      }
      updateValidity(e.target);
    })
    .on('keypress', function (e) {
      var $this = $(this);

      // Remove the error message as soon as the user makes a change to an invalid field
      if ($this.hasClass('error')) {
        clearErrorMessage($this);
      }
    });

  $form.find('.validate-async')
    .unbind('change')
    .on('change', function (e) {
      var target = e.target,
          $target = $(target);

      e.preventDefault();

      $target.addClass('pending');
      isValidating = true;

      var url = $('meta[name=validate-url]').attr('content') || VALIDATION_URL;
      var $thisForm = $target.closest('.form-signup');

      $.ajax({
        url: url,
        data: $thisForm.serialize(),
        dataType: 'jsonp'
      }).success(function (data) {
        $target.removeClass('pending');

        var param = $target.data('param'),
            paramName = $target.data('param-name') || "This field",
            errors = data.errors && data.errors[param];

        if (errors === undefined) {
          // Empty string indicates a valid field
          target.setCustomValidity('');
          clearErrorMessage(target);

          // If we are validating because we just tried to submit the form,
          // then try submitting it again now this field is valid.
          if (attemptedSubmit) {
            isValidating = false;
            attemptedSubmit = false;
            $form.submit();
          }
        } else {
          var mainErrorMsg = errors[0];
          var customError = [paramName, mainErrorMsg + '.'];

          if (ERRORS_WITH_LOGIN_LINK.indexOf(mainErrorMsg) !== -1) {
            var link = document.getElementById('app-login-link');
            var newLink = document.createElement('a');
            newLink.appendChild(document.createTextNode('Click here to login.'));
            newLink.href = link.href;
            customError.push(newLink.outerHTML);
          }
          target.setCustomValidity(customError.join(' '));
          showErrorMessage(target);
          target.focus();
        }
      }).error(function () {
        $submitBtn.removeAttr("disabled");
        $form.removeClass("form-submitted");

        $target.removeClass('pending');
      }).always(function () {
        isValidating = false;
      });
    });

  function updateValidity(elem) {
    if (elem.validity.valid) {
      clearErrorMessage(elem);
    } else {
      showErrorMessage(elem);
      if (elem === signupFormFirstError) {
        $('html,body').animate({
          scrollTop: $(elem).offset().top
        }, 600, function (){
          elem.focus();
          signupFormFirstError = null; // Remove ref to first invalid el
        });
      }
    }
  }

  function showErrorMessage(elem) {
    var $elem = $(elem);

    if ($elem.hasClass('error') || $elem.hasClass('pending')) {
      return;
    }

    $elem.addClass('error')
         .parent()
         .append($("<span class='error-message'>" + validationErrorMessage(elem) + "</span>"));
  }

  function validationErrorMessage(field) {
    if (field.validity.valueMissing) {
      return $(field).data('value-missing') || '';
    } else if (field.validity.patternMismatch) {
      return $(field).data('pattern-mismatch') || '';
    } else if (field.validationMessage && field.validationMessage !== '') {
      return field.validationMessage || '';
    }
    return '';
  }

  function clearErrorMessage(elem) {
    $(elem).removeClass('error').siblings('.error-message').remove();
  }
})(window, document);
