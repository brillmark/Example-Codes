(function() {
  var $ = convert.$;
  var FEHelper = {
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
    getCookie: function(name) {
      var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return v ? v[2] : null;
    },
  };
  var dataString = {
    emailAddress: '',
    subscriptions: [{ productId: 28114192, frequency: 'daily' }],
    zipCode: '',
  };
  var bm_email = '';
  function BM_Sub_Gate() {
    var bmzipcod =
      '' +
      '  <div class="bmzipcod">' +
      '      <div class="bm-content">' +
      '          <h2> Thanks For Signing Up</h2>' +
      '          <p>Help us provide you the most relevant content<br> by sharing your zip code </p>' +
      '          <span class="fe_location"> My Zip Code<input type="number" maxlength="5" placeholder=" " autocomplete="off"pattern="/^-?d+.?d*$/" onKeyPress="if(this.value.length==5) return false;"> </span>' +
      '          <a class="bm-addbtn"> Add Zip Code </a>' +
      '          <span class="bMthanks"> No Thanks </span>' +
      '      </div>' +
      '  </div>';

    $('#entry-gate-submit').on('click', function() {
      bm_email = $('#entry-gate-email').val();
      var thankYouInterval = setInterval(function() {
        if (FEHelper.getCookie('u') != null) {
          $('body').addClass('newTest');
          $('body.newTest .subscription-gate').addClass('show');
          $('.bmzipcod').remove();
          $('.sign-up-desc').after(bmzipcod);
          addEventOnZip();
          clearInterval(thankYouInterval);
        }
      }, 50);
      setTimeout(function() {
        clearInterval(thankYouInterval);
      }, 10000);
    });
  }

  function addEventOnZip() {
    $('body').on('click', '.bmzipcod .bm-addbtn', function() {
      var bmzipCode = $('span.fe_location input').val();
      if (zipCodeValidation(bmzipCode)) {
        dataString.emailAddress = bm_email;
        dataString.zipCode = bmzipCode;
        postAjax(
          'https://gosendbox.netlify.app/Brillmark/zipSubmit',
          JSON.stringify(dataString),
          function(data) {
            console.log(data);
            $('#close-gate').click();
          }
        );
      }
    });

    $('body').on('click', '.bMthanks', function() {
      $('#close-gate').click();
    });
  }
  function zipCodeValidation(zipCode) {
    if (zipCode.length == 5) {
      $('.zip-error').remove();
      return true;
    } else {
      $('.zip-error').remove();
      $('.bmzipcod .bm-addbtn').before(
        '<p class="zip-error">Invalid zip code</p>'
      );
      return false;
    }
  }

  function postAjax(url, data, success) {
    var xhr = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
      if (xhr.readyState > 3 && xhr.status == 200) {
        console.log(success(xhr.responseText));
      }
    };
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
    return xhr;
  }
  FEHelper.doWhenJqueryLoaded(function() {
    FEHelper.onLoadElement('.sign-up-desc', BM_Sub_Gate, 50, 10000);
  });
})();
