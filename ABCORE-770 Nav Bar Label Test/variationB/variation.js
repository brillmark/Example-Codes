(function() {
  var $ = convert.$;
  var FEHelper = {
    // Wait for jQuery
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
      }, 5000);
    },
    // Wait for element
    doWhenElementLoaded: function(element, todoWhenLoaded) {
      var waitForElement = setInterval(function() {
        if ($(element).length > 0) {
          clearInterval(waitForElement);
          todoWhenLoaded();
        }
      }, 50);
      setTimeout(function() {
        clearInterval(waitForElement);
      }, 5000);
    },
  };

  var BMDropdown =
    '' +
    '  <li class="dropdown BM_Dropdown">' +
    '      <a href="#" class="dropdown-toggle" data-toggle="dropdown">' +
    '          <p>New Fare Sale!</p>' +
    '          <span>Travel News</span>' +
    '          <span class="awd__icons awd-icon icon-Arrow"></span>' +
    '      </a>' +
    '      <ul class="dropdown-menu">' +
    '          <li>' +
    '              <a href="/blog/">SEE ALL BLOG POSTS</a>' +
    '          </li>' +
    '          <li>' +
    '              <a href="/blog/fare-deals/">RECENT FARE SALES</a>' +
    '          </li>' +
    '          <li>' +
    '              <a href="/blog/by-category/travel-tips-advice/">TRAVEL TIPS & ADVICE</a>' +
    '          </li>' +
    '          <li>' +
    '              <a href="/blog/by-category/travel-gear/">TRAVEL GEAR</a>' +
    '          </li>' +
    '      </ul>' +
    '  </li>';

  function init() {
    // Adjust texts
    $(
      '#navheader .navbar-nav.main > li:first-child > a> span:first-child'
    ).text('Flight Deals');
    $(
      '#navheader .navbar-nav.main > li:nth-child(5) > a> span:first-child'
    ).text('Hotel Deals');
    $(
      '#navheader .navbar-nav.main > li:nth-child(7) > a> span:first-child'
    ).text('Travel Credit Cards');

    // Add dropdown
    $('#navheader .navbar-nav.main > li.dropdown:nth-child(1)').after(
      BMDropdown
    );
  }

  function addicon() {
    // Add icon
    $('#navheader li.alerts-login.dropdown a span:first-of-type').html(
      '<span class="icon-clock-012 color"></span> Get Price Alerts'
    );
  }

  FEHelper.doWhenJqueryLoaded(function() {
    $ = convert.$;
    FEHelper.doWhenElementLoaded(
      '#navheader .navbar-nav.main > li:first-child > a> span:first-child',
      init,
      50,
      5000
    );
    FEHelper.doWhenElementLoaded(
      '#navheader .navbar-nav.main > li.alerts-nav.dropdown a > span:first-child',
      addicon,
      50,
      5000
    );
  });
})();
