(function() {
  var $ = convert.$;
  var DDReusableFn = {
    // wait for jQuery
    doWhenJqueryLoaded: function(todoWhenLoaded) {
      var waitForjQuery = setInterval(function() {
        if (typeof convert.$ != 'undefined') {
          $ = convert.$;
          clearInterval(waitForjQuery);
          todoWhenLoaded();
        }
      }, 50);

      setTimeout(function() {
        clearInterval(waitForjQuery);
      }, 4000);
    },
    // wait for element
    doWhenElementLoaded: function(element, todoWhenLoaded) {
      var waitForElement = setInterval(function() {
        if ($(element).length > 0) {
          clearInterval(waitForElement);
          todoWhenLoaded();
        }
      }, 50);

      setTimeout(function() {
        clearInterval(waitForElement);
      }, 10000);
    },
  };

  function init() {
    //view all clicks
    $('body').delegate('.view-all', 'click', function() {
      $(this)
        .parent()
        .addClass('bmshow_list');
    });
    
    //traversing list
    $('.page-search .item').each(function() {
      var bmHeader = $(this).find('.header');
      var bmPricing = $(this).find('.body .actions.pricing');
      
      //move price list section for desktop
      $(bmPricing).appendTo(bmHeader);
      var bmPricingMobile = $(this).find('.details-mobile');
      
      //move price list section for mobile
      $(bmPricingMobile).appendTo(bmHeader);
      var bmHeaderAddress = $(this).find('.header .address');
      var bmOverView = $(this).find('.body #overview');
      
      //overview section move to below the address
      $(bmOverView).insertAfter(bmHeaderAddress);
      
      //get new  address
      var newAdrs = getShortAddress(bmHeaderAddress);
      
      //insert new address after old address
      $(this)
        .find('.bm-address')
        .remove();
      $(bmHeaderAddress).after(
        '<p class="address bm-address">' + newAdrs + '</p>'
      );
    });
    $('body').delegate(
      '#destinations-app > div > div.tab-control > ul > li:nth-child(3) a, button.map-toggle',
      'click',
      function() {
        DDReusableFn.doWhenElementLoaded(' #overview', init);
        DDReusableFn.doWhenElementLoaded(
          '.page-search .price-list .view-all',
          seeMore
        );
      }
    );
  }

  function getShortAddress(address) {
    try {
      var bmAdress = $(address).text();
      var bmArray = bmAdress.split(',');
      var len = bmArray.length;
      var newAddress = bmArray[len - 2] + ', ' + bmArray[len - 1];
      return newAddress;
    } catch (err) {
      //error
    }
  }

  function seeMore() {
    $('.page-search .price-list .view-all').html(
      'See More <img src="https://cdn-3.convertexperiments.com/uf/10025040/10024671/1572956894rectangle.png">'
    );
  }

  DDReusableFn.doWhenJqueryLoaded(function() {
    $ = convert.$;
    DDReusableFn.doWhenElementLoaded(' #overview', init);
    DDReusableFn.doWhenElementLoaded(
      '.page-search .price-list .view-all',
      seeMore
    );
  });
})();
