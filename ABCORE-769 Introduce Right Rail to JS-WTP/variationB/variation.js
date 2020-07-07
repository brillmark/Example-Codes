(function() {
  var $ = convert.$;
  var FEHelper = {
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
  var bmRightRail =
    '<div class="bm-right-rail">' +
    '<div class="bm-pin-board bm-1"><div class="bm-pin-inr"></div></div>' +
    '<div class="bm-pin-board bm-2"><div class="bm-pin-inr"></div></div>' +
    '<div class="bm-pin-board bm-3"><div class="bm-pin-inr"></div></div>' +
    '<div class="bm-pin-board bm-4"><div class="bm-pin-inr"><h2>Most Read Articles</h2></div></div>' +
    '<div class="bm-pin-board bm-5"><div class="bm-pin-inr"></div></div>' +
    '</div>';
  var bmtopSction = '<div class="bm-top-769"></div>';

  var bmTitle = $('.magazine-title-fields .magazine-title').text();
  var bmTitleList = '';

  //Right Rail Multiple Child
  function repeatRightColumn() {
    var itemGroup = [];
    $('.bm-right-rail > .bm-pin-board').each(function(index, item) {
      itemGroup.push($(item).clone());
    });
    $(itemGroup).each(function(index, item) {
      if (index == 4) {
        item.addClass('bmLastElement');
      }
      $('.bm-right-rail').append(item);
    });
  }

  function init() {
    if ($('#roundup-table-of-contents').length > 0) {
      // Add Class in Body

      $('body').addClass('bm-769');
      //Sections append to right rail
      $('#container-scroll .row > .roundup-wrapper').before(bmtopSction);
      $('#container-scroll .roundup-wrapper + div').after(bmRightRail);
      $('.magazine-content .magazine-title-fields').appendTo('.bm-top-769');
      $('.magazine-content .attribution-and-sharing').insertAfter(
        '.bm-top-769 .magazine-title-fields'
      );

      // Clone Explore More and Artical section
      $('#magazine-content-container #st-ad-2')
        .clone(true)
        .insertAfter('.bm-top-769 .attribution-and-sharing');

      $('.widgets-wrapper .explore-more')
        .clone(true)
        .appendTo('.bm-right-rail .bm-pin-board.bm-2 .bm-pin-inr');
      $('.widgets-wrapper .content.widget > ul')
        .clone(true)
        .appendTo('.bm-right-rail .bm-pin-board.bm-4 .bm-pin-inr');
      $('.bm-pin-inr .explore-more-title').text('Related Articles');

      // UL tag change
      $('.bm-pin-board.bm-4 ul').replaceWith(function() {
        return $('<ol />', { html: $(this).html() });
      });

      //Button text change
      $('.roundup-item .roundup-copy a.call-to-action-section').text(
        'Shop the Style'
      );
      // Wait for Ads
      FEHelper.onLoadElement(
        '#st-ad-roundup-1',
        function() {
          $('#st-ad-roundup-1').appendTo(
            '.bm-right-rail .bm-pin-board.bm-1 .bm-pin-inr'
          );
        },
        50,
        1000
      );
      FEHelper.onLoadElement(
        '#st-ad-roundup-2',
        function() {
          $('#st-ad-roundup-2').appendTo(
            '.bm-right-rail .bm-pin-board.bm-3 .bm-pin-inr'
          );
        },
        50,
        1000
      );
      FEHelper.onLoadElement(
        '#st-ad-roundup-3',
        function() {
          $('#st-ad-roundup-3').appendTo(
            '.bm-right-rail .bm-pin-board.bm-5 .bm-pin-inr'
          );
        },
        50,
        1000
      );

      // Clone Explore More and Artical section
      $('.roundup-item.widget').each(function(i, val) {
        var bmHeading = $(this).find('.heading');
        bmTitleList +=
          i < 9
            ? '<a href="#' +
              $(this).attr('id') +
              '"><span class="bm-title-num">0' +
              (i + 1) +
              '</span><span class="bm-title-heading">' +
              $(bmHeading).text() +
              '</span></a>'
            : '<a href="#' +
              $(this).attr('id') +
              '"><span class="bm-title-num">' +
              (i + 1) +
              '</span><span class="bm-title-heading">' +
              $(bmHeading).text() +
              '</span></a>';
        //add 0 on right rail index
        var bmIndex = $(this).find('.index-number');
        var newIndex = parseInt($(bmIndex).text());
        newIndex = newIndex < 10 ? '0' + newIndex : newIndex;
        $(bmIndex).text(newIndex);
      });
      $('#magazine-content-container > ul').before(
        '<div class="bm-heading-list"><h3>' +
          bmTitle +
          '</h3>' +
          bmTitleList +
          '</div>'
      );

      FEHelper.onLoadElement('#st-ad-roundup-3', repeatRightColumn, 50, 1000);
    }
  }
  FEHelper.doWhenJqueryLoaded(function() {
    $ = convert.$;
    FEHelper.onLoadElement('#roundup-table-of-contents', init, 50, 10000);
  });
})();
