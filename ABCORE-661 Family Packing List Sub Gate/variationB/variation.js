(function() {
  var $ = window.jQuery;
  var FEHelper = {

    // wait for jQuery
    doWhenJqueryLoaded: function(todoWhenLoaded) {
      var waitForjQuery = setInterval(
        function() {
          if (typeof window.jQuery != 'undefined') {
            clearInterval(waitForjQuery);
            todoWhenLoaded();
          }
        }, 50);

      setTimeout(function() {
        clearInterval(waitForjQuery)
      }, 5000)
    },
    // wait for element
    doWhenElementLoaded: function(element, todoWhenLoaded) {
      var waitForElement = setInterval(
        function() {
          if ($(element).length > 0) {
            clearInterval(waitForElement);
            todoWhenLoaded();
          }
        }, 50);
      setTimeout(function() {
        clearInterval(waitForElement)
      }, 5000)
    }
  };
  var bmPrivacy = '' +
    '  <div class="bm_privacy">' +
    '      <p>By Proceeding, you agree to our <a href="https://gosendbox.netlify.app/privacy-policy/">Privacy Policy</a> and <a href="https://gosendbox.netlify.app/terms-of-use/">Terms of Use.</a></p>' +
    '  </div>';

  var innerImg = '' +
    '  <div class="bm_img">' +
    '      <div class="bm_img-upper">' +
    '          <p class="bm_title">the family</p>' +
    '          <p class="bm_title_heading">Packing List</p>' +
    '      </div>' +
    '      <div class="pad_img"><img src="https://gosendbox.netlify.app/img/536963401/8d94dbb6519647a8a0d801f2e391e19d.png"></div>' +
    '  </div>';

  function init() {
    // add class for experiment
    $('body').addClass('bm_646');

    // text updates
    $('.subscribe-modal__intro.subscribe-modal__mobile h3').after('<P> </P>')
    $('.subscribe-modal__intro .subscribe-modal__title').text('What Did You Forget to Pack?');
    $('.subscribe-modal__intro.subscribe-modal__mobile .subscribe-modal__title').text('Forget Something?');
    $('.subscribe-modal__intro p').html('Sign up to receive a free printable list to packing list for <br> your next family vacation.');
    
    // adjust form
    $('.subscribe-form__submit').val('Get the List');
    $('.subscribe-form__input').attr('placeholder', 'Email Address');
    $('.form__field-group.subscribe-form__ages-container').remove();

    // add image
    $('.subscribe-modal__image').prepend(innerImg);
    // wrap content
    $('.bm_img, .gate-content-wrap').wrapAll('<div class="outerWrap"></div>');

    $('.subscribe-form__submit').after('<p class="no-thanks"><a href="#">No thanks</a></p>');
    
    // click events
    $('body').on('click', '.no-thanks, show_me_list', function(e) {
      e.preventDefault();
      $('.modal__outro__close').trigger('click');
    });
    $('.subscribe-modal__content').append(bmPrivacy);

    // adjust text
    $('#subscribe-modal__thanks-title').html('Here Comes <br>the Packing List!');
    $('.subscribe-modal__thanks').append('<p>Your Family Packing List in on it\'s way </p>');

    // wrap content
    $('.subscribe-modal__intro , .subscribe-modal__content').wrapAll('<div class="bm_wrap-modal"></div>');

  }

  FEHelper.doWhenJqueryLoaded(function() {
    $ = window.jQuery;
    FEHelper.doWhenElementLoaded('.subscribe-modal', init);
  });
})();
