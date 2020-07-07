(function() {
  var $ = convert.$;
  var BMHelper = {
    // Wait for jQuery
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
    // Wait for element
    onLoadElement: function(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (
          document &&
          document.querySelectorAll(selector) &&
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
    doWhenFBLoaded: function(todoWhenLoaded) {
      var waitForFB = setInterval(function() {
        if (typeof window.FB != 'undefined') {
          clearInterval(waitForFB);
          todoWhenLoaded();
        }
      }, 50);

      setTimeout(function() {
        clearInterval(waitForFB);
      }, 5000);
    },
    setCookie: function(name, value, days) {
      var d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      document.cookie =
        name + '=' + value + ';path=/;expires=' + d.toGMTString();
    },
  };

  function init() {
    var fbbtn =
      '' +
      '<div class="fb-login-button" data-width="235"  data-height="100" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="false"></div>';

    $('#entry-gate-submit').after(fbbtn);
    $('#entry-gate-submit').after(
      '<p class="ortext">Or</p> <button class="bM_fb_btn" type="submit"><span><img src="https://cdn-3.convertexperiments.com/uf/10025040/10024674/1578985055facebook.png"></span>Continue with Facebook</button>'
    );
    $('.sign-up-desc h6 + p').html(
      '<p>Sign-up to our daily newsletter </br>and get our printable Ultimate Packing list.</p>'
    );

    $('.bM_fb_btn').click(function() {
      FB.login(
        function(response) {
          validateUser();
        },
        { scope: 'public_profile, email' }
      );
      //facebook login function
      // FB.login(function(response) {
      //   if (response.authResponse) {
      //     FB.api('/me', { locale: 'en_US', fields: 'name, email' }, function(
      //       response
      //     ) {
      //       //call subscribe api
      //       bmSubscribe(response);
      //     });
      //   } else {
      //     console.log('User cancelled login or did not fully authorize.');
      //   }
      // });
    });
  }

  function bmSubscribe(email, fid) {
    var data = JSON.stringify({
      emailAddress: email || fid,
      attribution: {
        clientIp: '127.0.0.1',
      },
      subscriptions: [
        {
          productId: 2473393,
          frequency: 'daily',
        },
        {
          productId: 6577851,
        },
        {
          productId: 3997638,
        },
        {
          productId: 27494324,
        },
      ],
      siteId: 3,
      trackingCode: 'FCB553B402',
    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === 4) {
        var responseData = JSON.parse(this.responseText);
        setUcookie(responseData);
      }
    });
    xhr.open(
      'POST',
      'https://gosendbox.netlify.app/wp-json/st/v1/newsletter?action=emailLookUp&email=' +
        (email || fid)
    );
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(data);
  }

  function setUcookie(responseData) {
    setCookie('u', responseData[0].trackingCode);
    $('.popUpSFG .successMsg').css('display', 'block');
    $('.popUpSFG .sign-up-desc').css('display', 'none');
    $('.popUpSFG').addClass('show');
    setTimeout(function() {
      $('.popUpSFG').removeClass('show');
    }, 2000);
  }
  //check user valid or not
  function validateUser() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      //console.log(response);
    });
  }
  //check status
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      testApi();
    } else {
      //console.log('response login error', response);
    }
  }

  //get data from api
  function testApi() {
    FB.api('/me?fields=id,name,email,picture', function(response) {
      if (response.email == null) {
        // console.log('error');
      } else {
        var email = response.email;
        var name = response.name;
        var fid = response.id;
        //console.log(email, name, fid);
        bmSubscribe(email, fid);
      }
    });
  }
  function fbinit() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: '656284641616239',
        cookie: true,
        xfbml: true,
        version: 'v6.0',
      });
      FB.AppEvents.logPageView();
    };
    window.fbAsyncInit();
  }
  //facebook object reinitialize with new app id
  BMHelper.doWhenFBLoaded(function() {
    BMHelper.onLoadElement('.popUpSFG.show', fbinit, 50, 10000);
  });
  BMHelper.doWhenJqueryLoaded(function() {
    BMHelper.onLoadElement('#entry-gate-submit', init, 50, 10000);
  });
})();
