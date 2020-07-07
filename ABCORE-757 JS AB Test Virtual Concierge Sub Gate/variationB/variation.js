(function() {
  var $ = convert.$;
  var FEHelper = {
    doWhenJqueryLoaded: function(todoWhenLoaded) {
      var waitForjQuery = setInterval(function() {
        if (typeof convert.$ != 'undefined') {
          clearInterval(waitForjQuery);
          todoWhenLoaded();
        }
      }, 50);
      setTimeout(function() {
        clearInterval(waitForjQuery);
      }, 5000);
    },
    onLoadElement: function(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (
          document &&
          document.querySelectorAll &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    },
    getCookie: function(name) {
      var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return v ? v[2] : null;
    },
  };

  var bmScroll;
  var onlyOnce = true;
  var bmgate =
    '' +
    '  <div class="bm-gate">' +
    '      <p class="bm-heading">Hey there!</p>' +
    '      <p class="bm-sub-heading">Are you traveling somewhere soon?</p>' +
    '      <div class="bm-button">' +
    '          <button class="bm-yes">Yes</button>' +
    '          <button class="bm-no">No</button>' +
    '      </div>' +
    '  </div>';

  var bmYesHeading =
    "That’s so exciting! We can't wait to share our favorite spots.";
  var bmYesSubHeading =
    'Where should we send your insider tips, deals, and more?';

  var bmNoHeading =
    "That's okay! Become a member to access inspo for your next trip. ";

  var bmNoSubHeading =
    'Where should we send insider tips, deals, and more for your next trip?';
  //thanks screen text
  var bmThanks =
    '<p class="bm-thanks757"><img src="https://cdn-3.convertexperiments.com/uf/10025040/10024672/1581252672Shape.png">Nice! You’re all signed up!</p>';

  function init() {
    // $('body').addClass('bm-email-slide');
    //click on yes CTA
    $('body').on('click', '.bm-gate .bm-yes', function() {
      headYesSubHeadCopy();
      nextStepYes();
      window._conv_q || [];
      _conv_q.push(['triggerConversion', '100226986']);
    });
    //click on No CTA
    $('body').on('click', '.bm-gate .bm-no', function() {
      headNoSubHeadCopy();
      nextStepNo();
      window._conv_q || [];
      _conv_q.push(['triggerConversion', '100226987']);
    });

    $('.gate-content-wrap .disclaimer a:nth-child(1)').attr(
      'href',
      'https://gosendbox.netlify.app/privacy/'
    );
    //input box placeholder and button text
    $('html body .subscription-gate .gate-content-wrap input').attr(
      'placeholder',
      'Enter Your Email'
    );

    $('.subscription-gate .gate-content-wrap #entry-gate-submit').text(
      'Submit'
    );
    //adding image and Question Section
    $('.subscription-gate .gate-content-wrap .sign-up-desc').before(bmgate);

    $('#entry-gate-submit').on('click', function() {
      checkEmailSubmit();
    });
  }

  function checkEmailSubmit() {
    //check u cookie
    var thankYouInterval = setInterval(function() {
      if (FEHelper.getCookie('u') != null) {
        $('body').addClass('newScreen');
        $('body.newScreen .subscription-gate').addClass('show');
        $('body.newScreen .bm-thanks757').remove();
        $('.sign-up-desc').after(bmThanks);
        removeTime();
        clearInterval(thankYouInterval);
      }
    }, 10);
    setTimeout(function() {
      clearInterval(thankYouInterval);
    }, 10000);
  }

  //thanks screen automatically remove after 10 sec
  function removeTime() {
    onlyOnce = false;
    setScreen();
    $(window).unbind('mousewheel keydown');
    setTimeout(function() {
      $('#close-gate').click();
    }, 10 * 1000);
  }

  //set scrolled position
  function setScreen() {
    $('body, html').animate(
      {
        scrollTop: bmScroll,
      },
      50
    );
  }
  //change heading and subheading after yes CTA click
  function headYesSubHeadCopy() {
    $('.subscription-gate .sign-up-desc h2.headline').text(bmYesHeading);
    $('.subscription-gate .sign-up-desc p.body').text(bmYesSubHeading);
  }
  //after yes clicked
  function nextStepYes() {
    $('.gate-content-wrap .bm-gate').css('display', 'none');
    $('.gate-content-wrap .sign-up-desc').css('display', 'block');
    $('html body .subscription-gate .gate-wrap').css('height', 'auto');
  }
  //change heading and subheading after No CTA click
  function headNoSubHeadCopy() {
    $('.subscription-gate .sign-up-desc h2.headline').text(bmNoHeading);
    $('.subscription-gate .sign-up-desc p.body').text(bmNoSubHeading);
  }
  //after no clicked
  function nextStepNo() {
    $('.gate-content-wrap .bm-gate').css('display', 'none');
    $('.gate-content-wrap .sign-up-desc').css('display', 'block');
    $('html body .subscription-gate .gate-wrap').css('height', 'auto');
  }

  function subWait() {
    $('.subscription-gate .gate-content-wrap').trigger('click');
    //scroll method
    $(window).bind('mousewheel keydown', function(event) {
      if (onlyOnce) {
        bmScroll = $(window).scrollTop();
      }
    });
  }

  FEHelper.doWhenJqueryLoaded(function() {
    $ = convert.$;
    FEHelper.onLoadElement(
      '.subscription-gate .gate-content-wrap',
      init,
      50,
      10000
    );
    FEHelper.onLoadElement('.subscription-gate.show', subWait, 50, 10000);
  });
})();
