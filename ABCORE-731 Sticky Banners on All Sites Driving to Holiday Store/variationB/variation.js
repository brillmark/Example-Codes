(function() {
  var $ = convert.$;
  var FEHelper = {
    // waitfor jQuery
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
  };

  var holidayGiftBar =
    '' +
    '<a class="bm_giftGuide-banner-outer">' +
    '  <div class="bm_giftGuide-banner" href="#">' +
    '      <div class="bm_giftGuide-content">' +
    '          <div>' +
    '              <img src="http://cdn-3.convertexperiments.com/uf/10025040/10024674/1574417692giftsjsblak.png" alt="gift-img">' +
    '          </div>' +
    '          <div>' +
    '              <p>Holiday Gift Guide</p>' +
    '              <p>Expert picks for everyone on your list</p>' +
    '          </div>' +
    '      </div>' +
    '      <div class="bm_shop-btn">' +
    '          <span>Shop Now</span>' +
    '      </div>' +
    '      <div class="bm_closeBtn">&times;</div>' +
    '  </div>' +
    '   </a>';

  function init() {
    //adjust nav
    $('.navbar-nav.main').prepend(
      '<li class="bm-gift"><a href="https://gosendbox.netlify.app/" class="bm-gift-inr" target="_blank"><img src="https://cdn-3.convertexperiments.com/uf/10025040/10024669/1572945686giftpink.png"><span>GIFT GUIDE</span></a></li>'
    );

    //add gift banner
    $('#main-content').before(holidayGiftBar);

    //$('.alerts-login.dropdown').after(addGiftGuideItem);

    if (window.screen.width > 767) {
      // desktop layout
      $('.bm_closeBtn').on('click', function() {
        $('.bm_giftGuide-banner-outer').slideUp(200);
        $('html #main-content').css({
          height: '60px',
          transition: 'linear 0.2s',
        });
      });
      // setTimeout(function() {
      $('.bm_giftGuide-banner-outer')
        .slideDown()
        .css('display', 'flex');
      $('.bm-container').css('transition', 'linear 0.2s');
      $('html #main-content').css({
        height: '170px',
        transition: 'linear 0.2s',
      });
      // }, 5000);
    } else {
      // mobile layout
      $('.bm_closeBtn').on('click', function() {
        $('.bm_giftGuide-banner-outer').slideUp(200);
        $('html #main-content').css({
          height: '50px',
          transition: 'linear 0.2s',
        });
      });
      // setTimeout(function() {
      $('.bm_giftGuide-banner-outer')
        .slideDown()
        .css('display', 'flex');

      $('.bm-container').css('transition', 'linear 0.2s');
      $('html #main-content').css({
        height: '95px',
        transition: 'linear 0.2s',
      });
      // }, 5000);
    }

    //banner and close button click

    $('body').on('click', '.bm_giftGuide-banner-outer', function(e) {
      if (e.target == document.querySelector('.bm_closeBtn')) {
        // console.log(e);
      } else {
        // console.log('hello');
        window.open(
          'https://gosendbox.netlify.app/',
          '_blank'
        );
      }
    });
  }

  FEHelper.doWhenJqueryLoaded(function() {
    $ = convert.$;
    FEHelper.onLoadElement('#main-content', init, 50, 10000);
  });
})();
