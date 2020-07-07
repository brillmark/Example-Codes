(function() {
  var autoComplete = (function() {
    // "use strict"
    function autoComplete(options) {
      if (!document.querySelector) return;

      // helpers
      function hasClass(el, className) {
        return el.classList
          ? el.classList.contains(className)
          : new RegExp('\\b' + className + '\\b').test(el.className);
      }

      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      }

      function removeEvent(el, type, handler) {
        // if (el.removeEventListener) not working in IE11
        if (el.detachEvent) el.detachEvent('on' + type, handler);
        else el.removeEventListener(type, handler);
      }

      function live(elClass, event, cb, context) {
        addEvent(context || document, event, function(e) {
          var found,
            el = e.target || e.srcElement;
          while (el && !(found = hasClass(el, elClass))) el = el.parentElement;
          if (found) cb.call(el, e);
        });
      }

      var o = {
        selector: 0,
        source: 0,
        minChars: 3,
        delay: 150,
        offsetLeft: 0,
        offsetTop: 1,
        cache: 1,
        menuClass: '',
        renderItem: function(item, search) {
          // escape special characters
          search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          var re = new RegExp('(' + search.split(' ').join('|') + ')', 'gi');
          return (
            '<div class="autocomplete-suggestion" data-val="' +
            item +
            '">' +
            item.replace(re, '<b>$1</b>') +
            '</div>'
          );
        },
        onSelect: function(e, term, item) {},
      };
      for (var k in options) {
        if (options.hasOwnProperty(k)) o[k] = options[k];
      }

      // init
      var elems =
        typeof o.selector == 'object'
          ? [o.selector]
          : document.querySelectorAll(o.selector);
      for (var i = 0; i < elems.length; i++) {
        var that = elems[i];

        // create suggestions container "sc"
        that.sc = document.createElement('div');
        that.sc.className = 'autocomplete-suggestions ' + o.menuClass;

        that.autocompleteAttr = that.getAttribute('autocomplete');
        that.setAttribute('autocomplete', 'off');
        that.cache = {};
        that.last_val = '';

        that.updateSC = function(resize, next) {
          var rect = that.getBoundingClientRect();
          that.sc.style.left =
            Math.round(
              rect.left +
                (window.pageXOffset || document.documentElement.scrollLeft) +
                o.offsetLeft
            ) + 'px';
          that.sc.style.top =
            Math.round(
              rect.bottom +
                (window.pageYOffset || document.documentElement.scrollTop) +
                o.offsetTop
            ) + 'px';
          that.sc.style.width = Math.round(rect.right - rect.left) + 'px'; // outerWidth
          if (!resize) {
            that.sc.style.display = 'block';
            if (!that.sc.maxHeight) {
              that.sc.maxHeight = parseInt(
                (window.getComputedStyle
                  ? getComputedStyle(that.sc, null)
                  : that.sc.currentStyle
                ).maxHeight
              );
            }
            if (!that.sc.suggestionHeight)
              that.sc.suggestionHeight = that.sc.querySelector(
                '.autocomplete-suggestion'
              ).offsetHeight;
            if (that.sc.suggestionHeight)
              if (!next) that.sc.scrollTop = 0;
              else {
                var scrTop = that.sc.scrollTop,
                  selTop =
                    next.getBoundingClientRect().top -
                    that.sc.getBoundingClientRect().top;
                if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0)
                  that.sc.scrollTop =
                    selTop +
                    that.sc.suggestionHeight +
                    scrTop -
                    that.sc.maxHeight;
                else if (selTop < 0) that.sc.scrollTop = selTop + scrTop;
              }
          }
        };
        addEvent(window, 'resize', that.updateSC);
        document.body.appendChild(that.sc);

        live(
          'autocomplete-suggestion',
          'mouseleave',
          function(e) {
            var sel = that.sc.querySelector(
              '.autocomplete-suggestion.selected'
            );
            if (sel)
              setTimeout(function() {
                sel.className = sel.className.replace('selected', '');
              }, 20);
          },
          that.sc
        );

        live(
          'autocomplete-suggestion',
          'mouseover',
          function(e) {
            var sel = that.sc.querySelector(
              '.autocomplete-suggestion.selected'
            );
            if (sel) sel.className = sel.className.replace('selected', '');
            this.className += ' selected';
          },
          that.sc
        );

        live(
          'autocomplete-suggestion',
          'mousedown',
          function(e) {
            if (hasClass(this, 'autocomplete-suggestion')) {
              // else outside click
              var v = this.getAttribute('data-val');
              that.value = v;
              o.onSelect(e, v, this);
              that.sc.style.display = 'none';
            }
          },
          that.sc
        );

        that.blurHandler = function() {
          try {
            var over_sb = document.querySelector(
              '.autocomplete-suggestions:hover'
            );
          } catch (e) {
            var over_sb = 0;
          }
          if (!over_sb) {
            that.last_val = that.value;
            that.sc.style.display = 'none';
            setTimeout(function() {
              that.sc.style.display = 'none';
            }, 350); // hide suggestions on fast input
          } else if (that !== document.activeElement)
            setTimeout(function() {
              that.focus();
            }, 20);
        };
        addEvent(that, 'blur', that.blurHandler);

        var suggest = function(data) {
          var val = that.value;
          that.cache[val] = data;
          if (data.length && val.length >= o.minChars) {
            var s = '';
            for (var i = 0; i < data.length; i++)
              s += o.renderItem(data[i], val);
            that.sc.innerHTML = s;
            that.updateSC(0);
          } else that.sc.style.display = 'none';
        };

        that.keydownHandler = function(e) {
          var key = window.event ? e.keyCode : e.which;
          // down (40), up (38)
          if ((key == 40 || key == 38) && that.sc.innerHTML) {
            var next,
              sel = that.sc.querySelector('.autocomplete-suggestion.selected');
            if (!sel) {
              next =
                key == 40
                  ? that.sc.querySelector('.autocomplete-suggestion')
                  : that.sc.childNodes[that.sc.childNodes.length - 1]; // first : last
              next.className += ' selected';
              that.value = next.getAttribute('data-val');
            } else {
              next = key == 40 ? sel.nextSibling : sel.previousSibling;
              if (next) {
                sel.className = sel.className.replace('selected', '');
                next.className += ' selected';
                that.value = next.getAttribute('data-val');
              } else {
                sel.className = sel.className.replace('selected', '');
                that.value = that.last_val;
                next = 0;
              }
            }
            that.updateSC(0, next);
            return false;
          }
          // esc
          else if (key == 27) {
            that.value = that.last_val;
            that.sc.style.display = 'none';
          }
          // enter
          else if (key == 13 || key == 9) {
            var sel = that.sc.querySelector(
              '.autocomplete-suggestion.selected'
            );
            if (sel && that.sc.style.display != 'none') {
              o.onSelect(e, sel.getAttribute('data-val'), sel);
              setTimeout(function() {
                that.sc.style.display = 'none';
              }, 20);
            }
          }
        };
        addEvent(that, 'keydown', that.keydownHandler);

        that.keyupHandler = function(e) {
          var key = window.event ? e.keyCode : e.which;
          if (!key || ((key < 35 || key > 40) && key != 13 && key != 27)) {
            var val = that.value;
            if (val.length >= o.minChars) {
              if (val != that.last_val) {
                that.last_val = val;
                clearTimeout(that.timer);
                if (o.cache) {
                  if (val in that.cache) {
                    suggest(that.cache[val]);
                    return;
                  }
                  // no requests if previous suggestions were empty
                  for (var i = 1; i < val.length - o.minChars; i++) {
                    var part = val.slice(0, val.length - i);
                    if (part in that.cache && !that.cache[part].length) {
                      suggest([]);
                      return;
                    }
                  }
                }
                that.timer = setTimeout(function() {
                  o.source(val, suggest);
                }, o.delay);
              }
            } else {
              that.last_val = val;
              that.sc.style.display = 'none';
            }
          }
        };
        addEvent(that, 'keyup', that.keyupHandler);

        that.focusHandler = function(e) {
          that.last_val = '\n';
          that.keyupHandler(e);
        };
        if (!o.minChars) addEvent(that, 'focus', that.focusHandler);
      }

      // public destroy method
      this.destroy = function() {
        for (var i = 0; i < elems.length; i++) {
          var that = elems[i];
          removeEvent(window, 'resize', that.updateSC);
          removeEvent(that, 'blur', that.blurHandler);
          removeEvent(that, 'focus', that.focusHandler);
          removeEvent(that, 'keydown', that.keydownHandler);
          removeEvent(that, 'keyup', that.keyupHandler);
          if (that.autocompleteAttr)
            that.setAttribute('autocomplete', that.autocompleteAttr);
          else that.removeAttribute('autocomplete');
          document.body.removeChild(that.sc);
          that = null;
        }
      };
    }
    return autoComplete;
  })();

  (function() {
    if (typeof define === 'function' && define.amd)
      define('autoComplete', function() {
        return autoComplete;
      });
    else if (typeof module !== 'undefined' && module.exports)
      module.exports = autoComplete;
    else window.autoComplete = autoComplete;
  })();

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
  var $ = convert.$;
  var FEHelper = {
    // Wait for jQuery
    doWhenJqueryLoaded: function(todoWhenLoaded) {
      var waitForjQuery = setInterval(function() {
        if (convert !== undefined && typeof convert.$ != 'undefined') {
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
    homeAirport: '',
    trackingCode: '',
  };
  var bmTrackingCode = '';
  var bm_email = '';
  var bmAirCode = '';
  var bmAirpotName;
  function BM_Sub_Gate() {
    $('body').addClass('abcore-736');
    var bmzipcod =
      '' +
      '  <div class="bmzipcod">' +
      '      <div class="bm-content">' +
      '          <h2> Thanks For Signing Up</h2>' +
      '          <p>Help us provide you the most relevant content <br> by sharing your home airport</p>' +
      '          <span class="fe_location"> Home Airport<input type="text" placeholder="" autocomplete="off" class="bm-zip"> </span>' +
      '          <a class="bm-addbtn"> Add Home Airport </a>' +
      '          <span class="bMthanks"> No Thanks </span>' +
      '      </div>' +
      '  </div>';

    $('#entry-gate-submit').on('click', function() {
      bm_email = $('#entry-gate-email').val();
      var thankYouInterval = setInterval(function() {
        bmTrackingCode = FEHelper.getCookie('u');
        if (bmTrackingCode != null) {
          $('body').addClass('bm-abcore736');
          $('body.bm-abcore736 .subscription-gate').addClass('show');
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
      if (zipCodeValidation(bmAirCode)) {
        dataString.emailAddress = bm_email;
        dataString.homeAirport = bmAirCode;
        dataString.trackingCode = bmTrackingCode;
        postAjax(
          'https://gosendbox.netlify.app/Brillmark/zipSubmit',
          JSON.stringify(dataString),
          function(data) {
            // console.log(data);
            $('#close-gate').click();
          }
        );
      }
    });
    bmAutoComlete();

    $('body').on('focusout', '.bmzipcod .bm-zip', function() {
      if (bmAirpotName != null || typeof bmAirpotName != 'undefined') {
        $(this).val(bmAirpotName);
      } else {
        $(this).val('');
      }
    });
    $('body').on('click', '.bmzipcod .bm-zip', function() {
      $(this).val('');
    });
    $('body').on('click', '.bMthanks', function() {
      $('#close-gate').click();
    });
  }
  function zipCodeValidation(AirCode) {
    if (AirCode.length == 3) {
      $('.zip-error').remove();
      return true;
    } else {
      $('.zip-error').remove();
      $('.bmzipcod .bm-addbtn').before(
        '<p class="zip-error">Please enter a valid airport code</p>'
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
  function bmAutoComlete() {
    var xhr;
    new autoComplete({
      selector: '.bm-zip',
      minChars: 3,
      source: function(term, response) {
        try {
          xhr.abort();
        } catch (e) {}
        xhr = $.getJSON(
          'https://gosendbox.netlify.app/en/suggest/type=10038/?query=' +
            term +
            '',
          {
            q: term,
          },
          function(data) {
            response(data);
          }
        );
      },
      renderItem: function(item, search) {
        return (
          '<li class="autocomplete-suggestion" data-airportcode="' +
          item.location.airportCode +
          '" data-item="' +
          JSON.stringify(item) +
          '" data-displayname="' +
          item.location.city.names.names['display-med'] +
          '">' +
          item.location.city.names.names['display-med'] +
          '</li>'
        );
      },
      onSelect: function(e, term, item) {
        bmAirCode = item.getAttribute('data-airportcode');
        bmAirpotName =
          item.getAttribute('data-displayname') + ' (' + bmAirCode + ')';
        $('.bm-zip').val(bmAirpotName);
        $('.bm-zip').attr('data-code', item.getAttribute('data-airportcode'));
      },
    });
  }
  FEHelper.doWhenJqueryLoaded(function() {
    FEHelper.onLoadElement('.sign-up-desc', BM_Sub_Gate, 50, 10000);
  });
})();
