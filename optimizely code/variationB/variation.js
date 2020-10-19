(function () {
  var comparisontable = '' +
    ' <div class="fe_price_table_inner">' +
    '  <div class="comparison">' +
    '      <table>' +
   
	'          <thead>'+
    '              <tr class="fePriceHead ">' +
    '                  <td>storage</td>' +
    '                  <td>100gb</td>' +
    '                  <td>unlimited </td>' +
    '                  <td>unlimited </td>' +
    '                  <td>unlimited </td>' +
    '              </tr>' +
	'          </thead>'+
    '              <tr class="compare-row">' +
    '                  <td>storage</td>' +
    '                  <td>100gb</td>' +
    '                  <td>unlimited </td>' +
    '                  <td>unlimited </td>' +
    '                  <td>unlimited </td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>granular access & controls</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>Data Loss Prevention</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>Advanced Admin & Controls </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>HIPAA/HITECH-eliglible, FedRAMP</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="fe_dash"> -  <span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>file upload</td>' +
    '                  <td>2gb</td>' +
    '                  <td>5gb</td>' +
    '                  <td>5gb</td>' +
    '                  <td>5gb</td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>minimum users </td>' +
    '                  <td>3</td>' +
    '                  <td>3</td>' +
    '                  <td>3</td>' +
    '                  <td>3</td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>maximun User</td>' +
    '                  <td>10</td>' +
    '                  <td>unlimited </td>' +
    '                  <td>unlimited </td>' +
    '                  <td>unlimited </td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>desktop access</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>mobile access</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>version history</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>ssl & at-rest encryption</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>two-factor authentication</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>standard business support</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>user management</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>advanced user & security resporting</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>active direcctory & ssl (single sign-on ) integration</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>custom branding</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>mobile security controls</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>integration with emm providers</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>unlimited external collaborators</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>full content visibility & management</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>full user activity tracking</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>admin role delegation</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>metadata & custom templates</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>custom terms of service</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>PCI DSS</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>optional: box governance, box keysafe, boxzones</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span>  </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>unlimited external collaborators</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>full content visiblility & management</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>unlimited integrations, including dlp & ediscovery</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>user groups</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>workflow automation</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>device trust (advanced mobile requirements )</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>password policy enforcement</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>document watermarking</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>api calls per month</td>' +
    '                  <td>25,000</td>' +
    '                  <td>500,00</td>' +
    '                  <td>500,00</td>' +
    '                  <td>100,000</td>' +
    '              </tr>' +
    
    '      </table>' +
    '   </div>' +
    '   <div class="fe_hide_show"> <a href="#"> <span class="fe_show">Show features</span> <span class="fe_hide">Hide features</span></a>  </div>' +
    '  </div>';

  // Retrieve the utils library

  var utils = window['optimizely'].get('utils');

  
  
  // We have infinite scroll enabled on the site. Wait until more than 200 products have been shown
  // to prompt the user to try out our filter by color feature
  utils.waitUntil(function () {
    return document.querySelectorAll('#pricing-tab-2 .pricing-package-column-wrapper').length && window.jQuery;
  }).then(function () {
    var $ = window.jQuery;
  (function($) {
   $.fn.fixMe = function() {
      return this.each(function() {
         var $this = $(this),
            $t_fixed;
         function init() {
            
            $t_fixed = $this.clone();
            $t_fixed.find("tbody").remove().end().addClass("fixed").insertBefore($this);
			
            resizeFixed();
         }
         function resizeFixed() {
            $t_fixed.find("th").each(function(index) {
               $(this).css("width",$this.find("th").eq(index).outerWidth()+"px");
            });
         }
         function scrollFixed() {
            var offset = $(this).scrollTop(),
            tableOffsetTop = $this.offset().top,
            tableOffsetBottom = tableOffsetTop + $this.height() - $this.find("thead").height();
            if(offset < tableOffsetTop || offset > tableOffsetBottom)
               $t_fixed.hide();
            else if(offset >= tableOffsetTop && offset <= tableOffsetBottom && $t_fixed.is(":hidden"))
               $t_fixed.show();
         }
         $(window).resize(resizeFixed);
         $(window).scroll(scrollFixed);
         init();
      });
   };
})(jQuery);
$(document).ready(function(){
   $("table").fixMe();
   $(".up").click(function() {
      $('html, body').animate({
      scrollTop: 0
   }, 2000);
 });
});

    $('#pricing-tab-2 .pricing-package-column-wrapper').after('<div class="container fe_price_table">' + comparisontable + '</div>');
    $('.fe_price_table').after('<div id="reactapp"></div>');
    
    $('a.btn-primary.full-width').parent('.cta-in-row').addClass('fe_add_bottom');    
  
  appendTopheader($);

  
  $('.pricing-package-column-wrapper').prepend('<div class="fe_blank">&nbsp;</div>');

    $(window).resize(function () {
      $('.fe_price_table_inner').remove();
      $('.container.fe_price_table').html(comparisontable);
    appendTopheader($);
    });

    $('body').delegate('.fe_hide_show', 'click' , function (e) {
      e.preventDefault();
      $('.fe_price_table').toggleClass('feExpendable');

      if (!$('.fe_price_table').hasClass('feExpendable')) {
        $('html, body').animate({
          scrollTop: $('.pricing-tabs').offset().top - 100
        }, 500);
      }
    });
  });
})();


