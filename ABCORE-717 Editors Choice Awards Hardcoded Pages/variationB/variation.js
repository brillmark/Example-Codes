(function() {
  var $;
  var BMHelper = {
    // Wait for convert.$
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
  };

  var products = [
    {
      year: "2019 editors' choice",
      Title: " best women's shoes",
      btn: 'See the Winners',
      Link: 'https://gosendbox.netlify.app/',
      ProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1570710008Wshoe2.png',
    },
    {
      year: "2019 editors' choice",
      Title: "  best men's shoes",
      btn: 'See the Winners',
      Link: 'https://gosendbox.netlify.app/',
      ProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1570709990Wshoe1.png',
    },

    {
      year: "2019 editors' choice",
      Title: ' best carry-ons',
      btn: 'See the Winners',
      Link: 'https://gosendbox.netlify.app/',
      ProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572602107TravelproGold-.png',
    },
    {
      year: "2019 editors' choice",
      Title: '  best travel pillows',
      btn: 'See the Winners',
      Link: 'https://gosendbox.netlify.app/',
      ProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1570709964pillow.png',
    },

    {
      year: "2019 editors' choice",
      Title: '   best travel tech',
      btn: 'See the Winners',
      Link: 'https://gosendbox.netlify.app/',
      ProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571940222BenqGold.png',
    },
    {
      year: "2019 editors' choice",
      Title: ' best personal items',
      btn: 'See the Winners',
      Link: 'https://gosendbox.netlify.app/',
      ProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1570709946personalItem.png',
    },
  ];
  var bulletPointText =
    '' +
    '  <div>' +
    "      <h2>More Editors' Choice 2019:</h2>" +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Carry-On Luggage 2019</a></p>' +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Personal Items 2019</a></p>' +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Travel Pillows 2019</a></p>' +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Travel Shoes for Men 2019</a></p>' +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Travel Shoes for Women 2019</a></p>' +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Travel Tech 2019</a></p>' +
    '      <p><em class="bm-new">Some review products are sent to us free of charge and with no incentive to offer a favorable review. We offer our unbiased opinions, positive and negative, and will never accept compensation to review a product.</em></p>' +
    '  </div>';
  function init() {
    var items = '';
    $.each(products, function(i, v) {
      items +=
        '' +
        '      <div class="bm-item">' +
        '         <a href="' +
        v.Link +
        '" target="_blank"> <div class="item-box">' +
        '              <div class="item-text">' +
        '                  <p>' +
        v.year +
        '</p>' +
        '                  <h3>' +
        v.Title +
        '</h3>' +
        '              </div>' +
        '  <div class="bm-item-cta"><button type="button">' +
        v.btn +
        '</button></div>' +
        '              <div class="item-img">' +
        '                  <img src="' +
        v.ProductImage +
        '">' +
        '              </div>' +
        '          </div>' +
        '      </a></div>';
    });
    var bmitem = '<div class="bm-ChoiceAwards">' + items + '</div>';
    $('.at-above-post.addthis_tool').after(bmitem);
    var date = new Date();
    $('header.post-header .post-meta a').text(
      'Editors’ Choice  Nov ' + date.getDate() + ', 2019'
    );
    $('.post-title').text('Editors’ Choice Awards 2019');

    $('.hero + div').after(
      '<div class="bm-topBnner"><img class="bm-desktop" src="https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571034968banner1.jpg" alt=""><img class="bm-mobile" src="//cdn-3.convertexperiments.com/uf/10025040/10024674/1572330817Mobile_Header2x.png" alt="" /></div>'
    );

    $('.at-above-post.addthis_tool').after(
      '<p class="bm-per">We dragged suitcases down stairs and across cobblestone streets, braved blisters by walking for miles in brand-new shoes, and spent long flights sleeping upright on travel pillows. After hundreds of hours of testing out 2019’s new travel products, the team declares these the best carry-ons, travel pillows, personal items, travel tech, and shoes of 2019.</p>'
    );

    $('.bm-ChoiceAwards').after(
      '<div class="bm-video"><h2>2019 Editors’ Choice Official Video</h2><iframe width="835" height="470" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    );

    $('.bm-video').after(bulletPointText);
  }

  //change text 2018 to 2019
  function updateLink() {
    $('.entry-content p a').each(function(i, val) {
      var updateText = $(this)
        .text()
        .replace('2018', '2019');
      $(this).text(updateText);
    });
  }

  BMHelper.doWhenJqueryLoaded(function() {
    $ = convert.$;
    BMHelper.onLoadElement('.at-above-post.addthis_tool ', init);
    BMHelper.onLoadElement('.entry-content p a', updateLink);
  });
})();
