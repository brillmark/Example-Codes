(function() {
  try {
    /*-----------------------
    section data 
  -----------------------*/
    var bmHelper = this;
    bmHelper.arrow =
      '<img src="https://bm-test-dev.s3.us-east-2.amazonaws.com/which/arrowNew.png"/>';
    bmHelper.dontBuy =
      '<svg class="_3eMDH" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink:href="http://www.w3.org/1999/xlink" xml:space="preserve" focusable="false" tabindex="-1" width="40" height="40" name="dontBuy" viewBox="0 0 31 31"><g fill="none" fill-rule="evenodd"><path fill="#55636C" d="M15.5 30.826c8.465 0 15.327-6.861 15.327-15.326S23.965.174 15.5.174.173 7.035.173 15.5 7.035 30.826 15.5 30.826"></path><path fill="#FFF" d="M2.584 9.929H5.01c2.177 0 3.226 1.015 3.226 2.968 0 2.012-1.041 3.054-3.285 3.054H2.584V9.93zm2.306 4.696c.86 0 1.282-.412 1.282-1.651 0-1.238-.396-1.678-1.282-1.678h-.26v3.33h.26zM8.7 12.957c0-1.996 1.369-3.122 3.071-3.122 1.712 0 3.079 1.126 3.079 3.122 0 1.994-1.325 3.088-3.079 3.088-1.755 0-3.07-1.094-3.07-3.088zm4.077.008c0-1.204-.404-1.694-1.006-1.694s-1.006.49-1.006 1.694.404 1.695 1.006 1.695c.603 0 1.006-.49 1.006-1.695zM15.462 9.929h2.072l1.66 3.01h.026v-3.01h1.652v6.022h-1.859l-1.875-3.38h-.025v3.38h-1.651V9.929zM21.456 11.804c.327-.052.585-.164.585-.344 0-.156-.197-.182-.344-.31a.648.648 0 0 1-.266-.559c0-.448.36-.748.852-.748.515 0 .963.327.963 1.067 0 .997-.585 1.53-1.79 1.617v-.723zM25.13 15.95v-4.628h-1.428V9.93h4.903v1.393h-1.428v4.629zM7.1 17.55h2.495c1.591 0 2.392.508 2.392 1.574 0 .74-.414 1.092-1.11 1.272v.036c.825.137 1.324.576 1.324 1.41 0 1.144-.963 1.728-2.581 1.728H7.1v-6.02zm2.374 2.374c.414 0 .611-.189.611-.568 0-.37-.189-.558-.602-.558h-.37v1.126h.361zm.027 2.434c.447 0 .679-.215.679-.654 0-.447-.241-.645-.68-.645h-.387v1.3h.388zM16.399 21.31v-3.76h1.695v3.82c0 1.488-.912 2.27-2.607 2.27-1.797 0-2.718-.791-2.718-2.27v-3.82h2.047v3.76c0 .618.242.876.8.876.55 0 .783-.258.783-.877zM20.433 23.57v-2.124l-1.815-3.466v-.43h1.918l1.015 2.081h.017l.972-2.082h1.67v.43l-1.73 3.416v2.175z"></path></g></svg>';

    bmHelper.targetedPageContent = {
      '/reviews/mattresses/article/top-mattresses': {
        heading: "Don't buy a don't buy",
        subHeading:
          "Here's a sneak peek of what our members see. Don't risk wasting your money on a mattress like this one.",
        product: {
          productImg:
            'https://dam.which.co.uk/00876e7e-20c7-4753-8f86-f74ce8dfed2e.jpg',
          productBrand: 'Marks & Spencer',
          productName: ' Natural 1250 T653129J',
          testScore: '44%',
          productPrice: ' £549',
          productOverview:
            " <span>Overview:</span> This mattress provides substandard support, and it's not very durable. It's among the worst mattresses we've tested in recent years so, as of November 2019, we've made it a Don't Buy.	",
          numberOfDontBuys: '3',
          numberOfBestBuys: '40',
          productType: ' Mattress'
        },
        buttonCopy: ' Sign up now to buy the best',
        buttonURL: 'https://join.which.co.uk/',
        secButtonURL: 'https://www.which.co.uk/login'
      },
      '/reviews/dishwashers/article/recommendations/which-best-buy-dishwashers': {
        heading: "Don't buy a don't buy",
        subHeading:
          "Here's a sneak peek of what our members see. Don't risk wasting your money on a dishwasher like this one.",
        product: {
          productImg:
            'https://dam.which.co.uk/7ca3a986-a5ed-42cb-a4cb-bec246363cb1.jpg',
          productBrand: 'Fisher & Paykel',
          productName: 'DD60SCTHX9 review',
          testScore: '33%',
          productPrice: '£699',
          productOverview:
            "<span>Overview:</span> The last time we tested a Fisher & Paykel dishwasher, it impressed us enough to be a Best Buy. This 2017 model, however, failed to clean our dirty dishes, and is a disappointing Don't Buy.",
          numberOfDontBuys: '9',
          numberOfBestBuys: '50',
          productType: ' Dishwashers'
        },
        buttonCopy: ' Sign up now to buy the best',
        buttonURL: 'https://join.which.co.uk/',
        secButtonURL: 'https://www.which.co.uk/login'
      },
      '/reviews/child-car-seats/article/how-to-buy-the-right-child-car-seat/which-car-seat-do-you-need-for-your-baby-or-child': {
        heading: "Don't buy a don't buy",
        subHeading:
          "Here's a sneak peek of what our members see. Don't risk wasting your money on a child car seat like this one.",
        product: {
          productImg:
            'https://dam.which.co.uk/9aa8ff40-c9b3-4e1a-bda2-82c47d0d2b95.jpg',
          productBrand: 'Babystyle',
          productName: 'Oyster Carapace i-Size + Duo-Fix base',
          testScore: '0%',
          productPrice: '£199',
          productOverview:
            "<span>Overview:</span> This child car seat has passed the regulatory tests required by ECE R129/i-Size to be sold as suitable for children from 40cm–83 cm, which is from birth to 15 months of age. However, our frontal and side-impact crash tests are designed to be tougher than the legal minimum requirements, and revealed weaknesses in frontal-impact safety. The car seat completely detached from the Duo-Fix i-Size Isofix base and was sent flying forwards.</br> For this reason the test score is automatically downgraded to 0% and it's been made a Don't Buy. A good result in any of our other tests can't compensate for this poor result.",
          numberOfDontBuys: '21',
          numberOfBestBuys: '48',
          productType: ' Child car seats'
        },
        buttonCopy: 'Sign up now to buy the best',
        buttonURL: 'https://join.which.co.uk/',
        secButtonURL: 'https://www.which.co.uk/login'
      },
      '/reviews/air-purifiers/article/how-to-buy-the-best-air-purifier': {
        heading: "Don't buy a don't buy",
        subHeading:
          "Here's a sneak peek of what our members see. Don't risk wasting your money on a air purifier like this one.",
        product: {
          productImg:
            'https://dam.which.co.uk/a15e257a-243b-4b68-9dbf-812a7da67a62.jpg',
          productBrand: 'Electriq',
          productName: 'EAP120HC review',
          testScore: '25%',
          productPrice: '£70',
          productOverview:
            "<span>Overview:</span> Don't buy this model. It performed abysmally in our tests, removing only 14% of particles from our test chamber.",
          numberOfDontBuys: '4',
          numberOfBestBuys: '9',
          productType: ' Air purifiers'
        },
        buttonCopy: 'Sign up now to buy the best',
        buttonURL: 'https://join.which.co.uk/',
        secButtonURL: 'https://www.which.co.uk/login'
      },
      '/reviews/fridge-freezers/article/how-to-buy-the-best-fridge-freezer': {
        heading: "Don't buy a don't buy",
        subHeading:
          "Here's a sneak peek of what our members see. Don't risk wasting your money on a fridge freezer like this one.",
        product: {
          productImg:
            'https://dam.which.co.uk/9983bc97-ed37-4fb0-ac87-f78ba32ec245.jpg',
          productBrand: 'Ikea',
          productName: 'Kylslagen 403.127.59',
          testScore: '0%',
          productPrice: '£750',
          productOverview:
            "<span>Overview:</span> We’ve given this fridge freezer our Don’t Buy warning because its flammable plastic back is potentially unsafe. Our tests have shown that this backing can exacerbate the spread of flames in the event of a fire, and so we strongly urge you to avoid it. The manufacturer of this appliance is in the process of upgrading it to have flame-retardant backing. Our Don't Buy recommendation relates to the flammable plastic-backed version of this product. It will remain a Don't Buy until this version is no longer available to buy in shops.",
          numberOfDontBuys: '80',
          numberOfBestBuys: '133',
          productType: ' Fridge freezers'
        },
        buttonCopy: 'Sign up now to buy the best',
        buttonURL: 'https://join.which.co.uk/',
        secButtonURL: 'https://www.which.co.uk/login'
      },
      '/reviews/hobs/article/top-five-best-hobs': {
        heading: "Don't buy a don't buy",
        subHeading:
          "Here's a sneak peek of what our members see. Don't risk wasting your money on a hob like this one.",
        product: {
          productImg:
            'https://dam.which.co.uk/1c0dfe46-4347-4f79-96f3-acfd292bbb5b.jpg',
          productBrand: 'CDA',
          productName: 'HVG720SS',
          testScore: '45%',
          productPrice: '£278.98',
          productOverview:
            '<span>Overview:</span> Like many gas hobs, this one is good when it comes to distributing heat evenly along the base of the pan, but it falls down when it comes to the more important tasks of heating quickly and simmering gently.',
          numberOfDontBuys: '3',
          numberOfBestBuys: '40',
          productType: ' Hobs'
        },
        buttonCopy: 'Sign up now to buy the best',
        buttonURL: 'https://join.which.co.uk/',
        secButtonURL: 'https://www.which.co.uk/login'
      },
      '/reviews/steam-cleaners/article/top-five-best-steam-mops': {
        heading: "Don't buy a don't buy",
        subHeading:
          "Here's a sneak peek of what our members see. Don't risk wasting your money on a steam mop like this one.",
        product: {
          productImg:
            'https://dam.which.co.uk/fbd824d2-1eb0-4978-9b2b-9c23b76bb0eb.jpg',
          productBrand: 'Black & Decker',
          productName: '9IN1 Steam-mop',
          testScore: '40%',
          productPrice: '£99',
          productOverview:
            "<span>Overview:</span> Like many of our steam mops, this one manages to clean away muddy footprints with ease, but it struggled with sticky fruit residue. More concerningly, the unit we tested stopped working after we'd only used it a handful of times - this poor durability means we've rated it a Don't Buy.",
          numberOfDontBuys: '4',
          numberOfBestBuys: '9',
          productType: ' Steam mops'
        },
        buttonCopy: 'Sign up now to buy the best',
        buttonURL: 'https://join.which.co.uk/',
        secButtonURL: 'https://www.which.co.uk/login'
      },
      '/reviews/laptops/article/top-laptops/top-five-laptops': {
        heading: "Don't buy a don't buy",
        subHeading:
          "Here's a sneak peek of what our members see. Don't risk wasting your money on a laptop like this one.",
        product: {
          productImg:
            'https://dam.which.co.uk/dc57cad5-47eb-4079-8bb6-141f599da655.jpg',
          productBrand: 'Asus',
          productName: ' X751NA-TY006T',
          testScore: '43%',
          productPrice: '£299',
          productOverview:
            '<span>Overview:</span> We’ve made this laptop a Don’t Buy because it combines a low-resolution screen, slow performance with woeful battery life and a heavy design. It might appear to suit the most undemanding of users, but there are much better models available for less cash. </br> Note: This laptop was tested under a previous test programme and its score isn’t directly comparable with laptops reviewed after April 2019.',
          numberOfDontBuys: '4',
          numberOfBestBuys: '29',
          productType: ' Laptops'
        },
        buttonCopy: 'Sign up now to buy the best',
        buttonURL: 'https://join.which.co.uk/',
        secButtonURL: 'https://www.which.co.uk/login'
      }
    };
    /*-----------------------
    functional part start
  --------------------*/

    /*-----------------------
    helper function
  --------------------*/

    //wait for element to load
    bmHelper.doWhenElementLoaded = function(
      selector,
      trigger,
      delayInterval,
      delayTimeout
    ) {
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
    };

    // pure insertBefore
    bmHelper.insertBefore = function(targetElement, beforeElement) {
      if (targetElement) {
        targetElement.insertAdjacentHTML('beforebegin', beforeElement);
      }
    };
    // pure remove
    bmHelper.remove = function(removeElement) {
      if (removeElement) {
        removeElement.parentNode.removeChild(removeElement);
      }
    };

    // pure live click
    bmHelper._on = function(event, selector, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element &&
        (function(ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function(selector) {
              var node = this,
                nodes = (node.parentNode || node.document).querySelectorAll(
                  selector
                ),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function(e) {
          var found,
            el = e.target || e.srcElement;
          while (
            el &&
            el.matches &&
            el !== context &&
            !(found = el.matches(selector))
          )
            el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    };

    // tarack goal event
    bmHelper.trackGAEvent = function(
      $eventCategory,
      $eventAction,
      $eventLabel
    ) {
      if ('ga' in window) {
        ga.getAll()[0].send('event', {
          eventCategory: $eventCategory,
          eventAction: $eventAction,
          eventLabel: $eventLabel
        });
      }
    };

    bmHelper.insertSection = function(sectionHtml) {
      //change copy according to url
      if (sectionHtml) {
        //target element (air purifire page has different DOM structure, check the pathname and change the target element for this page)
        var targetElement =
          bmHelper.bmPath() ===
          '/reviews/air-purifiers/article/how-to-buy-the-best-air-purifier'
            ? document.querySelector(
                '[data-which-id="article-section-general"] h2:nth-child(6)'
              )
            : document.querySelector(
                'div[data-which-id="article-section-table"] section'
              );
        // if already have data remove.
        // TBD
        //insert new section
        bmHelper.insertBefore(targetElement, sectionHtml);
      }
    };

    // get section html
    bmHelper.getSectionHtml = function(sectionData) {
      //genrate new element
      var sectionHtml =
        '  <div class="BmDbSection">' +
        '      <div class="BmDbWrapper">' +
        '          <span> SNEAK PEEK</span>' +
        '          <h2 class="BmDbHeading">' +
        sectionData.heading +
        '</h2>' +
        '          <p class="BmDbSubHeading">' +
        sectionData.subHeading +
        '</p>' +
        '          <div class="BmDbProductBox">' +
        '              <div class="BmDbProductImg">' +
        '                  <img src="' +
        sectionData.product.productImg +
        '">' +
        '              </div>' +
        '              <div class="BmDbProductDetails">' +
        '                  <h5> ' +
        sectionData.product.productBrand +
        ' </h5>' +
        '                  <p> ' +
        sectionData.product.productName +
        '</p>' +
        '                  <div class="BmDbThumbnail">' +
        '                      <li class="BmDbTestScore"> <span>TEST SCORE</span>' +
        '                          <h3>' +
        sectionData.product.testScore +
        '</h3>' +
        '                      </li>' +
        '                      <li> <span class="BmDbDontBuy">' +
        dontBuy +
        '</span></li>' +
        '                      <li class="BmDbPrice"> ' +
        sectionData.product.productPrice +
        '</li>' +
        '                  </div>' +
        '              </div>' +
        '          </div>' +
        '          <p class="BmDbOverview">' +
        sectionData.product.productOverview +
        '' +
        '          </p>' +
        '     </div>' +
        ' <div class="BmDbFooter">' +
        '          <p>' +
        'Our lab tests found <b>' +
        sectionData.product.numberOfDontBuys +
        sectionData.product.productType +
        ' to avoid </b> and <b>' +
        sectionData.product.numberOfBestBuys +
        ' we recommend. </b> ' +
        '</p>' +
        '   <a class="BmDbSignUp" href="' +
        sectionData.buttonURL +
        '">' +
        arrow +
        sectionData.buttonCopy +
        '</a>' +
        '          <p class="BmDbLogin"> Already a member? <a href="' +
        sectionData.secButtonURL +
        '">Log in</a></p>' +
        '      </div>' +
        '  </div>';

      return sectionHtml;
    };

    // get page path
    bmHelper.bmPath = function() {
      return window.location.pathname;
    };

    // find out current page data
    bmHelper.currentPageData = bmHelper.targetedPageContent[bmHelper.bmPath()];

    /*-----------------------
    init is the main controller
  --------------------*/
    bmHelper.init = function() {
      // convert data into html
      var sectionHtml = bmHelper.getSectionHtml(bmHelper.currentPageData);

      // data insert to page
      bmHelper.insertSection(sectionHtml);

      // due to react , some time data disappear after few second
      // this case add data again
      setTimeout(function() {
        //remove element before adding again
        bmHelper.remove(document.querySelector('.BmDbSection'));
        bmHelper.insertSection(sectionHtml);
      }, 5000);

      //add click event on signup CTA
      bmHelper._on('click', '.BmDbSignUp', function() {
        //track GA event
        bmHelper.trackGAEvent(
          'Sign Up Click',
          'Don’t buy preview CTA',
          'Sign up now to buy the best'
        );
      });
    };

    /*-----------------------
   script start executing from here and wait target elemnet
  --------------------*/
    bmHelper.doWhenElementLoaded(
      'div[data-which-id="article-section-table"]',
      bmHelper.init,
      50,
      10000
    );
  } catch (err) {
    //console && console.log(err);
  }
})();