function appendTopheader($){
  
  $('.fePriceHead td').html('');
  
  $('#pricing-tab-2 .pricing-package[data-order="0"]').clone(true).appendTo($('.fe_price_table .fePriceHead td:nth-child(2)'));
  $('#pricing-tab-2 .pricing-package[data-order="1"]').clone(true).appendTo($('.fe_price_table .fePriceHead td:nth-child(3)'));
  $('#pricing-tab-2 .pricing-package[data-order="2"]').clone(true).appendTo($('.fe_price_table .fePriceHead td:nth-child(4)'));
  $('#pricing-tab-2 .pricing-package[data-order="3"]').clone(true).appendTo($('.fe_price_table .fePriceHead td:nth-child(5)'));
  
}

// Primary Navigation

var utils = window.optimizely.get('utils');

utils.waitForElement('body').then(function () {
  console.log('Visibility tool loaded.');

  // Load Feature visibility js.
  'use strict';function _toConsumableArray (e) {if (Array.isArray(e)) { for (var t = 0,i = Array(e.length);t < e.length;t++)i[t] = e[t];return i;}return Array.from(e);}var e = {mobileBp: !0,mobileOnly: 'screen and (max-width: 63.9375em)',expanded: !1,priceTabId: document.getElementById('pricing-tab-2'),pricingWrapper: null,buttonElement: null,topNavHeight: 70,featuresShrinkedSize: null,featuresFullSize: null,init: function () {this.priceTabId && (this.pricingWrapper = this.priceTabId.getElementsByClassName('pricing-package-column-wrapper')[0], this.pricingWrapper && (this.featureHeadings = e.pricingWrapper.getElementsByClassName('pricing-package-features-head'), this.pricingPlans = e.pricingWrapper.getElementsByClassName('pricing-package-article'), (this.featureHeadings.length || this.pricingPlans.length) && (this.checkResponsiveBreakpoint(), window.matchMedia(e.mobileOnly).addListener(e.destroy), this.mobileBp || (this.createControls(), this.render()))));},getMaxHeight: function (e) {var t = [].slice.call(e).map(function (e) {return e.offsetHeight;});
      return Math.max.apply(Math, _toConsumableArray(t));},setWrapperHeight: function () {window.requestAnimationFrame(function () {e.featuresShrinkedSize = 60 + e.getMaxHeight(e.featureHeadings) + e.getMaxHeight(e.pricingPlans) + 'px', e.featuresFullSize = e.pricingWrapper.scrollHeight + 'px', e.pricingWrapper.style.height = e.featuresShrinkedSize;});},checkResponsiveBreakpoint: function () {return window.matchMedia(e.mobileOnly).matches ? e.mobileBp = !0 : e.mobileBp = !1;},createControls: function () {null === this.buttonElement && (this.buttonElement = document.createElement('button'), this.buttonElement.classList.add('pricing-feature-button'), this.buttonElement.dataset.title = 'Show features', this.pricingWrapper.parentNode.insertBefore(this.buttonElement, this.pricingWrapper.nextSibling));},showFeatures: function () {
      !1 === this.expanded ? (this.expanded = !0, e.pricingWrapper.classList.remove('pricing-package-column-wrapper--expanded'), this.dataset.title = 'Show features', this.classList.remove('pricing-feature-button--expanded'), e.pricingWrapper.style.height = e.featuresFullSize, window.requestAnimationFrame(function () {e.pricingWrapper.classList.add('animated'), e.pricingWrapper.style.height = e.featuresShrinkedSize, e.pricingWrapper.addEventListener('transitionend', function handler () {e.pricingWrapper.classList.remove('animated'), this.removeEventListener('transitionend', handler);});}), window.scrollTo({behavior: 'smooth',left: 0,top: 0})) : (this.expanded = !1, e.pricingWrapper.classList.add('pricing-package-column-wrapper--expanded'), this.dataset.title = 'Hide features', this.classList.add('pricing-feature-button--expanded'), window.requestAnimationFrame(function () {e.pricingWrapper.style.height = e.featuresFullSize, e.pricingWrapper.classList.add('animated'), e.pricingWrapper.addEventListener('transitionend', function handler () {e.pricingWrapper.classList.remove('animated'), e.pricingWrapper.style.height = 'auto', this.removeEventListener('transitionend', handler);});}), window.scroll({behavior: 'smooth',left: 0,top: e.pricingWrapper.querySelector('.pricing-package-features').getBoundingClientRect().top + window.scrollY - e.topNavHeight}));},destroy: function (t) {
    t.matches ? (window.removeEventListener('resize', e.setWrapperHeight, !1), e.pricingWrapper.style.height = '', e.buttonElement.style.display = 'none', e.expanded = !1, e.pricingWrapper.classList.remove('pricing-package-column-wrapper--expanded'), e.buttonElement.classList.remove('pricing-feature-button--expanded'), e.buttonElement.removeEventListener('click', e.showFeatures, !1)) : (e.buttonElement ? (e.buttonElement.style.display = '', e.buttonElement.dataset.title = 'Show features') : e.createControls(), e.render());},render: function () {window.onresize = this.checkResponsiveBreakpoint(), !0 === this.expanded && this.pricingWrapper.classList.add('pricing--wrapper-expanded'), e.setWrapperHeight(), window.addEventListener('resize', e.setWrapperHeight, !1), this.buttonElement && this.buttonElement.addEventListener('click', e.showFeatures, !1);}};
  e.init();
  
  
  
});

