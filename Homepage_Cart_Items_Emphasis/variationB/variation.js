/* CUSTOM CODE */
// Variation 0.1

var jQuery = window.jQuery;

var $dd_home_cart_v1_obj = function () {
  this.interval = [false, false, false, false];
  this.cookie = 'dd_home_cart_v1';
  this.cookieExpires = 7;
  this.cookieExpiresMax = 3650;
  this.cookieValue = {
    'active': 'true',
    'items': []
  };
  this.blades = {
    'blade1': 'dd-home-cart-v1-blade'
  };
  this.classes = {
    'innerBlade': 'dd-home-cart-v1-blade-inner',
    'hide': 'dd-hide',
    'loadComplete': 'dd-load-complete',
    'clearfix': 'dd-clearfix',
    'homeImg': 'dd-home-cart-v1-home-hero-img',
    'homeContent': 'dd-home-cart-v1-home-hero-content'
  };
  this.content = {
    'content1': ''
  };
  this.urls = [
    'as1.html',
    'as2.html',
    'as3.html',
    'as4.html',
    'as5.html'
  ];
  this.items = [
    {
      'id': 'as1',
      'label': 'AS1',
      'image': '//useruploads.visualwebsiteoptimizer.com/useruploads/95130/images/1f461ff8842697c6431d9d48b81f2b62_as1.png'
    },
    {
      'id': 'as2',
      'label': 'AS2',
      'image': '//useruploads.visualwebsiteoptimizer.com/useruploads/95130/images/a49e2360fefc881e031867338b5656ac_as2.png'
    },
    {
      'id': 'as3',
      'label': 'AS3',
      'image': '//useruploads.visualwebsiteoptimizer.com/useruploads/95130/images/2eff9193df8d054047a15c4df92f5f7d_as3.png'
    },
    {
      'id': 'as4',
      'label': 'AS4',
      'image': '//useruploads.visualwebsiteoptimizer.com/useruploads/95130/images/8b1bdd4d1b8f310860de935f61427870_as4.png'
    },
    {
      'id': 'as5',
      'label': 'AS5',
      'image': '//useruploads.visualwebsiteoptimizer.com/useruploads/95130/images/3bf0eb58d8aced3d2941770a2569f941_as5.png'
    }
  ];
  this.loadDefaultImage = function ($selector) {
    var $cookieData = this.checkSDACookies(this.cookie);

    $cookieData = JSON.parse($cookieData);

    if ($cookieData.items != undefined) {
      if ($cookieData.items.length > 0) {
        var id = $cookieData.items[0].split('.html')[0];

        for (var i = 0; i < this.items.length; i++) {
          if (this.items[i].id == id) {
            var img = document.createElement('img');
            img.src = this.items[i].image;
            img.style.cssText = 'opacity:0; visibility:hidden; display:none;';

            document.body.appendChild(img);

            break;
          }
        }
      }
    }
  };
  this.startProcess = function ($selector) {
    console.log('Starting Message.');
    // function class go here to manipulate the code.
    // example to insert a section after the selector
    // this.insertBladeAfter($selector, this.blades.blade1, this.classes.innerBlade)
    jQuery($selector + ' .home-header__images').hide();
    jQuery($selector + ' .home-header__content').hide();
    var $cookieData = this.checkSDACookies(this.cookie);
    console.log('cookie data: ' + $cookieData);
    if ($cookieData !== false) {
      var $data = JSON.parse($cookieData);
      var $id = 0;
      if ($data['items'].length > 0 && parseInt(jQuery('.header-cart-bubble').text()) > 0) {
        this.addClass($selector, this.blades.blade1);
        this.addClass('.' + this.blades.blade1 + ' > .home-header__images', this.classes.homeImg);
        this.addClass('.' + this.blades.blade1 + ' > .home-header__content', this.classes.homeContent);
        var $i = $data['items'].length - 1;
        for (var $c = 0; $c < this.items.length; $c++) {
          var $pos = $data['items'][$i].search(this.items[$c]['id']);
          if ($pos !== -1) {
            $id = $c;
            break;
          }
        }
        this.updateHeroUnit($id);
      }
      jQuery($selector + ' .home-header__images').show();
      jQuery($selector + ' .home-header__content').show();
    }else {
      console.log('cookie not found...');
      jQuery($selector + ' .home-header__images').show();
      jQuery($selector + ' .home-header__content').show();
    }
    console.log('Done Message.');
  };
  this.insertBladeBefore = function ($selector, $blade, $class) {
    jQuery('<div class="' + $blade + '"><div class="' + $class + '"></div></div>').insertBefore($selector);
  };
  this.insertBladeAfter = function ($selector, $blade, $class) {
    jQuery('<div class="' + $blade + '"><div class="' + $class + '"></div></div>').insertAfter($selector);
  };
  this.insertHTMLBefore = function ($selector, $html) {
    jQuery($html).insertBefore($selector);
  };
  this.insertHTMLAfter = function ($selector, $html) {
    jQuery($html).insertAfter($selector);
  };
  this.addContent = function ($selector, $content) {
    jQuery($selector).append($content);
  };
  this.addClass = function ($selector, $class) {
    jQuery($selector).addClass($class);
  };
  this.updateElementHTML = function ($selector, $newContent) {
    jQuery($selector).html($newContent);
  };
  this.updateTagAttr = function ($selector, $attr, $newValue) {
    jQuery($selector).attr($attr, $newValue);
  };
  this.hideElement = function ($selector, $offset) {
    for (var $c = 0; $c < $selector.length; $c++) {
      if ($c !== ($offset - 1)) {
        jQuery($selector + ':eq(' + $c + ')').css({ 'display': 'none' });
      }
    }
  };
  this.start = function ($selector) {
    var $o = this;
    $o.interval[0] = setInterval(function () {
      if (jQuery($selector).length > 0 && jQuery('.' + $o.blades.blade1).length < 1) {
        clearInterval($o.interval[0]);
        $o.startProcess($selector);
      }
    }, 5);
  };
  this.addCustomTracking = function ($selector, $event, $goal_id, $experiment_id) {
    jQuery($selector).bind($event, function () { window._vis_opt_queue.push(function () { _vis_opt_register_conversion($goal_id, $experiment_id); }); });
  };
  this.pushCustomTracking = function ($goal_id, $experiment_id) {
    window._vis_opt_queue.push(function () { _vis_opt_register_conversion($goal_id, $experiment_id); });
    console.log('push tracking ' + $goal_id + ',' + $experiment_id);
  };
  this.loadExternalContent = function ($url, $selector) {
    var $o = this;
    jQuery($selector).load($url, function (response, status, xhr) {
      console.log('Status: ' + status);
      if (status === 'success') {
        jQuery($selector).addClass($o.classes.loadComplete);
      }
    });
  };
  this.waiting4ExternalContent = function ($selector, $opt) {
    $opt = $opt || {
      'action': function () {
        console.log('testing opt variable');
      }
    };
    var $tempInterval = false;
    $tempInterval = setInterval(function () {
      if (jQuery($selector).length > 0) {
        clearInterval($tempInterval);
        $opt.action();
      }
    }, 1);
  };
  this.updateHeroUnit = function ($index) {
    var $o = this;
    this.updateTagAttr('.' + this.classes.homeImg + ' img', 'src', this.items[$index]['image']);
    this.updateElementHTML('.' + this.classes.homeContent + ' .main-home-title', 'WELCOME BACK');
    this.updateElementHTML('.' + this.classes.homeContent + ' .main-home-subtitle', 'Try our ' + this.items[$index]['label'] + ' mattress risk-free for 100 nights.');
    this.updateElementHTML('.' + this.classes.homeContent + ' .button-large', 'COMPLETE YOUR PURCHASE');
    this.updateTagAttr('.' + this.classes.homeContent + ' .button-large', 'href', 'https://www.amerisleep.com/checkout/cart');
    
    jQuery('.' + $o.classes.homeImg).css({ 'background-image': 'url('+this.items[$index]['image']+')' });
    jQuery('.' + $o.classes.homeContent).css({'visibility': 'visible'});
    jQuery('.' + $o.classes.homeImg).css({ 'visibility': 'visible' });


  };
  this.setSDACookies = function (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + '; ' + expires + '; path=/';
  };
  this.checkSDACookies = function (cname) {
    var cookiesOK = this.getSDACookies(cname);
    if (cookiesOK !== '') {
      return cookiesOK;
    }else {
      return false;
    }
  };
  this.getSDACookies = function (cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };
  this.checkPageURL = function () {
    var $return = false;
    var $path = window.location.pathname;
    var $page = $path.substr(1);
    var $cookieData = this.checkSDACookies(this.cookie);
    console.log('check page url cookie data: ' + $cookieData);
    for (var $c = 0; $c < this.urls.length; $c++) {
      if ($page === this.urls[$c]) {
        this.addClick('.add-to-cart-btn', $c);
        $return = true;
        break;
      }
    }
    if ($path === '/checkout/cart') {
      console.log('looking for remove links...');
      this.addRemoveItemClicks();
      $return = true;
    }
    this.popupListener();
    if (!$return) {
      $dd_home_cart_v1.start('.home-header');
    }
  };
  this.addClick = function ($selector, $index) {
    var $o = this;
    $o.interval[1] = setInterval(function () {
      if (jQuery($selector).length > 0) {
        clearInterval($o.interval[1]);
        $o.addClickProcess($selector, $index);
      }
    }, 5);
  };
  this.addClickProcess = function ($selector, $index) {
    var $o = this;
    jQuery($selector).bind('click', function () {
      var $cookieData = $o.checkSDACookies($o.cookie);
      var $data;
      if ($cookieData !== false) {
        $data = JSON.parse($cookieData);
      }else {
        $data = $o.cookieValue;
      }
      $data['items'].push($o.urls[$index]);
      console.log($index + ' data: ' + JSON.stringify($data));
      $o.setSDACookies($o.cookie, JSON.stringify($data), 30);
      $o.popupListener();
    });
  };
  this.addRemoveItemClicks = function () {
    var $o = this;
    this.addClass('.cart-table-body', 'dd-add-clicks');
    jQuery('.dd-add-clicks .cart-table-row').each(function ($i) {
      var $item = jQuery('.dd-add-clicks .cart-table-row:eq(' + $i + ') .cart-item-desc.cart-table-data > a').text().toLowerCase();
      for (var $c = 0; $c < $o.items.length; $c++) {
        var $pos = $item.search($o.items[$c]['id']);
        if ($pos !== -1) {
          jQuery('.dd-add-clicks .cart-table-row:eq(' + $i + ') .cart-item-price-info .remove').bind('click', function () {
            var $cookieData = $o.checkSDACookies($o.cookie);
            if ($cookieData !== false) {
              var $data = JSON.parse($cookieData);
              if ($data['items'].length > 0) {
                var $l = $data['items'].length - 1;
                for (var $c1 = $l; $c1 > -1; $c1--) {
                  var $pos1 = $data['items'][$c1].search($item);
                  if ($pos1 !== -1) {
                    console.log($c1 + ' removing item...' + $data['items'][$c1]);
                    $data['items'].splice($c1, 1);
                  }
                }
                $o.setSDACookies($o.cookie, JSON.stringify($data), 30);
              }
            }
            var $cd = $o.checkSDACookies($o.cookie);
            console.log('cookie data after removal: ' + $cd);
            $o.waiting4AJAX();
          });
          break;
        }
      }
    });
  };
  this.waiting4AJAX = function () {
    var $o = this;
    $o.interval[3] = setInterval(function () {
      if (jQuery('.dd-add-clicks').length < 1 && jQuery('.cart-content > .cart-content').length > 0) {
        clearInterval($o.interval[3]);
        $o.addRemoveItemClicks();
      }
    }, 5);
  };

  this.popupListener = function () {
    var $o = this;
    $o.interval[2] = setInterval(function () {
      if (jQuery('#js-cart-popup').hasClass('active') && jQuery('#js-cart-popup.active .cart-table-row').length > 0) {
        clearInterval($o.interval[2]);
        $o.addClass('.cart-table-body', 'dd-add-clicks');
        $o.addPopupRemoveItemClicks();
      }
    }, 5);
  };
  this.addPopupRemoveItemClicks = function () {
    var $o = this;
    jQuery('#js-cart-popup .cart-table-row').each(function ($i) {
      var $item = jQuery('#js-cart-popup .cart-table-row:eq(' + $i + ') .cart-item-desc.cart-table-data > a').text().toLowerCase();
      for (var $c = 0; $c < $o.items.length; $c++) {
        jQuery('#js-cart-popup .cart-table-row:eq(' + $i + ') .cart-item-desc.cart-table-data > a').addClass('dd-remove-link');
        var $pos = $item.search($o.items[$c]['id']);
        if ($pos !== -1) {
          jQuery('#js-cart-popup .cart-table-row:eq(' + $i + ') .quantity .remove').bind('click', function () {
            var $cookieData = $o.checkSDACookies($o.cookie);
            if ($cookieData !== false) {
              var $data = JSON.parse($cookieData);
              if ($data['items'].length > 0) {
                var $l = $data['items'].length - 1;
                for (var $c1 = $l; $c1 > -1; $c1--) {
                  var $pos1 = $data['items'][$c1].search($item);
                  if ($pos1 !== -1) {
                    console.log($c1 + ' removing item...' + $data['items'][$c1]);
                    $data['items'].splice($c1, 1);
                  }
                }
                $o.setSDACookies($o.cookie, JSON.stringify($data), 30);
              }
              var $cd = $o.checkSDACookies($o.cookie);
              console.log('cookie data after removal: ' + $cd);
              $o.waiting4AJAXPopup();
            }
          });
          break;
        }
      }
    });
  };
  this.waiting4AJAXPopup = function () {
    var $o = this;
    $o.interval[3] = setInterval(function () {
      if (jQuery('.dd-add-clicks').length < 1 && jQuery('.cart-content.shopping_cart > .cart-content').length > 0) {
        console.log('found');
        clearInterval($o.interval[3]);
        var $cd = $o.checkSDACookies($o.cookie);
        console.log('cookie data after popup: ' + $cd);
        $o.popupListener();
      }
    }, 5);
  };
};
var $dd_home_cart_v1_hide_elem_obj = function () {
  this.interval = [false, false, false];
  this.start = function ($selector, $index) {
    var $index = $index || 0;
    var $o = this;
    $o.interval[$index] = setInterval(function () {
      if (jQuery($selector).length > 0) {
        clearInterval($o.interval[$index]);
        jQuery($selector).hide();
      }
    }, 5);
  };
};

var waitFoJquery = setInterval(function () {
  if (typeof window.jQuery != 'undefined') {
    clearInterval(waitFoJquery);

    jQuery = window.jQuery;

    // Makes sure that the entery point exists in the HTML DOM before adding the experiment codes
    console.log('Experiment: Homepage: Cart Items Emphasis');
    console.log('Variation B: Homepage Cart Items');
    console.log('Version 1.0.42');
    window._vis_opt_queue = window._vis_opt_queue || [];
    // New JavaScript object
    $dd_home_cart_v1 = new $dd_home_cart_v1_obj();
    $dd_home_cart_v1_hidder = new $dd_home_cart_v1_hide_elem_obj();
    // Starting the experiment by passing the class (or id) selector to the start function
    $dd_home_cart_v1_hidder.start('.home-header .home-header__images', 0);
    $dd_home_cart_v1_hidder.start('.home-header .home-header__content', 1);
    $dd_home_cart_v1.checkPageURL();
  }
}, 30);

// laod default image
var dd_home_cart_v1_imageLoader = new $dd_home_cart_v1_obj();
dd_home_cart_v1_imageLoader.loadDefaultImage();