/*
 * Usage
 *    This function will append an external JavaScript to the head of the document.
 *
 *  @param {String} location - The location of the file you'd like to load.
 *  @param {Function} callback - [OPTIONAL] A function to call when the script has completed downloading.
 *
 */

var loadScript = function (location, callback) {
  var fileRef = document.createElement('script');
  fileRef.setAttribute('type', 'text/javascript');

  if (callback) {
    if (fileRef.readyState) { // IE
      fileRef.onreadystatechange = function () {
        if (fileRef.readyState == 'loaded' || fileRef.readyState == 'complete') {
          fileRef.onreadystatechange = null;
          callback();
        }
      };
    } else { // Non-IE
      fileRef.onload = function () {
        callback();
      };
    }
  }

  fileRef.setAttribute('src', location);
  document.head.appendChild(fileRef);
};

utils.waitForElement('#reactapp').then(function () {
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js', function () {
    console.log('React loaded'); // CALLBACK - code that does something with the data returned by loading the script

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js', function () {
      console.log('reactDOM loaded'); // CALLBACK - code that does something with the data returned by loading the script

      // Load Rec tool.
      'use strict';var e = function () {function defineProperties (e, a) { for (var n = 0;n < a.length;n++) {var t = a[n];
            t.enumerable = t.enumerable || !1, t.configurable = !0, 'value' in t && (t.writable = !0), Object.defineProperty(e, t.key, t);}}return function (e, a, n) {return a && defineProperties(e.prototype, a), n && defineProperties(e, n), e;};}();
      function _defineProperty (e, a, n) {return a in e ? Object.defineProperty(e, a, {value: n,enumerable: !0,configurable: !0,writable: !0}) : e[a] = n, e;}function _classCallCheck (e, a) {if (!(e instanceof a))throw new TypeError('Cannot call a class as a function');}function _possibleConstructorReturn (e, a) {if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !a || 'object' != typeof a && 'function' != typeof a ? e : a;}function _inherits (e, a) {if ('function' != typeof a && null !== a)throw new TypeError('Super expression must either be null or a function, not ' + typeof a);e.prototype = Object.create(a && a.prototype, {constructor: {value: e,enumerable: !1,writable: !0,configurable: !0}}), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a);}var a = function (a) {function Loader () {return _classCallCheck(this, Loader), _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));}return _inherits(Loader, React.Component), e(Loader, [{key: 'render',value: function () {return React.createElement('div', {className: 'recommendation-tool--frame'}, React.createElement('div', {className: 'recommendation-tool--loading'}));}}]), Loader;}(),n = function (a) {function ImagePlaceholder () {return _classCallCheck(this, ImagePlaceholder), _possibleConstructorReturn(this, (ImagePlaceholder.__proto__ || Object.getPrototypeOf(ImagePlaceholder)).apply(this, arguments));}return _inherits(ImagePlaceholder, React.Component), e(ImagePlaceholder, [{key: 'render',value: function () {return React.createElement('div', {className: 'recommendation-tool--placeholder'}, React.createElement('picture', null, React.createElement('source', {srcSet: '//cdn03.boxcdn.net/sites/default/files/opt_test/recommendation_tool/Piggybank.jpg, //cdn03.boxcdn.net/sites/default/files/opt_test/recommendation_tool/Piggybank%402x.jpg 2x',media: '(min-width: 0)'}), React.createElement('img', {src: '//cdn03.boxcdn.net/sites/default/files/opt_test/recommendation_tool/Piggybank.jpg',alt: 'Pre-Event'})));}}]), ImagePlaceholder;}(),t = function (a) {function PricingPlan () {return _classCallCheck(this, PricingPlan), _possibleConstructorReturn(this, (PricingPlan.__proto__ || Object.getPrototypeOf(PricingPlan)).apply(this, arguments));}return _inherits(PricingPlan, React.Component), e(PricingPlan, [{key: 'assemble',value: function (e) {return new Function('industry', 'country_size', 'country_location', 'return `' + e + '`;');}}, {key: 'render',value: function () {var e = this.props.pricingPlan,a = this.props.formState.industryName,n = this.props.formState.company_locationName,t = this.props.formState.company_sizeName,i = this.assemble(e.shortDescription),o = this.assemble(e.body),r = null,s = null;
              return null !== e.multiCountryContent && (e.multiCountryContent.yes && (r = this.assemble(e.multiCountryContent.yes)), e.multiCountryContent.no && (s = this.assemble(e.multiCountryContent.no))), React.createElement('div', {className: 'recommendation-tool--plan recommendation-tool--frame','data-pricing-id': e.id}, React.createElement('article', {className: 'recommendation-tool--article'}, e.name.length > 0 && React.createElement('h3', null, e.name), e.shortDescription.length > 0 && React.createElement('div', {className: 'recommendation-tool--description',dangerouslySetInnerHTML: {__html: i(a, t, n)}}), 'number' == typeof e.price && React.createElement('div', {className: 'recommendation-tool--price'}, React.createElement('span', null, e.priceCurrency, React.createElement('b', null, e.price)), e.priceDescription.length > 0 && React.createElement('ins', null, e.priceDescription)), 'string' == typeof e.price && React.createElement('div', {className: 'recommendation-tool--price'}, React.createElement('i', null, e.price)), React.createElement('div', {className: 'recommendation-tool--article-content'}, e.body.length > 0 && React.createElement('span', {dangerouslySetInnerHTML: {__html: o(a, t, n)}}), null !== r && !0 === this.props.formState.multi_country && React.createElement('span', {dangerouslySetInnerHTML: {__html: r(a, t, n)}}), null !== s && !1 === this.props.formState.multi_country && React.createElement('span', {dangerouslySetInnerHTML: {__html: s(a, t, n)}})), e.cta.length > 0 && React.createElement('div', {className: 'cta-in-row2 recommendation-tool--pricing-package'}, this.constructor.ctaRender(e.cta))));}}], [{key: 'ctaRender',value: function (e) {return e.map(function (a) {return React.createElement('a', {className: a.ctaType + (e.length < 2 ? ' full-width' : ''),href: a.link}, a.text);});}}]), PricingPlan;}();
      function SubmitDefault () {return React.createElement('button', {className: 'btn-green-primary recommendation-tool--controls__submit'}, 'Get My Recommendation');}function SubmitReset () {return React.createElement('button', {className: 'btn-green-secondary recommendation-tool--controls__submit'}, 'Reset input');}function SubmitLoading () {return React.createElement('button', {className: 'btn-green-primary recommendation-tool--controls__submit recommendation-tool--controls__submit-loading'}, 'Loading...', React.createElement('div', {className: 'recommendation-tool--loading'}));}var i = function (a) {function Submit () {return _classCallCheck(this, Submit), _possibleConstructorReturn(this, (Submit.__proto__ || Object.getPrototypeOf(Submit)).apply(this, arguments));}return _inherits(Submit, React.Component), e(Submit, [{key: 'render',value: function () {var e = this.props.submitState;
              return 'default' === e ? React.createElement(SubmitDefault, null) : 'loading' === e ? React.createElement(SubmitLoading, null) : React.createElement(SubmitReset, null);}}]), Submit;}(),o = function (i) {function Result (e) {return _classCallCheck(this, Result), _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, e));}return _inherits(Result, React.Component), e(Result, [{key: 'render',value: function () {return 'none' === this.props.resultState ? React.createElement('div', {className: 'recommendation-tool--result'}, React.createElement(n, null)) : 'waiting' === this.props.resultState ? React.createElement('div', {className: 'recommendation-tool--result'}, React.createElement(a, null)) : React.createElement('div', {className: 'recommendation-tool--result'}, React.createElement(t, {pricingPlan: this.props.resultState,formState: this.props.formState}));}}]), Result;}(),r = function (a) {function Form (e) {_classCallCheck(this, Form);var a = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, e));
            return a.props.toolData = {pricingPlan: [{id: 0,name: 'Business',shortDescription: '<p>Sync and share files with unlimited storage</p>',price: 15,priceCurrency: '$',priceDescription: 'per user/month',body: "<ul><li>Since you have selected ${industry} the Box Business plan offers Unlimited Storage to ensure that as your business grows you will never run out of storage space.</li><li>Box Business is the most popular plan for businesses with your company size.</li><li>You're based in ${country_location} and don't need multi-country collaboration so the Box Business plan will offer you the best versatility for your needs.</li></ul>",multiCountryContent: null,cta: [{order: 0,ctaType: 'btn-green-secondary',text: 'Try It',link: 'https://account.box.com/signup/n/business?tc=recengBtool'}, {order: 1,ctaType: 'btn-green-primary',text: 'Buy It',link: 'https://account.box.com/signup/n/business/buynow?tc=recengBtool'}],planProperties: {industry: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],companySize: [1],companyLocation: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238],multiCountryColab: !1}}, {id: 1,name: 'Business Plus',shortDescription: '<p>Ability to add Governance and Box Zones to ensure data and security compliance.</p>',price: 25,priceCurrency: '$',priceDescription: 'per user/month',body: '<ul><li>Since you have selected ${industry} the Box Business Plus plan allows you to add <a href="https://www.box.com/security/governance-and-compliance" data-tooltip="Amplify the collaboration, security and content management capabilities Box provides by leveraging Box Governance. Get enhanced protection for sensitive content, enable defensible discovery for litigation, and easily set up retention and disposition schedules for files in Box">Box&nbsp;Governance</a> as an additional feature which ensures compliance with data retention regulations.</li><li>Box Business Plus is the most popular plan for businesses with your company size.</li></ul>',multiCountryContent: {yes: '<ul><li>You\'re based in ${country_location} and require multi-country collaboration, Box Business plus allows you to add <a href="https://www.box.com/zones" data-tooltip="Box Zones provides in-region data storage with Box, raising the bar for privacy and control in the cloud. Organizations can now keep their data close by — whether they\'re in Europe, Asia, Canada or Australia.">Box&nbsp;Zones</a> which satisfies international data residency requirements.</li></ul>',no: '<ul><li>Since you\'re based in ${country_location} the Box Business plus allows you to add <a href="https://www.box.com/zones" data-tooltip="Box Zones provides in-region data storage with Box, raising the bar for privacy and control in the cloud. Organizations can now keep their data close by — whether they\'re in Europe, Asia, Canada or Australia.">Box&nbsp;Zones</a> which satisfies international data residency requirements.</li></ul>'},cta: [{order: 0,ctaType: 'btn-secondary',text: 'Try It',link: 'https://account.box.com/signup/n/businessplus?tc=recengBtool'}, {order: 1,ctaType: 'btn-primary',text: 'Buy It',link: 'https://account.box.com/signup/n/businessplus/buynow?tc=recengBtool'}],planProperties: {industry: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],companySize: [1, 2],companyLocation: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238],multiCountryColab: null}}, {id: 2,name: 'Enterprise',shortDescription: '<p>Powerful and unique to your business needs.</p>',price: null,priceCurrency: null,priceDescription: null,body: '<ul><li>Based on your selection of ${industry} and company size, we would recommend our highly customizable Enterprise plan.</li><li>The Enterprise plan includes:<ul><li>HIPAA/HITECH-eligible, FedRAMP compliance</li><li>Ability to automate different workflows</li><li>Unlimited external collaborators</li><li>Data Loss Prevention</li></ul></li><li>Please fill out the following form and a member of our Enterprise Sales team will be in contact with you shortly.</li></ul>',multiCountryContent: null,cta: [{order: 0,ctaType: 'btn-primary',text: 'Contact Us',link: 'https://www.box.com/quote'}],planProperties: {industry: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],companySize: [3, 4, 5],companyLocation: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238],multiCountryColab: !1}}],industry: [{id: 0,name: 'Please select'}, {id: 1,name: 'Public Sector'}, {id: 2,name: 'Financial Services'}, {id: 3,name: 'Healthcare & Life Sciences'}, {id: 4,name: 'Energy'}, {id: 5,name: 'Transportation & Logistics'}, {id: 6,name: 'Industrial Goods & Automotive'}, {id: 7,name: 'Education'}, {id: 8,name: 'Nonprofit Organizations'}, {id: 9,name: 'Technology'}, {id: 10,name: 'Media & Entertainment'}, {id: 11,name: 'Hospitality'}, {id: 12,name: 'Professional Services'}, {id: 13,name: 'Retail & Consumer Goods'}, {id: 14,name: 'Architecture, Engineering, & Construction'}, {id: 15,name: 'Marketing & Advertising'}, {id: 16,name: 'Nonprofit Organization'}],companySize: [{id: 0,name: 'Please select'}, {id: 1,name: '0 - 75 employees'}, {id: 2,name: '76 - 500 employees'}, {id: 3,name: '501 - 2,000 employees'}, {id: 4,name: '2,001 - 10,000 employees'}, {id: 5,name: '10,000+ employees'}],companyCounty: [{id: 0,name: 'Please select'}, {id: 1,name: 'United States'}, {id: 2,name: 'Afghanistan'}, {id: 3,name: 'Albania'}, {id: 4,name: 'Algeria'}, {id: 5,name: 'American Samoa'}, {id: 6,name: 'Andorra'}, {id: 7,name: 'Angola'}, {id: 8,name: 'Anguilla'}, {id: 9,name: 'Antarctica'}, {id: 10,name: 'Antigua and Barbuda'}, {id: 11,name: 'Argentina'}, {id: 12,name: 'Armenia'}, {id: 13,name: 'Aruba'}, {id: 14,name: 'Australia'}, {id: 15,name: 'Austria'}, {id: 16,name: 'Azerbaijan'}, {id: 17,name: 'Bahamas'}, {id: 18,name: 'Bahrain'}, {id: 19,name: 'Bangladesh'}, {id: 20,name: 'Barbados'}, {id: 21,name: 'Belarus'}, {id: 22,name: 'Belgium'}, {id: 23,name: 'Belize'}, {id: 24,name: 'Benin'}, {id: 25,name: 'Bermuda'}, {id: 26,name: 'Bhutan'}, {id: 27,name: 'Bolivia'}, {id: 28,name: 'Bosnia and Herzegovina'}, {id: 29,name: 'Botswana'}, {id: 30,name: 'Bouvet Island'}, {id: 31,name: 'Brazil'}, {id: 32,name: 'British Indian Ocean Territory'}, {id: 33,name: 'British Virgin Islands'}, {id: 34,name: 'Brunei'}, {id: 35,name: 'Bulgaria'}, {id: 36,name: 'Burkina Faso'}, {id: 37,name: 'Burundi'}, {id: 38,name: 'Cambodia'}, {id: 39,name: 'Cameroon'}, {id: 40,name: 'Canada'}, {id: 41,name: 'Cape Verde'}, {id: 42,name: 'Cayman Islands'}, {id: 43,name: 'Central African Republic'}, {id: 44,name: 'Chad'}, {id: 45,name: 'Chile'}, {id: 46,name: 'China'}, {id: 47,name: 'Christmas Island'}, {id: 48,name: 'Cocos (Keeling) Islands'}, {id: 49,name: 'Colombia'}, {id: 50,name: 'Comoros'}, {id: 51,name: 'Congo'}, {id: 52,name: 'Cook Islands'}, {id: 53,name: 'Costa Rica'}, {id: 54,name: 'Croatia'}, {id: 55,name: 'Cuba'}, {id: 56,name: 'Cyprus'}, {id: 57,name: 'Czech Republic'}, {id: 58,name: "Côte d'Ivoire"}, {id: 59,name: 'Democratic Republic of the Congo'}, {id: 60,name: 'Denmark'}, {id: 61,name: 'Djibouti'}, {id: 62,name: 'Dominica'}, {id: 63,name: 'Dominican Republic'}, {id: 64,name: 'Ecuador'}, {id: 65,name: 'Egypt'}, {id: 66,name: 'El Salvador'}, {id: 67,name: 'Equatorial Guinea'}, {id: 68,name: 'Eritrea'}, {id: 69,name: 'Estonia'}, {id: 70,name: 'Ethiopia'}, {id: 71,name: 'Falkland Islands'}, {id: 72,name: 'Faroe Islands'}, {id: 73,name: 'Fiji Islands'}, {id: 74,name: 'Finland'}, {id: 75,name: 'France'}, {id: 76,name: 'French Guiana'}, {id: 77,name: 'French Polynesia'}, {id: 78,name: 'French Southern Territories'}, {id: 79,name: 'Gabon'}, {id: 80,name: 'Gambia'}, {id: 81,name: 'Georgia'}, {id: 82,name: 'Germany'}, {id: 83,name: 'Ghana'}, {id: 84,name: 'Gibraltar'}, {id: 85,name: 'Greece'}, {id: 86,name: 'Greenland'}, {id: 87,name: 'Grenada'}, {id: 88,name: 'Guadeloupe'}, {id: 89,name: 'Guam'}, {id: 90,name: 'Guatemala'}, {id: 91,name: 'Guinea'}, {id: 92,name: 'Guinea-Bissau'}, {id: 93,name: 'Guyana'}, {id: 94,name: 'Haiti'}, {id: 95,name: 'Heard Island and McDonald Islands'}, {id: 96,name: 'Honduras'}, {id: 97,name: 'Hong Kong'}, {id: 98,name: 'Hungary'}, {id: 99,name: 'Iceland'}, {id: 100,name: 'India'}, {id: 101,name: 'Indonesia'}, {id: 102,name: 'Iran'}, {id: 103,name: 'Iraq'}, {id: 104,name: 'Ireland'}, {id: 105,name: 'Israel'}, {id: 106,name: 'Italy'}, {id: 107,name: 'Jamaica'}, {id: 108,name: 'Japan'}, {id: 109,name: 'Jordan'}, {id: 110,name: 'Kazakhstan'}, {id: 111,name: 'Kenya'}, {id: 112,name: 'Kiribati'}, {id: 113,name: 'Kuwait'}, {id: 114,name: 'Kyrgyzstan'}, {id: 115,name: 'Laos'}, {id: 116,name: 'Latvia'}, {id: 117,name: 'Lebanon'}, {id: 118,name: 'Lesotho'}, {id: 119,name: 'Liberia'}, {id: 120,name: 'Libya'}, {id: 121,name: 'Liechtenstein'}, {id: 122,name: 'Lithuania'}, {id: 123,name: 'Luxembourg'}, {id: 124,name: 'Macao S.A.R. China'}, {id: 125,name: 'Macedonia'}, {id: 126,name: 'Madagascar'}, {id: 127,name: 'Malawi'}, {id: 128,name: 'Malaysia'}, {id: 129,name: 'Maldives'}, {id: 130,name: 'Mali'}, {id: 131,name: 'Malta'}, {id: 132,name: 'Marshall Islands'}, {id: 133,name: 'Martinique'}, {id: 134,name: 'Mauritania'}, {id: 135,name: 'Mauritius'}, {id: 136,name: 'Mayotte'}, {id: 137,name: 'Mexico'}, {id: 138,name: 'Micronesia'}, {id: 139,name: 'Moldova'}, {id: 140,name: 'Monaco'}, {id: 141,name: 'Mongolia'}, {id: 142,name: 'Montserrat'}, {id: 143,name: 'Morocco'}, {id: 144,name: 'Mozambique'}, {id: 145,name: 'Myanmar'}, {id: 146,name: 'Namibia'}, {id: 147,name: 'Nauru'}, {id: 148,name: 'Nepal'}, {id: 149,name: 'Netherlands'}, {id: 150,name: 'Netherlands Antilles'}, {id: 151,name: 'New Caledonia'}, {id: 152,name: 'New Zealand'}, {id: 153,name: 'Nicaragua'}, {id: 154,name: 'Niger'}, {id: 155,name: 'Nigeria'}, {id: 156,name: 'Niue'}, {id: 157,name: 'Norfolk Island'}, {id: 158,name: 'North Korea'}, {id: 159,name: 'Northern Mariana Islands'}, {id: 160,name: 'Norway'}, {id: 161,name: 'Oman'}, {id: 162,name: 'Pakistan'}, {id: 163,name: 'Palau'}, {id: 164,name: 'Palestinian Territory'}, {id: 165,name: 'Panama'}, {id: 166,name: 'Papua New Guinea'}, {id: 167,name: 'Paraguay'}, {id: 168,name: 'Peru'}, {id: 169,name: 'Philippines'}, {id: 170,name: 'Pitcairn'}, {id: 171,name: 'Poland'}, {id: 172,name: 'Portugal'}, {id: 173,name: 'Puerto Rico'}, {id: 174,name: 'Qatar'}, {id: 175,name: 'Reunion'}, {id: 176,name: 'Romania'}, {id: 177,name: 'Russia'}, {id: 178,name: 'Rwanda'}, {id: 179,name: 'Saint Helena'}, {id: 180,name: 'Saint Kitts'}, {id: 181,name: 'Saint Lucia'}, {id: 182,name: 'Saint Pierre and Miquelon'}, {id: 183,name: 'Saint Vincent and the Grenadines'}, {id: 184,name: 'Samoa'}, {id: 185,name: 'San Marino'}, {id: 186,name: 'Sao Tome and Principe'}, {id: 187,name: 'Saudi Arabi'}, {id: 188,name: 'Senegal'}, {id: 189,name: 'Seychelles'}, {id: 190,name: 'Sierra Leone'}, {id: 191,name: 'Singapore'}, {id: 192,name: 'Slovakia'}, {id: 193,name: 'Slovenia'}, {id: 194,name: 'Solomon Islands'}, {id: 195,name: 'Somalia'}, {id: 196,name: 'South Africa'}, {id: 197,name: 'South Korea'}, {id: 198,name: 'Spain'}, {id: 199,name: 'Sri Lanka'}, {id: 200,name: 'Sudan'}, {id: 201,name: 'Suriname'}, {id: 202,name: 'Svalbard and Jan Mayen'}, {id: 203,name: 'Swaziland'}, {id: 204,name: 'Sweden'}, {id: 205,name: 'Switzerland'}, {id: 206,name: 'Syria'}, {id: 207,name: 'Taiwan'}, {id: 208,name: 'Tajikistan'}, {id: 209,name: 'Tanzania'}, {id: 210,name: 'Thailand'}, {id: 211,name: 'Timor-Leste'}, {id: 212,name: 'Togo'}, {id: 213,name: 'Tokelau'}, {id: 214,name: 'Tonga'}, {id: 215,name: 'Trinidad and Tobago'}, {id: 216,name: 'Tunisia'}, {id: 217,name: 'Turkey'}, {id: 218,name: 'Turkmenistan'}, {id: 219,name: 'Turks and Caicos Islands'}, {id: 220,name: 'Tuvalu'}, {id: 221,name: 'U.S. Virgin Islands'}, {id: 222,name: 'Uganda'}, {id: 223,name: 'Ukraine'}, {id: 224,name: 'United Arab Emirates'}, {id: 225,name: 'United Kingdom'}, {id: 226,name: 'United States Minor Outlying Islands'}, {id: 227,name: 'Uruguay'}, {id: 228,name: 'Uzbekistan'}, {id: 229,name: 'Vanuatu'}, {id: 230,name: 'Vatican'}, {id: 231,name: 'Venezuela'}, {id: 232,name: 'Vietnam'}, {id: 233,name: 'Wallis and Futuna'}, {id: 234,name: 'Western Sahara'}, {id: 235,name: 'Yemen'}, {id: 236,name: 'Yugoslavia'}, {id: 237,name: 'Zambia'}, {id: 238,name: 'Zimbabwe'}]}, a.props.resultState = 'none', a.state = {industry: '',company_size: '',company_location: '',multi_country: !1,industryName: '',company_sizeName: '',company_locationName: '',industryValidation: !1,company_sizeValidation: !1,company_locationValidation: !1,industryValidationErrorClassShow: !1,company_sizeValidationErrorClassShow: !1,company_locationValidationErrorClassShow: !1,validateFormStarted: !1,formValid: !1,submitState: 'default'}, a.handleChange = a.handleChange.bind(a), a.handleSubmit = a.handleSubmit.bind(a), a;}return _inherits(Form, React.Component), e(Form, [{key: 'validateField',value: function () {var e = this.state.industry,a = this.state.company_size,n = this.state.company_location;
              function checkValidation (e) {return e.length > 0 && '0' !== e;}this.setState({industryValidation: checkValidation(e),company_sizeValidation: checkValidation(a),company_locationValidation: checkValidation(n)}, this.validateForm);}}, {key: 'validateForm',value: function () {this.setState({formValid: this.state.industryValidation && this.state.company_sizeValidation && this.state.company_locationValidation}, this.showInvalidFields);}}, {key: 'handleChange',value: function (e) {var a,n = this,t = e.target,i = 'checkbox' === t.type ? t.checked : t.value,o = t.id;
                if ('reset' === this.state.submitState && (this.props.resultState = 'none'), 'checkbox' !== t.type) {var r = t.options[t.selectedIndex].innerText;
                this.setState(_defineProperty({}, o + 'Name', r));}this.setState((_defineProperty(a = {}, o, i), _defineProperty(a, 'submitState', 'default'), a), function () {n.validateField();});}}, {key: 'resultShow',value: function () {this.props.resultState = this.filterPricingPlans(), this.setState({submitState: 'reset'});}}, {key: 'resultPreShow',value: function () {var e = this;
                clearInterval(this.timer);var a = [500, 700, 1e3, 1200, 1500, 1700, 2e3, 2500];
              this.time = function () {return a[Math.floor(Math.random() * a.length)];}, this.timer = window.setTimeout(function () {return e.resultShow();}, this.time());}}, {key: 'showInvalidFields',value: function () {this.state.validateFormStarted && this.setState({industryValidationErrorClassShow: !this.state.industryValidation,company_sizeValidationErrorClassShow: !this.state.company_sizeValidation,company_locationValidationErrorClassShow: !this.state.company_locationValidation});}}, {key: 'filterPricingPlans',value: function () {var e = parseInt(this.state.industry),a = parseInt(this.state.company_size),n = parseInt(this.state.company_location),t = this.state.multi_country,i = this.props.toolData.pricingPlan.filter(function (e) {if (e.planProperties.companySize.indexOf(a) > -1)return !0;});
              return (i = i.filter(function (e) {if (e.planProperties.companyLocation.indexOf(n) > -1)return !0;})).length < 1 && (i = [this.props.toolData.pricingPlan[2]]), (i = i.filter(function (a) {if (a.planProperties.industry.indexOf(e) > -1)return !0;})).length < 1 && (i = [this.props.toolData.pricingPlan[2]]), ((i = i.filter(function (e) {if (e.planProperties.multiCountryColab === t || null === e.planProperties.multiCountryColab)return !0;})).length < 1 || 3 === e) && (i = [this.props.toolData.pricingPlan[2]]), i.length > 0 ? i[0] : 'none';}}, {key: 'handleSubmit',value: function (e) {if (e.preventDefault(), 'reset' === this.state.submitState)return this.setState({industry: '',company_size: '',company_location: '',multi_country: !1,submitState: 'default',validateFormStarted: !1}, this.validateField), void (this.props.resultState = 'none');
              this.state.formValid ? (this.props.resultState = 'waiting', this.setState({submitState: 'loading'}, this.resultPreShow)) : (this.props.resultState = 'none', this.setState({validateFormStarted: !0}, this.showInvalidFields));}}, {key: 'render',value: function () {return React.createElement('div', {className: 'container'}, React.createElement('div', {className: 'recommendation-tool--controls'}, React.createElement('article', {className: 'recommendation-tool--controls-description'}, React.createElement('h3', null, 'Not sure what to choose?'), React.createElement('p', null, "We're here to help! Just answer the following questions and we'll have a plan picked out and tailored to your business needs.")), React.createElement('form', {onSubmit: this.handleSubmit}, React.createElement('label', {htmlFor: 'industry',className: 'recommendation-tool--label ' + this.constructor.errorClassParse(this.state.industryValidationErrorClassShow)}, React.createElement('span', {className: 'recommendation-tool--label-description'}, 'Industry (Required)'), React.createElement('span', {className: 'tooltip--wrapper'}, React.createElement('select', {id: 'industry',value: this.state.industry,onChange: this.handleChange}, this.constructor.selectorProps(this.props.toolData.industry)))), React.createElement('label', {htmlFor: 'company_size',className: 'recommendation-tool--label ' + this.constructor.errorClassParse(this.state.company_sizeValidationErrorClassShow)}, React.createElement('span', {className: 'recommendation-tool--label-description'}, 'Company Size (Required)'), React.createElement('select', {id: 'company_size',value: this.state.company_size,onChange: this.handleChange}, this.constructor.selectorProps(this.props.toolData.companySize))), React.createElement('label', {htmlFor: 'company_location',className: 'recommendation-tool--label ' + this.constructor.errorClassParse(this.state.company_locationValidationErrorClassShow)}, React.createElement('span', {className: 'recommendation-tool--label-description'}, 'Company Location (Required)'), React.createElement('select', {id: 'company_location',value: this.state.company_location,onChange: this.handleChange}, this.constructor.selectorProps(this.props.toolData.companyCounty))), React.createElement('label', {htmlFor: 'multi_country',className: 'recommendation-tool--label'}, React.createElement('input', {type: 'checkbox',id: 'multi_country',checked: this.state.multi_country,onChange: this.handleChange}), 'My business needs multi-country collaboration'), React.createElement('div', {className: 'btn-in-column'}, React.createElement(i, {submitState: this.state.submitState})))), React.createElement(o, {resultState: this.props.resultState,formState: this.state}));}}], [{key: 'errorClassParse',value: function (e) {return e ? 'recommendation-tool--label-error' : '';}}, {key: 'selectorProps',value: function (e) {return e.map(function (e) {return React.createElement('option', {value: e.id}, ' ', e.name.toString());});}}]), Form;}(),s = function (a) {function RecommendationTool () {return _classCallCheck(this, RecommendationTool), _possibleConstructorReturn(this, (RecommendationTool.__proto__ || Object.getPrototypeOf(RecommendationTool)).apply(this, arguments));}return _inherits(RecommendationTool, React.Component), e(RecommendationTool, [{key: 'render',value: function () {return React.createElement('div', {className: 'recommendation-tool'}, React.createElement(r, null));}}]), RecommendationTool;}();
      ReactDOM.render(React.createElement(s, null), document.getElementById('reactapp'));
    });
  });
});

utils.waitForElement('.recommendation-tool--controls').then(function () {
  function track (prop, goalName) {
    console.log('goal:', prop, goalName);
    if (!window.s) return console.log('goal error: window.s undefined');
    if (!window.s.tl) return console.log('goal error: s.tl undefined');
    window.s.linkTrackVars = prop;
    window.s.linkTrackEvents = 'None';
    window.s[prop] = goalName; // unique
    window.s.tl(true, 'o', 'CROmetrics Goal'); // static params / do not update
  }

  jQuery('.recommendation-tool--controls form').on('submit', function () {
    track('eVar74', 'recommendationsEngine');
    window['optimizely'].push({
      type: 'event',
      eventName: '7535253115_recommendation_engine__submit_form'
    });
  });

  // jQuery('.pricing-feature-button').on('mousedown touchstart', function() {
  //    track('eVar86', 'expandFeatures')
  //  })

});

// jshint ignore: start
// (function (VARIATION, PAGE, SHARED) {
  // 'use strict';SHARED.campaignCookie('q119_ab_recommendations_treatment');
// })('v1', 'recommendations', window.CRO_SHARED_10376168820);
