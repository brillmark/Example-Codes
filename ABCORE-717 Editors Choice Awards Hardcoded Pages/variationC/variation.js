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

  /* product list menshoes   */
  var menShoes = {
    mainTitle:
      "2019 Editors' Choice Finalists: Travel Shoes for Men (Alphabetical)",
    winnerTitle: "2019 Editors' Choice Winners: Travel Shoes for Men",
    bmTopBanner: {
      heading: 'Editors’ Choice Awards: Best New Travel Shoes for Men 2019',
      bannerImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571034980banner2.jpg',
      bannerDesc:
        'After gathering the most promising new travel shoes of the year, we pounded the pavement to find 2019’s best new travel shoes for men. Each shoe underwent hours of wear-testing and was then evaluated on the following criteria: style, versatility, technology, weight, packability, comfort, number of miles you could wear the shoes for, and arch support.<br><br>These are the nine pairs that shined in our testing.',
      bannerSubHead: "Editors' Choice Oct 1, 2019",
      //bannerImage
      bannerSmallImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571984133bannerleaf.png',
      bannerSmallText: '2019 Editors’ Choice',
      bannerLargeText: 'Best New Travel Shoes for Men',
      bannerProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572369727Nisolo-Gold.png',
    },
    bmTopSec: [
      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'GOLD WINNER',
        topDescrmobile: 'GOLD',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'Nisolo Travel Derby ',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/2ORw8a4',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572369727Nisolo-Gold.png',
        itemClass: 'gold',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'SILVER WINNER',
        topDescrmobile: 'SILVER',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'Samuel Hubbard Dress Fast',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/33zUIjX',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572369806SamuelHubbard-Silver.png',
        itemClass: 'silver',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'BRONZE WINNER',
        topDescrmobile: 'BRONZE',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'OluKai Kahu Pahaha',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/2NwNfMm',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572369835Olukai-Bronze.png',
        itemClass: 'bronze',
      },
    ],

    bmBottomSec: [
      {
        title: 'Nisolo Travel Derby',
        description:
          '<a href="https://gosendbox.netlify.app/2ORw8a4" target="_blank">Nisolo’s Travel Derbys</a> exceeded all our criteria. These ultra-packable shoes weigh under 0.5 pounds each and are completely collapsible so they pack flat. The sole is shock-absorbing and supportive, and our tester walked for miles in these without complaints of tiredness or foot pain.</br></br>The Nisolo Travel Derbys were one of the most stylish pairs we saw on the market this season, with an Oxford-esque look that can be dressed up or down and won’t peg you as a tourist in any city around the world.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2ORw8a4',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572369727Nisolo-Gold.png',
        reason: 'Reasons to Buy',
        reasonList: ['Completely collapsible', 'Ultra-lightweight', 'Stylish'],
      },
      {
        title: 'Samuel Hubbard Dress Fast',
        description:
          '<a href="https://gosendbox.netlify.app/33zUIjX" target="_blank">Samuel Hubbard’s Dress Fast</a> shoes earned high marks for their all-day comfort. These shoes are made of incredibly soft and supple leather that allows them to fit like a glove from the get-go, with no need for a break-in period. The insides of these shoes are lined with the same leather—a detail that helps to eliminate pressure and therefore blisters.</br></br>These shoes have custom Vibram soles to make walking on hard sidewalks comfortable and a removable triple-density memory foam insole to absorb even more shock. The Dress Fasts are a hybrid between a casual sneaker and a dress shoe, with a low-profile, versatile design. ',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/33zUIjX',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572369806SamuelHubbard-Silver.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Ultra-soft leather',
          'Custom Vibram soles',
          'Triple-density memory foam insole ',
        ],
      },
      {
        title: 'OluKai Kahu Pahaha',
        description:
          'Elevate your everyday look with <a href="https://gosendbox.netlify.app/2NwNfMm" target="_blank">OluKai’s Kahu Pahahas</a>, which take the standard sneaker style and upgrade it with smooth leather. Aside from the style, the Kahu Pahahas were a favorite due to their lightweight and all-weather outsoles that are specially designed to add traction on wet surfaces. </br></br>The drop-in heel that easily allows these shoes to be slipped on and off is a nice touch for travelers, as is the removable and washable soft microfiber footbed.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2NwNfMm',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572369835Olukai-Bronze.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Drop-in heel',
          'Removable and washable footbed',
          'Full-grain leather upper',
        ],
      },

      {
        title: 'Cole Haan Generation ZEROGRAND Suede',
        description:
          'Cole Haan’s new <a href="https://gosendbox.netlify.app/32lsOIq" target="_blank"> Generation ZEROGRAND shoes</a>  are the lightest sneakers to date in this innovative line. The Generation ZEROGRANDs take traditional sneaker technology and put it in a stylish suede package.</br></br>These ultra-lightweight shoes have cushioning hidden in three separate places: the outsole, the footbed, and the sock liner. There’s also a unique outsole design that absorbs shock and provides arch support.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/32lsOIq',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370081ColeHaanGeneratonZEROGRANDSuede.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Extremely lightweight',
          'Soft suede upper',
          'Plenty of cushioning ',
        ],
      },

      {
        title: 'Ecco Soft 8 Tie',
        description:
          '<a href="https://gosendbox.netlify.app/ECCO-Mens-Soft-Fashion-Sneaker/dp/B07FVNLDC5/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=59e643537dc27d147d7ec5b2ab04bc9c&language=en_US" target="_blank">Ecco’s Soft 8 Tie shoes</a> feature a trademarked ECCO Comfort Fibre System in the sole, which gives these sneakers extra support and shock absorption. These clean-looking shoes are minimally branded and have a timeless design.</br></br>The Soft 8s are lined with a breathable leather that will keep you comfortable, even in hot temperatures.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/ECCO-Mens-Soft-Fashion-Sneaker/dp/B07FVNLDC5/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=59e643537dc27d147d7ec5b2ab04bc9c&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370118ecco-soft-mens-tie-8.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Clean design',
          'Extra support',
          'Breathable leather lining',
        ],
      },

      {
        title: 'HOKA ONE ONE Hupana Flow Wool',
        description:
          'For a versatile shoe that you can wear to the gym or exploring around a new city, look no further than the <a href="https://gosendbox.netlify.app/2VM3KHL" target="_blank">HOKA ONE ONE Hupana Flow Wools</a>. These sneakers are designed for road runs, gym work, and casual walks, and our testers rated these shoes as one of the most supportive on our list.</br></br>The woven knit wool blend gives these shoes a more stylish look than regular athletic sneakers, and it wicks away moisture and prevents odors.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2VM3KHL',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370169HOKA-ONE-ONE-Hupana-Wool.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Versatile',
          'Woven knit-wool blend',
          'No-tie elastic laces',
        ],
      },

      {
        title: 'SeaVees Hawthorne Slip-On Standard',
        description:
          'The slip-on, simple design of <a href="https://gosendbox.netlify.app/32kGnaO" target="_blank">SeaVees’ Hawthornes</a> makes these great shoes for long travel days. The smooth poplin twill fabric is easy to wipe clean and doesn’t look too fussy.</br></br>A contoured foam footbed adds additional support and cushioning to stand up to more mileage.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/32kGnaO',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370216SeaVeesHawthorneSlipOnStandard.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Slip-on design',
          'Contoured foam footbed',
          'Poplin twill fabric',
        ],
      },

      {
        title: 'Skechers Lite Lugg Woods',
        description:
          '<a href="https://gosendbox.netlify.app/2BbkqPA" target="_blank">Skechers’ Lite Lugg Woods</a>’ practically seamless knit fabric basically guarantees a blister-free experience, plus offers plenty of give for long travel days when your feet might swell. The fabric may be lightweight, but it’s still water-resistant, thanks to a Scotchgard treatment.</br></br>These shoes slip on and off easily but have a padded collar to help keep them in place while you’re wearing them. Inside, a Memory Foam Lux insole adds extra cushioning and comfort.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2BbkqPA',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572585826Sketchers_Lite_Lugg-2.png',
        reason: 'Reasons to Buy',
        reasonList: ['Lightweight', 'Packs nearly flat', 'Smooth knit fabric'],
      },

      {
        title: 'SKYPRO Oleg Antonov',
        description:
          'All of SKYPRO’s shoes are designed with aviation professionals—people who spend long hours on their feet—in mind. The <a href="https://gosendbox.netlify.app/2nMFrwU" target="_blank">Oleg Antonovs</a> are extremely good-looking and would be a great shoe to pack for business travel or fancier outings.</br></br>These shoes are handcrafted in Portugal out of premium leather and feature a cushioned footbed with added heel support. Since SKYPROs are made for cabin crew, they won’t set off any metal detectors and are anti-static and shock-absorbing.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2nMFrwU',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370295Skypro-Oleg_Antonov.png',
        reason: 'Reasons to Buy',
        reasonList: ['Handsome design', 'Handcrafted', 'Extra heel support'],
      },
    ],
    bmVideo: {
      videId: '4QKgsttokvA',
      videoTitle:
        "Best Travel Shoes (for Men and Women) |  Editors' Choice Awards 2019",
      videoDescription:
        'Want to see the other category winners? Check out the <a href="#" target="_blank">The Best New Travel Gear of 2019</a> on ’s YouTube channel!',
    },
  };
  /* product list Women Shoes   */
  var womenShoes = {
    mainTitle:
      "2019 Editors' Choice Finalists: Travel Shoes for Women (Alphabetical)",
    winnerTitle: "2019 Editors' Choice Winners: Travel Shoes for Women",
    bmTopBanner: {
      heading: 'Editors’ Choice Awards: Best New Travel Shoes for Women 2019',
      bannerImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571034980banner2.jpg',
      bannerDesc:
        'To find the best new travel shoes for women, we handpicked the most innovative new releases for 2019, limiting our search to shoes (no boots or sandals allowed).<br><br> Each shoe was put through a rigorous wear-test, in which our intrepid editors took the shoes across miles and miles of varied terrain. The footwear was then evaluated on the following criteria: style, versatility, technology, weight, packability, comfort, number of miles you could wear the shoes for, and arch support.<br><br> We then narrowed the shoes down to 10 finalists, which underwent even more extensive testing to determine the gold, silver, and bronze winners.',
      bannerSubHead: 'Editors’ Choice Oct 1, 2019',
      //bannerImage
      bannerSmallImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571984133bannerleaf.png',
      bannerSmallText: '2019 Editors’ Choice',
      bannerLargeText: 'Best New Travel Shoes for Women',
      bannerProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370458KedsDoubleDeckerPerfSuede.png',
    },
    bmTopSec: [
      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'GOLD WINNER',
        topDescrmobile: 'GOLD',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'Keds Double Decker Perf Suede',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/2IG4gBZ',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370458KedsDoubleDeckerPerfSuede.png',
        itemClass: 'gold',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'SILVER WINNER',
        topDescrmobile: 'SILVER',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'Cole Haan Generation ZEROGRAND',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/2OE4EVd',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370503ColeHaanGenerationZEROGRAND.png',
        itemClass: 'silver',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'BRONZE WINNER',
        topDescrmobile: 'BRONZE',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'ECCO Soft 8 Tie',
        TopButtonText: 'Buy It Now',
        TopProductUrl:
          'https://gosendbox.netlify.app/ECCO-Womens-Fashion-Sneaker-Black/dp/B01I6GUGE4/ref=as_li_ss_tl?dchild=1&keywords=ecco+soft+8+leisure+tie&qid=1570734423&s=apparel&sr=1-7&th=1&psc=1&linkCode=ll1&tag=smartrav-20&linkId=04b10bc7468bcb37d35eb88db4ed1b4b&language=en_US',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370556ECCOWomensSoftTie8.png',
        itemClass: 'bronze',
      },
    ],

    bmBottomSec: [
      {
        title: 'Keds Double Decker Perf Suede',
        description:
          'Keds are the classic American shoe, but this solid standby gets a gold-medal-worthy upgrade in the <a href="https://gosendbox.netlify.app/2IG4gBZ" target="_blank">Double Decker Perf Suede</a>. The trademarked Dream Foam footbed adds an incredible amount of cushioning and arch support that’s rare to find in a slip-on-style shoe. This shoe was comfortable from the moment we put it on, thanks to a soft twill lining on the inside.</br></br>Straight out of the box, this shoe was worn for miles of walking without causing any blisters. Out of all the shoes we tested, this one was not only the most versatile, pairing well with all types of outfits, but it was also one of the most affordable.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2IG4gBZ',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370458KedsDoubleDeckerPerfSuede.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Slip-on style is great for airport security',
          'Affordable price',
          'Comfortable Dream Foam footbed',
        ],
      },
      {
        title: 'Cole Haan Generation ZEROGRAND',
        description:
          'Sporty yet still stylish, <a href="https://gosendbox.netlify.app/2OE4EVd" target="_blank"> Cole Haan’s Generation ZEROGRAND</a> is the ultimate shoe for exploring new cities. You can wear this low-profile sneaker with dresses or jeans and not look out of place. These sneakers have a lacing system that locks into place, so they offer the benefits of shoelaces but can function as a slip-on.</br></br>The Stitchlite knit upper makes these shoes unbelievably lightweight—when our testers received the box containing the Generation ZEROGRAND, they thought it was empty. Despite the light weight, these sneakers have a sturdy yet springy sole that absorbs shock, plus plenty of arch support.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2OE4EVd',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370503ColeHaanGenerationZEROGRAND.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Can walk all day comfortably',
          'Stylish design',
          'Incredibly lightweight',
        ],
      },
      {
        title: 'ECCO Soft 8 Tie',
        description:
          'The <a href="https://gosendbox.netlify.app/ECCO-Womens-Fashion-Sneaker-Black/dp/B01I6GUGE4/ref=as_li_ss_tl?dchild=1&keywords=ecco+soft+8+leisure+tie&qid=1570734423&s=apparel&sr=1-7&th=1&psc=1&linkCode=ll1&tag=smartrav-20&linkId=04b10bc7468bcb37d35eb88db4ed1b4b&language=en_US" target="_blank">ECCO Soft 8 Ties</a> have a very on-trend sneaker style. These shoes class up the everyday sneaker look with a rich full-grain leather. The Soft 8 Ties are anatomically designed—our  testers found that they molded to their feet after just a few wears.</br></br>These sneakers come with a removable, leather-covered insole that can be taken out for a wider fit, or left in for extra cushioning and support. Our testers found that these shoes were comfortable to walk in with minimal break-in time needed, plus they were lightweight for easy packing.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/ECCO-Womens-Fashion-Sneaker-Black/dp/B01I6GUGE4/ref=as_li_ss_tl?dchild=1&keywords=ecco+soft+8+leisure+tie&qid=1570734423&s=apparel&sr=1-7&th=1&psc=1&linkCode=ll1&tag=smartrav-20&linkId=04b10bc7468bcb37d35eb88db4ed1b4b&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370556ECCOWomensSoftTie8.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'On-trend design',
          'Removable insole for wider fit or extra support',
          'Minimal break-in time needed',
        ],
      },

      {
        title: 'Chacos Ionia Leather Slip-On',
        description:
          'Packing minimalists should look to the <a href="https://gosendbox.netlify.app/2IDzhGP" target="_blank">Ionia Leather by Chaco</a>. The leather upper and fine detailing throughout elevate the look of these casual slip-ons. They easily blend with many travel wardrobes and make feet look slender.</br></br>What sets this shoe above the rest, however, is the Ionia Leather’s Luvseat insole. The superior cushioning is felt throughout, with extra emphasis on the arch. Don’t be surprised to find yourself reaching for the Ionia’s removable shoe insole to make other shoes with inadequate sole support more comfortable.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2IDzhGP',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370670ChacosIoniaLeatherSlipOn.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Removable Luvseat insole',
          'Extra arch support',
          'Superior cushioning',
        ],
      },

      {
        title: 'Merrell Range AC+',
        description:
          'The <a href="https://gosendbox.netlify.app/2VHzEVU" target="_blank">Merrell Range AC+</a> is a versatile option for adventure seekers ready to challenge everything from city streets to hiking trails. And because they’re light and malleable, they’re very packable.</br></br>What the Range AC+ lacks in insole support it makes up for in comfort everywhere else. The sneaker’s stretch-knit uppers gently hug the foot, allowing plenty of circulation and making sockless malodor problems practically nonexistent.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2VHzEVU',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370708MerrellRangeAC.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Breathable stretch-knit uppers',
          'Can be worn sockless',
          'Lightweight',
        ],
      },

      {
        title: 'Nisolo Sedona Travel Derby',
        description:
          'The <a href="https://gosendbox.netlify.app/30XTmxO" target="_blank">Nisolo Sedona Travel Derbys</a> are by far the most packable sneaker on this list, so if you’re looking to save space and travel light, you’ll want to invest in these. The Sedonas are completely collapsible, so they fold down flat without losing the shape.</br></br>A trademarked XL Extralight sole helps make these sneakers three times lighter than most shoes—they weigh under a pound per pair. The soles are not only ultra-light but waterproof, anti-microbial, and shock-absorbing as well.</br></br>The pointed toe gives these shoes an extra touch of style, as does the incredibly soft suede upper.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/30XTmxO',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370749NisoloSedonaTravelDerby.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Three times lighter than most shoes',
          'Packs down flat',
          'Stylish pointed-toe design',
        ],
      },

      {
        title: 'Olukai Hale’iwa',
        description:
          '<a href="https://gosendbox.netlify.app/OLUKAI-20380-Womens-Haleiwa-Shoes/dp/B07GNVYWTP/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=1453142c463f8162b530e420fda0fa52&language=en_US" target="_blank">Olukai’s Hale’iwas</a> put a sporty yet stylish spin on the standard slip-on shoe. Our testers appreciated the heel pull loop and elastic gore panel that made these shoes easy to take on and off without sitting down.</br></br>These slip-ons were deemed perfect for wet conditions, thanks to the wet grip rubber outsole. Although low-profile, the Hale’iwas have quite a bit of cushioning, including an anatomical footbed with a gel insert and a breathable microfiber footbed cover (that can be removed and machine-washed).',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/OLUKAI-20380-Womens-Haleiwa-Shoes/dp/B07GNVYWTP/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=1453142c463f8162b530e420fda0fa52&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370788OlukaiHalelwaSlip-Ons.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Removable, machine-washable microfiber footbed cover',
          'Elastic gore panels for a custom fit',
          'Great on wet surfaces',
        ],
      },

      {
        title: 'SeaVees Baja Slip-On Standard',
        description:
          'Made out of vintage washed linen, <a href="https://gosendbox.netlify.app/2M5dJVJ" target="_blank">SeaVees Baja Slip-On Standards</a> are casually cool. Although the slip-ons seem unstructured, they withstood some serious walking thanks to the contoured foam footbed and cushiony outsole.</br></br>The Bajas are lightweight but still feel sturdy and have a long-lasting sole.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2M5dJVJ',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370938SeaVeesBajaSlipOnStandard.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Casually cool design',
          'Contoured foam footbed',
          'Long-lasting, shock-absorbing outsole',
        ],
      },

      {
        title: 'Skechers Cleo Bewitch',
        description:
          'These ballet flats felt like “wearing slippers,” according to one tester. The soft woven stretch knit fabric is practically seamless, so it doesn’t rub or cause blisters. The elastic collar secures the <a href="https://gosendbox.netlify.app/Skechers-Womens-Cleo-Bewitch-Ballet/dp/B06XPFG2HK/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=663ac96090b69298659470a989e485fd&language=en_US" target="_blank">Cleo Bewitch</a> firmly on your feet. Inside, an air-cooled memory foam insole keeps your feet from overheating, plus offers cushioning.</br></br>We love the fashion-forward look of these flats, with a tapered pointed toe and slightly scalloped design.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/Skechers-Womens-Cleo-Bewitch-Ballet/dp/B06XPFG2HK/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=663ac96090b69298659470a989e485fd&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572370989SketchersCleoBewitch.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Stylish details',
          'Seamless knit fabric design',
          'Air-cooled memory foam insole',
        ],
      },

      {
        title: 'Tropicfeel Canyon Sneaker',
        description:
          'Designed for active trips, <a href="https://gosendbox.netlify.app/2q36Xal" target="_blank">Tropicfeel’s Canyon Sneakers</a> really shine during water activities. The Canyons have a patented treatment that allows them to dry quickly, a slip-resistant outsole, and a unique coating that keeps odors at bay.</br></br>These vegan-friendly shoes are made from sustainable recycled polyester made of 3.5 recycled plastic bottles, and they weigh in at just seven ounces per shoe.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2q36Xal',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572417822Core_Black_2_1800x1800.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Weighs just seven ounces per shoe',
          'Quick-drying',
          'Odor-resistant',
        ],
      },
    ],
    bmVideo: {
      videId: '4QKgsttokvA',
      videoTitle:
        "Best Travel Shoes (for Men and Women) |  Editors' Choice Awards 2019",
      videoDescription:
        'Want to see the other category winners? Check out the <a href="https://www.youtube.com/watch?v=AOawFFBWL4E" target="_blank">The Best New Travel Gear of 2019</a> on ’s YouTube channel!',
    },
  };

  /* Best New Carry-On Luggage 2019   */
  var carryOn = {
    mainTitle:
      "2019 Editors' Choice Finalists: Carry-on Luggage (Alphabetical)",
    winnerTitle: "2019 Editors' Choice Winners: Carry-on Luggage",
    bmTopBanner: {
      heading: 'Editors’ Choice Awards: Best New Carry-On Luggage 2019',
      bannerImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571034980banner2.jpg',
      bannerDesc:
        'This year’s batch of 2019 carry-on suitcases dazzled us with new features, superior performance, and serious style. Not content to look to the past for cues on what a suitcase should be, these carry-ons stand out by embracing classic features while weaving in innovations that are reshaping how we travel. Selecting winners among the best carry-on suitcases of 2019 has been a tough road, full of cobblestones, stairs, and overpacking adventures. All finalists performed exceptionally, and any could be your perfect suitcase.</br></br>In our best new carry-ons for 2019 category, we assessed new-this-year bags that were 22 inches or shorter and cost less than $500. We tested durability and looked for strengths and weaknesses. We also compared features, size/weight, price, ease of packing, and style, culminating in reviews of the 11 finalist suitcases. From this pool we selected a gold, silver, and bronze winner. Since each of the finalist suitcases had winning qualities, we’ve given you the details of each.',
      bannerSubHead: 'Editors’ Choice Oct 1, 2019',
      //bannerImage
      bannerSmallImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571984133bannerleaf.png',
      bannerSmallText: '2019 Editors’ Choice',
      bannerLargeText: 'Best New Carry-On Luggage 2019',
      bannerProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572585443TravelproGold-2.png',
    },
    bmTopSec: [
      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'GOLD WINNER',
        topDescrmobile: 'GOLD',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'Travelpro Crew VersaPack',
        TopButtonText: 'Buy It Now',
        TopProductUrl:
          'https://gosendbox.netlify.app/Travelpro-407186301-Carry-On-Jet-Black/dp/B07QW9LMRT/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=644c88c9ef4c045d3c8ab355c7f20096&language=en_US',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572585443TravelproGold-2.png',
        itemClass: 'gold',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'SILVER WINNER',
        topDescrmobile: 'SILVER',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'Away Daily Carry-On with Pocket',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/2oTiBnn',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371249AwaySilver.png',
        itemClass: 'silver',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'BRONZE WINNER',
        topDescrmobile: 'BRONZE',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'Eagle Creek Gear Warrior 4-Wheel Carry-On',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/2LK5q1d',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371271EagleCreekBronze.png',
        itemClass: 'bronze',
      },
    ],

    bmBottomSec: [
      {
        title: 'Travelpro Crew VersaPack',
        description:
          'Innovation is generally slow when it comes to these boxes on wheels we call rolling carry-ons, but Travelpro has nailed it this year with its new <a href="https://gosendbox.netlify.app/Travelpro-407186301-Carry-On-Jet-Black/dp/B07QW9LMRT/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=644c88c9ef4c045d3c8ab355c7f20096&language=en_US" target="_blank">Crew VersaPack Global Carry-On Expandable Spinner</a>. This eight-wheeled (four sets of two for control and stability) carry-on has a four-position telescoping handle—a detail that makes it adaptable to people of different heights while also making it comfortable both for gliding alongside or pulling behind. The exterior has four zippered pockets; the top one even comes with a TSA-compliant, heavy-duty, zippered quart-sized bag. An external USB port near the handle is useful, but it’s the zippered pocket on the side where you’d stash your battery pack that ends up being a great spot to store both the battery and your phone when you’re charging on the go.</br></br>Inside, the Crew VersaPack comes with a garment organizer zipped into its top lid, a feature that can be used to preserve folded shirts, dresses, and jackets. This organizer can be removed and replaced by one of four additional Zip-In Organizers, including an all-in-one organizer that combines a large compartment with a smaller waterproof pocket and a netted pocket. The other three options are a waterproof laundry organizer, a two-packing-cube zip-in, and a suiter.</br></br>Zip-in organizers are the standout luggage innovation of the year. Starting with a single dependable, attractive, and durable carry-on, TravelPro has effectively created a system in which a traveler can have four suitcase layouts in one, offering a new, space-saving way to maximize travel functionality while minimizing luggage storage space at home.</br></br>In tests, the Crew VersaPack always delivered. Stable with strong zippers and useful features, this favorite is a real pleasure to travel with.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/Travelpro-407186301-Carry-On-Jet-Black/dp/B07QW9LMRT/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=644c88c9ef4c045d3c8ab355c7f20096&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572585443TravelproGold-2.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Zip-In Organizer system',
          'External battery pack stash pocket',
          'Four-position telescoping handle',
        ],
      },
      {
        title: 'Away Daily Carry-On with Pocket',
        description:
          "Even if you’re familiar with Away, you’ll be surprised by the features of the new <a href='https://gosendbox.netlify.app/2oTiBnn' target='blank'>Daily Carry-On with Pocket</a>. Shorter and squarer than its older siblings, it’s full of features that make it a winner. Though it's a hardside bag, it also has abundant exterior pockets. A large, zippered exterior pocket reveals additional organizational pockets, including a padded laptop sleeve, an additional zippered pocket, and a quick-stash pocket. The exterior also features a second, smaller zippered pocket.</br></br>This Away bag has eight wheels (four sets of two), an integrated lock, and a two-position telescoping handle. But the real big news is on the inside: a removable accordion system that allows you access to multiple compartments without fully opening the bag—you just unzip the top and reach in. It also has a built-in hidden laundry bag. Testers were won over by the thoughtful combination of features and its dependable performance on the road. Smaller in capacity than the larger Away carry-on, it’s nonetheless a serious contender for best carry-on of the year.",
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2oTiBnn',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371249AwaySilver.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Accordion system that allows easy access',
          'Hardside suitcase with pockets',
          "Size that's ideal for weekends and shorter trips",
        ],
      },
      {
        title: 'Eagle Creek Gear Warrior 4-Wheel Carry-On',
        description:
          "Eagle Creek’s new <a href='https://gosendbox.netlify.app/2LK5q1d' target='blank'>Gear Warrior 4-Wheel Carry-On</a> blends durable functionality with rugged style. Water-resistant and sustainable fabrics include 100 percent recycled PET ripstop and Hypalon-reinforced corners. A roomy front zippered pocket has a padded laptop sleeve and enough room left over to stash grab-and-go items. The telescoping handle locks into three positions, and Eagle Creek’s signature Equipment Keeper bungee system makes it easy to secure a jacket (or other gear) on top of the bag as you roll it. With all sorts of grab handles, there’s virtually no angle from which you couldn’t easily hoist this carry-on.</br></br>Inside, it’s all business: A single main compartment (which also houses the casing for the telescoping handle, meaning the bottom isn’t perfectly flat) has heavy-duty compression wings to keep contents secure. A medium-sized netted zippered pocket on the door panel offers some basic built-in organization, and the interior is compatible with Eagle Creek's Pack-It system of cubes. This bag combines useful features with a tough construction, making it a great choice for people who want to see the world without wondering if their suitcase is up to the task.",
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2LK5q1d',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371271EagleCreekBronze.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Padded laptop sleeve',
          'Equipment-Keeper bungee system',
          ' Compression wings (rather than just straps) to contain clothing better',
        ],
      },

      {
        title: 'Briggs & Riley Torq International Carry-on Spinner',
        description:
          'Briggs & Riley is well known for its high-quality luggage, and the <a href="https://gosendbox.netlify.app/330ud7u" target="_blank">Torq International Carry-on Spinner</a> is no exception. This 21-inch hard-shell suitcase has plenty of handy features, including a TSA-friendly combination lock and a USB-charging port so you can easily power up your phone at the airport. Its best feature is the easy-access front compartment, with sleeves for a laptop and tablet as well as an RFID-blocking pocket for credit cards. (Note, however, that it can be difficult to open this front compartment when the main part of the bag is completely stuffed.) The eight spinner wheels handle corners well and glide smoothly over most surfaces. A built-in garment bag, mesh divider, and compression straps help you keep items organized within the roomy main compartment.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/330ud7u',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371398BriggsRileyTorqInternationalCarry-onSpinner.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Hinged external pocket to stow a laptop and other essentials',
          'TSA-approved lock and USB charging cord',
          'Lifetime repair guarantee, even if an airline does damage to the bag',
        ],
      },

      {
        title: 'Genius Pack Supercharged',
        description:
          'The <a href="https://gosendbox.netlify.app/356YlPM" target="_blank">Genius Pack Supercharged</a> is the latest addition to the Genius Pack family and delivers all the organization-focused design you expect, plus next-generation tech-focused functionality that eliminates battery-life anxiety from travel days. Based on its beloved Aerial Carry, the Genius Pack Supercharged is an upgrade designed for enhanced utility. The lightweight polycarbonate shell houses exterior features including a TSA-approved combination lock, a dual-position telescoping handle, and eight wheels for smooth 360-degree spinning capability. Two USB ports connect to a TSA-friendly removable power pack that has more power than most—it can charge a phone up to four times without needing to be recharged.</br></br>Inside, the Genius Pack signature magic happens: Labeled zippered compartments minimize the need for individual packing cubes, and a separate compartment can be used to layer hanging clothes (it comes with a garment loop) or for laundry. Traveling with the Genius Pack Supercharged was a seamless experience—the features were useful rather than just decorative, the size was just right (large enough to maximize every inch of carry-on space, but small enough to fit easily into the airplane overhead compartment), and it rolled easily over a variety of surfaces, including slushy streets and uneven sidewalks.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/356YlPM',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371475GeniusPackSupercharged.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Two USB ports',
          'Integrated organizational compartments',
          'Separate laundry compartment',
        ],
      },

      {
        title: 'Heys EcoLite 21" Spinner Luggage',
        description:
          'The <a href="https://gosendbox.netlify.app/Heys-EcoLite-Spinner-Luggage-Charcoal/dp/B07W1527JC/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=903efa25701f4980f027ff6d187c9e24&language=en_US" target="_blank">Heys EcoLite Spinner Luggage</a> is made from recycled water bottles, which is a great thing for a couple of reasons: It keeps plastic out of landfills, and the PET material makes this an ultralight bag, weighing just 6.5 pounds. The 360-degree dual spinner wheels support a sweet glide, and the built-in combination lock—TSA-accepted—adds extra security. The Heys EcoLite 21-inch bag is surprisingly roomy. In testing, we packed three packing cubes or toiletry/shoe bags in each side of the suitcase (for a total of six); everything fit and stayed in place thanks to a zippered compartment on one side and the compression belt straps on the other. Overall, the Heys EcoLite rolling carry-on bag offers a solid, lightweight construction and avoids unnecessary features that put on extra pounds.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/Heys-EcoLite-Spinner-Luggage-Charcoal/dp/B07W1527JC/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=903efa25701f4980f027ff6d187c9e24&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371515Heys_Ecolite21.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Protective yet ultra-lightweight hard shell',
          'Post-consumer recycled material that reduces landfill waste',
          'Smoothly gliding 360-degree spinner wheels',
        ],
      },

      {
        title: 'Osprey Fairview',
        description:
          'The only convertible carry-on on this list, the <a href="https://gosendbox.netlify.app/Osprey-Fairview-Womens-Wheeled-Luggage/dp/B07PBBM7BN/ref=as_li_ss_tl?crid=22UK9F0BZPY81&dchild=1&keywords=osprey+fairview+wheeled+travel+pack+36&qid=1570145565&sprefix=Osprey+Fairview+wheeled,aps,206&sr=8-1&linkCode=ll1&tag=smartrav-20&linkId=dc45c53bcea0b4c9e7b99bf6cf6a8316&language=en_US">Osprey Fairview Wheeled Travel Pack 36</a> successfully delivers both as a rolling carry-on and a backpack—all while being the lightest carry-on in our top 11, a feature that can mean the difference between carrying on and checking on international flights where carry-on weight is a concern. The ability to switch between a rolling carry-on and an ultra-functional backpack is invaluable, though you lose a bit of interior space because of the design, which has to make room for both the telescoping handle and the well-designed backpack (which comes complete with tensioned mesh back panel, padded shoulder straps, and a hip belt). The resulting interior has a base that’s contoured as a gentle triangle, which can require some rethinking, especially if you’re used to traveling with packing cubes.</br></br>That’s not to say the interior isn’t thoughtfully designed, though—inside you’ll find both large compression panels and a zippered door panel pocket. On the Fairview’s exterior, attachment loops and lashing points mean you can attach things like sleeping pads (when you’re going full backpacker) or a scarf or jacket when you’re in suitcase mode. A single-tube telescoping handle, roomy top and front pockets, and two large wheels that navigate tight spaces deliver superior rolling carry-on performance. Travelers who want the flexibility of being able to roll and carry comfortably over long distances will find the Osprey Fairview (and Farpoint, see note below) a perfect fit.</br></br>Note: The Fairview is designed for women; for men, the equivalent <a href="https://gosendbox.netlify.app/Osprey-Packs-Farpoint-Wheeled-Luggage/dp/B07PBBKNCH/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=a9b44d921e245539c666644f13821fc4&language=en_US" target="_blank">Farpoint Wheeled Travel Pack</a> offers the same features with a backpack formatted for male bodies.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/Osprey-Fairview-Womens-Wheeled-Luggage/dp/B07PBBM7BN/ref=as_li_ss_tl?crid=22UK9F0BZPY81&dchild=1&keywords=osprey+fairview+wheeled+travel+pack+36&qid=1570145565&sprefix=Osprey+Fairview+wheeled,aps,206&sr=8-1&linkCode=ll1&tag=smartrav-20&linkId=dc45c53bcea0b4c9e7b99bf6cf6a8316&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371566OspreyFairviewWheeledTravelPack.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Rolling carry-on and backpack in one',
          'Separate designs for women (Fairview) and men (Farpoint)',
          'Lightweight',
        ],
      },

      {
        title: 'Patagonia Black Hole Wheeled Duffel',
        description:
          'Patagonia’s <a href="https://gosendbox.netlify.app/31MleGj" target="_blank">Black Hole Wheeled Duffel</a> may technically be a duffel bag, but it sure performs like a tough and dependable rolling carry-on. Its 100 percent post-consumer recycled polyester body has a structured bottom and a water-repellent soft top. A single exterior pocket runs along the side of the bag instead of the top and is roomy enough for a ticket or a paperback book. A single-position telescoping handle and two wide-set wheels offer good handling and minimize tipping. Inside, you really get a sense of its large capacity—at 40 liters, it’s among the biggest of the bunch. This is a choose-your-own-adventure bag: The large single compartment is ideal for people who want to be in charge of how they pack, even if being in charge just means stuffing things in there. Inside are two compression straps to secure items, and the inside of the door panel is divided into two netted zippered pockets. Strong, sturdy, and interesting enough to stand out in the crowd, the Patagonia Black Hole Wheeled Duffel would be a good longtime companion for someone whose travels take them both on and off the beaten track.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/31MleGj',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371607PatagoniaBlackHoleWheeledDuffel40L.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Large capacity',
          'Eye-catching design',
          'Single large interior compartment with zippered pockets',
        ],
      },

      {
        title: 'REI Co-Op Tourwinder 22” Rolling Bag',
        description:
          'The <a href="https://gosendbox.netlify.app/2V9WENf" target="_blank">REI Co-Op Tourwinder 22”</a> rolling bag is clearly up for rugged adventure but would be just as at home on a business trip. Its ripstop nylon upper is paired with a structured Cordura polyester base for strength and durability. A tuck-away piggyback attachment allows you to hang an additional bag, and somehow—perhaps due to the large wheels and kickstand—even though this is a two-wheeled bag, it’s able to take quite a bit of attached weight (for instance, a tote bag full of books) without tipping over. A generous external pocket is large enough to hold your 3-1-1 bag, and an additional open-topped pocket makes it easy to stash items on the fly. It has a single-height telescoping handle and comfortable side handles that make hoisting easy. Inside there’s a single deep compartment, and four zippered interior pockets (including a large pocket roomy enough for a pair or two of shoes) offer built-in organization as well. This new addition from REI delivers the brand’s famous dependability with style that simultaneously says yes to both adventure and rooftop martinis.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2V9WENf',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371653REITourwinder22RollingBag.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Built-in organization',
          'Integrated piggyback attachment',
          'Surprising stability for a two-wheeled bag',
        ],
      },
      {
        title: 'Samsonite Silhouette 16 Expandable 2-Wheeled Carry-on',
        description:
          'Simple but thoughtful design marks the new <a href="https://gosendbox.netlify.app/2BT7wGk">Silhouette 16 Expandable</a> two-wheeled carry-on from Samsonite. Ample expansion makes it adaptable on the go. The telescoping handle has a whopping eight heights, making it the most ergonomically adaptable of the bunch. Two exterior zippered front pockets—one smaller, one larger—offer easy access for items you need on the fly, but note that putting heavy items like laptops in the large front pocket can make the bag unstable (depending on how much weight is in the main compartment of the carry-on to act as a counterbalance).</br></br>The most exciting exterior feature has to be the discreet back zippered charging pocket with integrated USB port and cable plus an additional pocket to secure a phone—a great way to charge when you’re in transit. Inside, a large single compartment offers plenty of capacity. Interior compression straps have a built-in additional zippered pocket that makes small items easy to access. A snap-out waterproof zippered pocket helps contain wet or leaky items. The door panel has a double layer of organization, with a large flat compartment plus a zippered mesh pocket. In tests, this bag handled stairs, being overstuffed, and extensive use well. Samsonite has long earned its reputation for producing some of the best bags in the business, and the Silhouette lives up to the legacy.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2LMjMhM',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371712SamsoniteSilhouette16Expandable2-wheeledcarry-on.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Eight-position telescoping handle',
          'Innovative zippered external charging pocket',
          'Compression straps with built-in storage',
        ],
      },
      {
        title: 'Victorinox Connex Frequent Flyer',
        description:
          'Victorinox’s new hardside <a href="https://gosendbox.netlify.app/Victorinox-Connex-Frequent-Carry-Hardside/dp/B07JZ3B493/ref=as_li_ss_tl?dchild=1&keywords=Victorinox+Connex+Frequent+Flyer&qid=1570144284&sr=8-4&linkCode=ll1&tag=smartrav-20&linkId=1b920265d3ea480d33f511d69dfd7c9e&language=en_US">Connex Frequent Flyer</a> doesn’t flaunt its abundance of smart features—but sometimes that’s just what you want in a carry-on. The textured hardside exterior masks scuffs in a way that most hard-shell suitcases simply don’t. With eight wheels (four sets of two), it offers unusual stability—you really have to try to tip this one over. At 6.5 pounds, it’s relatively lightweight, but with an expansion zipper, it can also hold a lot.</br></br>It wouldn’t be a Victorinox without a few cool features, and the Connex delivers with an integrated multi-tool with an ID tag, pen, and SIM card replacement tool plus a built-in lock. One side of the clamshell interior zips closed to secure items, and interior zippered pockets include a mesh pocket, a padded pocket, and a pocket with a USB port. This bag only looks understated, and is sure to please Victorinox loyalists and anyone looking for a hardside suitcase that pairs form and function.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/Victorinox-Connex-Frequent-Carry-Hardside/dp/B07JZ3B493/ref=as_li_ss_tl?dchild=1&keywords=Victorinox+Connex+Frequent+Flyer&qid=1570144284&sr=8-4&linkCode=ll1&tag=smartrav-20&linkId=1b920265d3ea480d33f511d69dfd7c9e&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371778VictorinoxConnexFrequentFlyer2.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Hardside exterior that masks scuffs',
          'Integrated multi-tool',
          'Interior clamshell organization',
        ],
      },
    ],
    bmVideo: {
      videId: 'e-eN6GyhoWY',
      videoTitle:
        "Best Carry-On Luggage |  Editors' Choice Awards (2019)",
      videoDescription:
        'Want to see the other category winners? Check out the <a href="https://www.youtube.com/watch?v=AOawFFBWL4E" target="_blank">The Best New Travel Gear of 2019</a> on ’s YouTube channel!',
    },
  };

  /* Best New Travel Pillows   */

  var travelPillows = {
    mainTitle: "2019 Editors' Choice Finalists: Travel Pillows (Alphabetical)",
    winnerTitle: "2019 Editors' Choice Winners: Travel Pillows",
    bmTopBanner: {
      heading: 'Editors’ Choice Awards: Best New Travel Pillows 2019',
      bannerImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571034980banner2.jpg',
      bannerDesc:
        'When considering new travel technology, the humble travel pillow probably doesn’t come to mind. But thanks to truly innovative new materials and design, those flimsy U-shaped neck cushions that are both tough to pack and useless for sleeping on the plane could soon be a thing of the past. Whether you’re looking for collapsible memory foam, an inflating option that will actually last, or something with super-customizable support in varying sizes, you’ll find it on this list—we tried all the newest options to find out which are truly a step above the rest.</br></br>In our best new travel pillow category, we sourced cutting-edge travel pillows of varying types from more than a dozen different start-ups and established companies. Each pillow was scored based on comfort, practicality, portability, price, and durability following road tests. Meet the best travel pillows of 2019.',
      bannerSubHead: 'Editors’ Choice Oct 1, 2019',
      //bannerImage
      bannerSmallImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571984133bannerleaf.png',
      bannerSmallText: '2019 Editors’ Choice',
      bannerLargeText: 'Best New Travel Pillows 2019',
      bannerProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371919CushionLabGold.png',
    },
    bmTopSec: [
      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'GOLD WINNER',
        topDescrmobile: 'GOLD',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'CushionLab Extra-Dense Memory Foam Travel Pillow',
        TopButtonText: 'Buy It Now',
        TopProductUrl:
          'https://gosendbox.netlify.app/gp/product/B07RLYCLHW/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=smartrav-20&linkId=922c44c6b2bec8c7c64fbf6d955d2912&language=en_US',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371919CushionLabGold.png',
        itemClass: 'gold',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'SILVER WINNER',
        topDescrmobile: 'SILVER',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'Trtl Pillow Plus',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/2UQq1nl',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371955TrtlePillowSilver.png',
        itemClass: 'silver',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'BRONZE WINNER',
        topDescrmobile: 'BRONZE',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'Made by Design Gel Memory Foam Cooling Neck Pillow',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/31l8Uwt',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371982MadeByDesignbronze.png',
        itemClass: 'bronze',
      },
    ],

    bmBottomSec: [
      {
        title: 'CushionLab Extra-Dense Memory Foam Travel Pillow',
        description:
          'Even if you haven’t invested in memory foam for your mattress at home, consider it your best friend as a packable travel pillow that will actually support your head. There’s no more head flailing on the plane with the brand-new <a href="https://gosendbox.netlify.app/gp/product/B07RLYCLHW/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=smartrav-20&linkId=922c44c6b2bec8c7c64fbf6d955d2912&language=en_US" target="_blank">CushionLab Extra-Dense Memory Foam Travel Pillow</a>, which lives up to every part of its name. Its super cushiony “hyperfoam” makes for a thick neck pillow with contoured head support and two different support heights for varying sleeping positions—just slide around your neck to adjust. This travel pillow packs small into an included stuff sack with the help of a handy packing elastic, and an added carabiner clip easily attaches it to your personal item.</br></br>Nice-to-have features include a soft, moisture-wicking pillow sleeve that is washable and removes easily so you can toss it in the laundry after hours in a dirty plane cabin. An adjustable buckle at the chin stabilizes the pillow for any neck size. To boot, this CushionLab pillow is one of the most affordable memory foam travel pillows out there, with an overall low price point for such high-quality materials and thoughtful features.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/gp/product/B07RLYCLHW/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=smartrav-20&linkId=922c44c6b2bec8c7c64fbf6d955d2912&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371919CushionLabGold.png',
        reason: 'Reasons to Buy',
        reasonList: [
          '“Hyperfoam” that’s an extra-dense, super-cushioned game changer',
          'Washable case made of soft, breathable fabric',
          'Price point that’s affordable, especially for memory foam',
        ],
      },
      {
        title: 'Trtl Pillow Plus',
        description:
          'Our gold winner last year, this one-of-a-kind travel pillow still ranks silver for its patented design that’s since been optimized to come in a <a href="https://gosendbox.netlify.app/32iJX5x" target="_blank">kids’ size, too</a>. A total reinvention of the travel pillow that’s long overdue for cranky plane sleepers, the <a href="https://gosendbox.netlify.app/2PZT7ln" target="_blank">Trtl Pillow Plus</a> is an incredibly adaptable neck-support accessory that’s both secured and hidden by an attached scarf.</br></br>The Trtl Pillow Plus’s true advantage over its competitors is its adjustability: Easy-to-use inner toggles change the height of the neck support in two different spots to suit all neck sizes and styles of sleeping. It is machine-washable, packs flatter than the vast majority of non-inflating travel pillows, and is made of high-quality, comfortable materials—even its Velcro is soft, so it won’t snag on your clothing or scratch your skin. Its practicality is undeniable.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2UQq1nl',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371955TrtlePillowSilver.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Adjustable head-support toggles; the first and only of its kind',
          'Available in kid-size, or a more affordable standard style',
          'Smart features like a stealthy scarf with soft Velcro',
        ],
      },
      {
        title: 'Made by Design Gel Memory Foam Cooling Neck Pillow',
        description:
          'Cooling neck pillows are a go-to for travelers who get too warm using a traditional neck pillow, but they can be flimsy and pricey. Not so for <a href="https://gosendbox.netlify.app/2oNNWZ0" target="_blank">Target’s Made by Design Gel Memory Foam Cooling Neck Pillow</a>, which uses cooling gel technology for fabric that both breathes and molds to the shape of your neck while still providing memory-foam support. It’s slightly less supportive than the Cushion Lab pillow—which could be a pro or con depending on your preference—with a soft detachable cover that’s spot-clean only.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/31l8Uwt',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572371982MadeByDesignbronze.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Cooling technology to keep you comfortable on the plane',
          'Gel memory foam that’s supportive yet folds down small',
          'Supportive chin buckle that doubles as a packing strap',
        ],
      },

      {
        title: 'Cabeau Air Evolution Inflatable Travel Neck Pillow',
        description:
          'Inflatable travel pillows are fickle—while they’re the most packable option, changing plane cabin pressure means that one minute your pillow is tenderly cushioning your head, and the next it feels nearly deflated. That’s why only one inflating option made it into our finalist pool: The <a href="https://gosendbox.netlify.app/Cabeau-Evolution-Inflatable-Travel-Pillow/dp/B00HFFMJZW/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=smartrav-20&linkId=52f1527204734b18f62feaecbc446f00&language=en_US" target="_blank">Cabeau Air Evolution Inflatable Travel Neck Pillow</a> is the most tricked-out inflatable travel pillow on the market, with a plush washable cover that includes a media pouch for your phone, plus an adjustable chin strap and extra head support to prevent your head from tipping right or left. Plus, it all packs down into a pouch the size of a soda can—the smallest packing option on this list.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/Cabeau-Evolution-Inflatable-Travel-Pillow/dp/B00HFFMJZW/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=smartrav-20&linkId=52f1527204734b18f62feaecbc446f00&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372130Cabeau.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Soft washable cover with a phone pocket',
          'Adjustable chin strap and extra head support',
          'Soda-can-sized packing power thanks to its inflatability',
        ],
      },

      {
        title: 'Fern&Willow Adjustable Bendable Memory Foam Roll Travel Pillow',
        description:
          'A unique travel pillow that bends and twists to transform from neck to lumbar support, <a href="https://gosendbox.netlify.app/Fern-Willow-Memory-Travel-Pillow-Support/dp/B07VK41TQK/ref=as_li_ss_tl?keywords=Fern+and+Willow&qid=1568312558&sr=8-2&linkCode=sl1&tag=smartrav-20&linkId=147d9cf0af0d89ab8243f7a523db3da9&language=en_US" target="_blank">Fern&Willow’s Memory Foam Travel Pillow</a> has internal wiring that holds the shape you form it into. A washable velour cover, springy memory foam, and a snap closure at the ends make it super versatile.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/Fern-Willow-Memory-Travel-Pillow-Support/dp/B07VK41TQK/ref=as_li_ss_tl?keywords=Fern+and+Willow&qid=1568312558&sr=8-2&linkCode=sl1&tag=smartrav-20&linkId=147d9cf0af0d89ab8243f7a523db3da9&language=en_US',
        ProductImage:
          '//cdn-3.convertexperiments.com/uf/10025040/10024674/1572372239FernWillowsolo.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Bendable transforming power for lumbar, window, and neck support options',
          'Machine-washable cover that’s soft and breathable',
          'Snap-closure buttons for attaching to a personal item',
        ],
      },

      {
        title: 'HeadLeveler Custom Travel Pillows',
        description:
          'Disappointed with hotel pillows that don’t match up to your usual neck-supporting pillow at home, or just generally grossed out by using pillows other people have slept on? <a href="https://gosendbox.netlify.app/2oM0kZG" target="_blank">HeadLeveler’s custom pillows</a> are unique to your needs and come with a travel-friendly tote bag. Take the quiz to get one that fits all your sleeping needs, but don’t expect it to be travel-sized: These are full-size pillows that are less travel pillow and more full pillow in a travel bag. But they do supportively contour to your head, and are best brought along on road trips or on flights when you don’t have a personal item in tow. They’re not very packable, but they are a super supportive option that’s worthwhile for anyone who loses sleep on a hotel or vacation-rental pillow',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2oM0kZG',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372266Headleveler.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Custom shape and material made for you based on a quick and easy quiz',
          'Travel case that keeps the pillow clean and rolls up small when not in use',
          'Head-contoured shape specific to your needs and size (with male and female options)',
        ],
      },

      {
        title: 'J Pillow Travel Pillow',
        description:
          'A long-beloved travel pillow that was re-released in 2019, the award-winning <a href="https://gosendbox.netlify.app/J-Pillow-Travel-Pillow-Airplanes-Invention/dp/B019CJSDM6/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=smartrav-20&linkId=e6964860008f01971c2ddb1fd48df632&language=en_US" target="_blank">J Pillow</a> is perfect for window sleepers thanks to its head-, neck-, and chin-supporting shape that resembles the letter J. Its plush exterior and snap closure make it comfortable and easy to attach to any luggage—plus it’s machine washable.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/J-Pillow-Travel-Pillow-Airplanes-Invention/dp/B019CJSDM6/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=smartrav-20&linkId=e6964860008f01971c2ddb1fd48df632&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372202JPillow.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Unique shape that’s perfect for window sleeping',
          'Soft outer and snap-closure strap for packing',
          'Machine-washable material',
        ],
      },

      {
        title: 'TravelSnugs NeckSnug, and NeckSnug+',
        description:
          'Coming to the market soon, TravelSnugs’ NeckSnug+ is a new iteration for the <a href="https://gosendbox.netlify.app/NeckSnug-Luxury-Travel-Pillow-Memory/dp/B00YH04NZM/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=smartrav-20&linkId=1c2946ca33fa8eb4ec0dbb9a7d951afc&language=en_US" target="_blank">NeckSnug</a> that will boast a unique shape and cushiony memory foam that feels supportive while rolling up small. Its 360-degree support, washable cover, and Velcro-securing ends make it a promising new option that should be for sale in late 2019. The current NeckSnug on the market is memory foam with a unique removable insert for adjustable support, but the newer version is sure to be sleeker and more supportive if you’re willing to wait for its release.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/NeckSnug-Luxury-Travel-Pillow-Memory/dp/B00YH04NZM/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=smartrav-20&linkId=1c2946ca33fa8eb4ec0dbb9a7d951afc&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372313Snugsolo.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Uniquely shaped memory foam support',
          'Machine washable cover and drawstring travel bag',
          'Velcro-closure ends for securing',
        ],
      },
    ],
    bmVideo: {
      videId: 'nn_fhNLb-GE',
      videoTitle:
        "Best Travel Pillows |  Editors' Choice Awards (2019)",
      videoDescription:
        'Want to see the other category winners? Check out the <a href="https://www.youtube.com/watch?v=AOawFFBWL4E" target="_blank">The Best New Travel Gear of 2019</a> on ’s YouTube channel!',
    },
  };

  /* Best New Travel Tech   */

  var travelTech = {
    mainTitle: "2019 Editors' Choice Finalists: Travel Tech (Alphabetical)",
    winnerTitle: "2019 Editors' Choice Winners: Travel Tech",
    bmTopBanner: {
      heading: 'Editors’ Choice Awards: Best New Travel Tech 2019',
      bannerImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571034980banner2.jpg',
      bannerDesc:
        'The best new travel tech of 2019 should enhance the travel experience seamlessly from start to finish. We chose this year’s best by road testing 11 new gadgets that enhance the travel experience with both their innovation and their value. Here’s the best travel tech of 2019.',
      bannerSubHead: 'Editors’ Choice Oct 1, 2019',
      //bannerImage
      bannerSmallImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571984133bannerleaf.png',
      bannerSmallText: '2019 Editors’ Choice',
      bannerLargeText: 'Best New Travel Tech 2019',
      bannerProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372419BenqGold.png',
    },
    bmTopSec: [
      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'GOLD WINNER',
        topDescrmobile: 'GOLD',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'BenQ Portable Projector & Speaker',
        TopButtonText: 'Buy It Now',
        TopProductUrl:
          'https://gosendbox.netlify.app/BenQ-Portable-Projector-Bluetooth-Wireless/dp/B07NSVGDB1/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=a1673ec1c4a87d412b7017a49500c61a&language=en_US',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372419BenqGold.png',
        itemClass: 'gold',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'SILVER WINNER',
        topDescrmobile: 'SILVER',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'SANDMARC Anamorphic Lens',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/2MmvXC2',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372489SandmarcSilver.png',
        itemClass: 'silver',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'BRONZE WINNER',
        topDescrmobile: 'BRONZE',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'FlyTunes Wireless Audio Transmitter',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/2ZUm6b6',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372512FlytTunesBronze.png',
        itemClass: 'bronze',
      },
    ],

    bmBottomSec: [
      {
        title: 'BenQ Portable Projector & Speaker',
        description:
          'The <a href="https://gosendbox.netlify.app/BenQ-Portable-Projector-Bluetooth-Wireless/dp/B07NSVGDB1/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=a1673ec1c4a87d412b7017a49500c61a&language=en_US" target="_blank">BenQ Portable Projector & Speaker</a> will adjust the mood in any room. Project your favorite shows, movies, video games, or presentations for business meetings—or simply listen to music via the speakers—and do so wirelessly and seamlessly on the go.</br></br>Installing the projector is easy, and after connecting to Wi-Fi, our tester was able to stream quality footage on the wall by screen-mirroring a phone. We found the battery life to be about 90 minutes—half the time claimed by the manufacturer. However, the product will operate while charging. This travel-friendly projector weighs 1.6 pounds and does what it claims, making this a multi-functional piece of travel tech.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/BenQ-Portable-Projector-Bluetooth-Wireless/dp/B07NSVGDB1/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=a1673ec1c4a87d412b7017a49500c61a&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372419BenqGold.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Lightweight portability',
          'Wirelessly streams',
          'Also functions as a Bluetooth speaker',
        ],
      },
      {
        title: 'SANDMARC Anamorphic Lens',
        description:
          'The <a href="https://gosendbox.netlify.app/2MmvXC2" target="_blank">SANDMARC Anamorphic Lens</a> is for anyone serious about shooting better-quality videos on an iPhone. It takes video production to the next level by squeezing more horizontal information into the shot at a 2.41:1 wide-aspect ratio; the lens-flare effect captures light more vividly, especially at night; and the anamorphic, anti-reflective lens is encased in aluminum for a light yet durable exterior. Every SANDMARC lens comes with an iPhone case, or you can use your own case with the lens’ clip-on attachment.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2MmvXC2',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372489SandmarcSilver.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Professional-grade lens',
          'Wide-aspect ratio at 2.41:1',
          'Lens kit comes with a phone case',
        ],
      },
      {
        title: 'FlyTunes Wireless Audio Transmitter',
        description:
          "The <a href='https://gosendbox.netlify.app/2ZUm6b6' target='blank'>FlyTunes Wireless Audio Transmitter</a> connects Bluetooth headphones to in-flight entertainment systems, fitness machines, gaming devices, TVs, and radios. It syncs wireless headphones to any source seamlessly and affordably, and at only four inches, it takes up close to no space in an in-flight bag.</br></br>The FlyTunes won't break the bank, and if you're a wireless headphones loyalist, you'll be happy to know you can even watch the latest movies on your in-flight TV with your travel companion, since the device can be paired to two headphones. Expect battery life to run eight hours—long enough for a cross-country flight. The device comes with USB-A to -C charging cords and an AUX adapter cable, plus a carrying pouch.",
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2ZUm6b6',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372512FlytTunesBronze.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Lightweight portability',
          'Seamless Bluetooth connectivity',
          'Reasonable price',
        ],
      },

      {
        title: 'DJI Osmo Mobile 3',
        description:
          'The <a href="https://gosendbox.netlify.app/2YIRw7H" target="_blank">Osmo Mobile 3</a> is the closest thing you’ll find to a travel-sized steadicam for mobile phones. Because it weighs less than a pound and is foldable, it provides steady footage without adding weight or bulk to your gear bag.</br></br>The zoom function on the Osmo’s handle makes changing the framing of the shot smooth and easy; however, our tester complained that the Osmo won’t adequately hold onto phones that have a PopSocket or any other handling accessory, and that its carry straps are flimsy. Still, this is the best travel tech option for affordable vlogging or when committing to making a steady video, and the case is a great size compared to cases for other camera equipment.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2YIRw7H',
        ProductImage:
          'https:////cdn-3.convertexperiments.com/uf/10025040/10024674/1572372619DJI_Gimbalforsmartphones.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Stabilizer for smoother footage',
          'Weight that’s less than a pound',
          'Reasonably priced for its function',
        ],
      },

      {
        title: 'Grayl Geopress Water Purifier',
        description:
          'Even the dirtiest water can be made potable with the help of the <a href="https://gosendbox.netlify.app/GRAYL-Geopress-Purifier-Backpacking-Survival/dp/B07QD84QNF/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=bb18534b0167b3ea7c91693cdbe85249&language=en_US" target="_blank">Grayl Geopress Water Purifier</a>. Fill the reservoir, then press the bottle shut. In just a few seconds, the Geopress filters all pathogens, viruses, bacteria, and protozoa from fresh water. It’s the perfect travel companion for hiking, backpacking, and travel to any destination with questionable water.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/GRAYL-Geopress-Purifier-Backpacking-Survival/dp/B07QD84QNF/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=bb18534b0167b3ea7c91693cdbe85249&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372653graylwaterpurifier.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Quickly and easily filters up to 24 ounces of water',
          'Removes all pathogens from fresh water',
          'Eliminates the need to carry bottled water',
        ],
      },

      {
        title: 'Langogo AI Language Translator',
        description:
          'The <a href="https://gosendbox.netlify.app/Langogo-Language-Translator-Languages-Noise-Cancelling/dp/B07LF2S2N6/ref=as_li_ss_tl?keywords=langogo&qid=1557039227&s=gateway&sr=8-2.&linkCode=ll1&tag=smartrav-20&linkId=38c1a4c900f123a3062133a5371c83ab&language=en_US" target="_blank">Langogo AI Language Translator</a> is like a travel companion that speaks the local language. The device easily and quickly translates based on its language menu. Translating is a breeze: Set the original and translation languages, and the device will then narrate and type out translations. Users can also reference previous conversations by looking through the translation history. The device can also provide hotspots for up to five mobile devices.</br></br>It feels pretty high-tech to be able to speak into the Langogo and get a mostly accurate translation in return, and the translator has many languages, including a number of dialects. But note that the device requires a SIM/data network to function, and that Google Translate performs similarly to this device while working offline if you’ve pre-downloaded a language.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/Langogo-Language-Translator-Languages-Noise-Cancelling/dp/B07LF2S2N6/ref=as_li_ss_tl?keywords=langogo&qid=1557039227&s=gateway&sr=8-2.&linkCode=ll1&tag=smartrav-20&linkId=38c1a4c900f123a3062133a5371c83ab&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372695Langogo_translatondevice.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Translates up to 105 languages, including dialects',
          'Hotspots for up to five devices',
          'Lifetime software updates',
        ],
      },

      {
        title: 'PhoneSoap Go',
        description:
          "The <a href='https://gosendbox.netlify.app/2AZVYAs' target='blank'>PhoneSoap Go</a> eliminates 99.99 percent of bacteria from mobile devices and other tech gear in 10 minutes. If you're worried about your phone carrying around germs that will make you sick while traveling, this is your gadget. The PhoneSoap Go can also charge up to two mobile devices.</br></br>It’s somewhat bulky to travel with and, at $100, it’s an expensive gadget. But for what it does, you may well want to make room in your bag. A full battery delivers 45 sanitation cycles, and can charge mobile devices up to four times.",
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2AZVYAs',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372741PhoneSoapGoPortablephonesanitizer.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Sanitizing UV-C technology',
          'Reasonable portability',
          'Peace of mind from easy sanitation ',
        ],
      },

      {
        title: 'simplehuman Sensor Mirror Compact ',
        description:
          'The <a href="https://gosendbox.netlify.app/2VS7K9R" target="_blank">simplehuman Sensor Mirror Compact</a> features three-times magnification, but what sets it above the rest, and the reason it’s listed among the best travel tech for 2019, is its "smart" illumination. The mirror\'s soft light automatically turns on when the item is pulled out of its sleeve and shuts off when inserted back in. The light can be adjusted to 110, 300, or 650 lux strength.</br></br>The ring handle on the back of the device aids in a variety of ways: Slip your finger through the ring for added hand-holding support, or use it to prop or hang the mirror. The handheld mirror is made of stainless steel, is incredibly light, and comfortably fits in the palm of the hand. A charge lasts about a week, depending on use.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2VS7K9R',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372802simpleHuman_Compactmirror.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Automatic on/off lighting when pulled out of its sleeve',
          'Three light strengths',
          'Ring handle for extra holding support or for propping',
        ],
      },
      {
        title: 'STM Goods Suction Power Bank',
        description:
          "The <a href='https://gosendbox.netlify.app/2MPHFnB' target='blank'>STM Goods Suction Power Bank</a> can recharge a phone several times before needing to recharge itself—and with its Qi-enabled technology, it’s able to do so wirelessly. Alternatively, the power bank simultaneously (and relatively quickly) charges up to three devices with charging cords. The power bank is equipped with suction cups that can be pressed to the mobile device it's charging for ease of travel</br></br>The suction cups on the power bank worked well, but ring handles or PopSockets attached to the back of a phone would impede this capability. While the suction side of the gadget could be pressed onto the front side of the phone, that would block access to the phone screen.",
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2MPHFnB',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372862STMGoods_USBpowerbank.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Wireless charging for Qi-enabled devices',
          'Can simultaneously charge up to three devices',
          'Easy attachment to the device for better transport',
        ],
      },
      {
        title: 'STM USB-C Media Hub',
        description:
          'MacBook users will find the <a href="https://gosendbox.netlify.app/31f1mus" target="_blank">STM USB-C Media Hub</a> useful as a laptop charger. This multi-tool hub connects USB-C-enabled devices (what the newest MacBooks use) with HDMI monitors, USB ports (two inputs), and SD and TF memory card readers. Finally, there’s a quick and easy way to get photos off memory cards.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/31f1mus',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372892STMGoods_laptopmediahub.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Five output options',
          'Makes dumping vacation footage from memory cards easy',
          'Lightweight and packable',
        ],
      },
      {
        title: 'Z-Edge Z3D Dual Lens Dash Cam',
        description:
          'Road trippers and those who record their driving will find the <a href="https://gosendbox.netlify.app/Z-EDGE-Z3D-Dashboard-Parking-G-Sensor/dp/B07M5DWDQS/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=a090581d10ef951314a7d5d1eb8d5e5c&language=en_US" target="_blank">Z-Edge Z3D Dual Lens Dash Cam</a> goes one step beyond comparable options by also including a rear-facing camera. A weakness in the design is that installing the cameras involves running cables throughout the vehicle.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/Z-EDGE-Z3D-Dashboard-Parking-G-Sensor/dp/B07M5DWDQS/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=smartrav-20&linkId=a090581d10ef951314a7d5d1eb8d5e5c&language=en_US',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572372925Z-EdgeDashcam.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Affordable',
          'Includes rear-recording camera',
          'Easy to install',
        ],
      },
    ],
    bmVideo: {
      videId: 'zUovhanyzfA',
      videoTitle:
        "Best Travel Tech Gear (You Should Have) | 2019  Editors' Choice Awards",
      videoDescription:
        'Want to see the other category winners? Check out the <a href="https://www.youtube.com/watch?v=AOawFFBWL4E" target="_blank">The Best New Travel Gear of 2019</a> on ’s YouTube channel!',
    },
  };

  /* product list personal items   */

  var PersonalItems = {
    mainTitle: "2019 Editors' Choice Finalists: Personal Items (Alphabetical)",
    winnerTitle: "2019 Editors' Choice Winners: Personal Items",
    bmTopBanner: {
      heading: 'Editors’ Choice Awards: Best New Personal Items 2019',
      bannerImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571034980banner2.jpg',
      bannerDesc:
        'This year’s best personal items stand out with innovative fabrics, outstanding organizational features, and comfortable-yet-stylish straps and handles. To select the best carryalls, backpacks, tote bags, and hybrid bags, we road tested and assessed new 2019 styles.</br></br>To qualify for this year’s new personal item category, bags needed to meet sizing restrictions for hand luggage on most airlines, fit a 13-inch laptop or larger, cost under $350, and have at least one stand-out feature—like a built-in phone charger or sustainable fabric. We also tested each bag’s ability to do “double duty,” meaning it could serve as both a worthy travel bag and a day pack or commuter bag. And since more and more travelers are confined to only a personal item when flying basic economy, we also assessed packability. Testers evaluated the above criteria on a road test by packing a change of clothes, pair of shoes, electronics, a laptop, and other in-flight essentials. After each bag was evaluated, we compared sizing, price, style, standout features, organization, and packing power.</br></br>Here are the 13 outstanding new personal items for 2019—including winners of gold, silver, and bronze. Each finalist performed well, so we’ve given you the stand-out features of all 13 personal items.',
      bannerSubHead: 'Editors’ Choice Oct 1, 2019',
      //bannerImage
      bannerSmallImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571984133bannerleaf.png',
      bannerSmallText: '2019 Editors’ Choice',
      bannerLargeText: 'Best New Personal Items',
      bannerProductImage:
        'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571815423DagneDoverGold.png',
    },
    bmTopSec: [
      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'GOLD WINNER',
        topDescrmobile: 'GOLD',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'Dagne Dover Dakota</br>Backpack (Large)',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/32nDTZl',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571815423DagneDoverGold.png',
        itemClass: 'gold',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'SILVER WINNER',
        topDescrmobile: 'SILVER',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'Aer Travel Pack 2 Small',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/35EK3GD',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571815584Aer_Silver.png',
        itemClass: 'silver',
      },

      {
        TopTitle: 'Editors’ Choice',
        topDescription: 'BRONZE WINNER',
        topDescrmobile: 'BRONZE',
        mobileSitelogo:
          'https://gosendbox.netlify.app/WccVkjhn/wIkuDI/.png',
        TopPer: 'L.L. Bean Wayside Tote',
        TopButtonText: 'Buy It Now',
        TopProductUrl: 'https://gosendbox.netlify.app/2IRJGPh',
        TopProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571815759LLBean_Bronze.png',
        itemClass: 'bronze',
      },
    ],

    bmBottomSec: [
      {
        title: 'Dagne Dover Dakota Backpack (Large)',
        description:
          'Dagne Dover took a classic backpack design and made it perfect for travel with much-appreciated organizational features and durable fabric. The <a href="https://gosendbox.netlify.app/32nDTZl" target="_blank">Dakota Backpack</a> is available in small, medium, and large sizes, although we tested only the large version for the awards.</br></br>The separate back laptop compartment is ideal for business travelers, and on top of the bag is a favorite feature: a panel phone pocket for easy access to your most coveted travel item. There’s also an interior electronics sleeve with elastic closure for a tablet or second laptop. Inside you’ll also find two more air-mesh pockets, a zip-top pouch, a shoe bag that can double as a laundry bag, and three interior front-panel zippered pockets.</br></br>On the outside are two zippered side pockets for necessities like your passport or boarding pass, as well as two water bottle holders and a front zippered pouch. The shoulder straps are adjustable and made of soft neoprene material, which is also water-resistant and easy to clean; and a luggage handle sleeve means you can easily slip this personal item onto your carry-on’s telescoping handle. Neoprene is naturally insulating and shock-absorbent, so you can toss your bag under the seat in front of you without fear.</br></br>The Dagne Dover Dakota Backpack pairs amazing organizational features with on-trend minimalist style. ',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/32nDTZl',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571815423DagneDoverGold.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Separate zippered laptop compartment',
          'Soft-but-durable neoprene material',
          'Conveniently placed pockets',
        ],
      },
      {
        title: 'Aer Travel Pack 2 Small',
        description:
          'The <a href="https://gosendbox.netlify.app/35EK3GD" target="_blank">Aer Travel Pack 2 Small</a> is an ideal personal item for travelers looking to take only one bag on a trip. This versatile option looks like a comfortable, modern backpack from the outside, but not-so-obvious but outstanding interior features elevate it, making it one of the best new personal items this year.</br></br>Its padded shoulder straps are heavy duty, offering comfortable wear on long travel days. (You can even purchase a <a href="https://gosendbox.netlify.app/31gwEB6" target="_blank">hip belt</a> for extra support.) There’s a luggage sleeve for securing it onto a carry-on bag if needed, and the zippers are lockable. The Aer Travel Pack 2 Small’s water-resistant material is among the most durable of the bags we tested. Inside, this bag holds plenty of storage pockets, including a compartment for shoes or dirty laundry. On the outside there’s a zippered, quick-access laptop compartment, and expandable water-bottle pocket.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/35EK3GD',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571815584Aer_Silver.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Spacious interior that opens fully for easy packing',
          'Comfortable, padded straps',
          'Separate area for shoes or dirty laundry',
        ],
      },
      {
        title: 'L.L.Bean Wayside Tote',
        description:
          'The <a href="https://gosendbox.netlify.app/2IRJGPh" target="_blank">L.L.Bean Wayside Tote</a> lives up to the challenge of packing for an entire trip in just one personal item bag. We easily fit three outfits (rolled), a pair of shoes, plus other travel essentials and tech in this bag. There are two side pockets for water bottles or other essentials, as well as a fleece-lined pocket and extra stash pocket on the outside for your phone or passport. Inside there’s a separate laptop sleeve, as well as plenty of other organizational pockets. The straps were comfortable, and two handles plus a shoulder strap enable this tote to be carried or slung over your shoulder as a messenger bag. Its sustainable nylon material can be spot cleaned, and it comes in a plum color or classic black. At under $100, this is also one of the least expensive bags we tested.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2IRJGPh',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571815759LLBean_Bronze.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Bottom compartment for shoes or clothes storage',
          'Fleece-lined tech pocket',
          'Good price for value',
        ],
      },

      {
        title: 'CamelBak Pivot Tote Bag',
        description:
          'The versatile <a href="https://gosendbox.netlify.app/2IzzV8h" target="_blank">CamelBak Pivot Tote Bag</a> is one of the hybrid personal items we tested for 2019, meaning it can be carried as either a backpack or a tote bag. It’s great as a personal item for an active trip since it can easily be used for biking or light hiking, but the shoulder straps are easily stowable. The bag’s organizational features are also worth noting—there’s a padded laptop sleeve, an exterior pocket, a hidden side pocket, and interior organization. As for the material, this bag is made from recycled water bottles; it’s environmentally-friendly, durable, and water- and stain-resistant. At under $100, this bag is affordable, and is a great purchase for travelers needing a personal item that does double duty.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2IzzV8h',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572503425Camelbak_PivotTote-2.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Padded laptop sleeve',
          'Made from 70 percent repurposed materials',
          'Good value for price',
        ],
      },

      {
        title: 'Dagne Dover Landon Carryall (Large)',
        description:
          'The <a href="https://gosendbox.netlify.app/31jXxE8" target="_blank">Dagne Dover Landon Carryall</a> has similar characteristics of the brand’s gold-winning backpack. This duffel received high marks for fabric and organizational pockets: It has a handy exterior phone/ID pocket, interior laptop sleeve, two interior mesh pockets, a shoe bag, a detachable zippered top, and a large interior zippered pocket. It also has a large interior capacity that can fit a few changes of clothes, a pair of shoes, and a sweater or sweatshirt. It can also be carried as a messenger bag or tote bag thanks to its three straps. Our tester notes that the tote straps are extremely comfortable in comparison to similar tote-style bags. This style is also available in extra small, small, medium, and extra-large sizes.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/31jXxE8',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572503472Dange-and-Dover_Landon-Carryall-2.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Flexible but durable neoprene material',
          'Outer phone pouch',
          'Luggage-handle sleeve',
        ],
      },

      {
        title: 'Duluth Trading Co. Oil Cloth Backpack',
        description:
          'For a solid backpack option that will protect your gear, look no further than Duluth Trading Co.’s <a href="https://www.duluthtrading.com/oil-cloth-backpack-87503.html?cgid=womens-accessories-bags-totes&dwvar_87503_color=VOL" target="_blank">Oil Cloth Backpack</a>. We were pleasantly surprised by the water-resistant durability of the oil cloth fabric. Top-notch qualities include the interior padded laptop sleeve and zippered exterior organizational pockets. ',
        buttonText: 'Buy It Now',
        productUrl:
          'https://www.duluthtrading.com/oil-cloth-backpack-87503.html?cgid=womens-accessories-bags-totes&dwvar_87503_color=VOL',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571810971Duluth_Trading_Co._Oil_Cloth_Backpack.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Durable high-performance fabric',
          'Deep outside pockets',
          'Roomy interior',
        ],
      },

      {
        title: 'Incase ICON Backpack',
        description:
          'For tech-savvy travelers, the <a href="https://gosendbox.netlify.app/31YBIvb" target="_blank">Incase ICON Backpack</a> is a dream come true. Stand-out features include a sleek, modern design, padded phone and tablet pockets, a padded laptop sleeve, an integrated cable port, and a hyper-organized front zip compartment. The nylon fabric is super durable and will hold up in rain. It’s designed for ergonomic support, with an adjustable padded shoulder strap and added sternum strap.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/31YBIvb',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571811037InCase_ICON_Pack.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Easy-access side pockets',
          'Padded tablet and phone pocket to prevent scratches',
          'Comfortable, padded straps',
        ],
      },

      {
        title: 'Lo & Sons The O.G. 2',
        description:
          'As a follow up to its best-selling The O.G. bag, Lo & Sons released <a href="https://gosendbox.netlify.app/32lwVE7" target="_blank"> The O.G. 2</a> this year with improvements based on customer feedback. Changes include a memory-foam shoulder pad, a zippered external laptop sleeve, reinforced stability, an interior mesh pocket, and an upgraded leather fabric for the straps. The material is high-quality and lightweight nylon with water-resistant zippers to keep rain (or perhaps coffee) out of your bag. This bag easily fits in-flight essentials, a change of clothes, an extra pair of shoes, a water bottle, and a laptop.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/32lwVE7',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571811187Lo_and_Sons_The_O_G_2.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Separate shoe compartment',
          'Memory foam shoulder pad',
          'Easy laptop access',
        ],
      },

      {
        title: 'MZ Wallace Max',
        description:
          'Travelers in tune with the latest style trends probably recognize the quilted fabric of the MZ Wallace bag, and there’s a reason why these bags are so popular. The <a href="https://gosendbox.netlify.app/2IWuq3p" target="_blank"> MZ Wallace Max</a> is equal parts function and style, with perfectly placed pockets and water-resistant nylon fabric. The bag can be carried as a crossbody, shoulder, or tote bag. When road tested, the tote fit a pair of boots, a large notebook, a laptop, electronics chargers, adapters, a toiletry bag, a jacket, a pair of leggings, a GoPro camera, and miscellaneous in-flight essentials. The zip-top closure makes this bag seem almost bottomless, and the new feature of a luggage sleeve is a welcome addition for navigating airports.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/2IWuq3p',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571815279MZ_Wallace_The_Max_Tote.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Stylish yet durable quilted fabric',
          'Abundant pockets: five exterior and six interior',
          'Luggage sleeve for easy carrying',
        ],
      },

      {
        title: 'Nordace Siena Backpack',
        description:
          'The <a href="https://nordace.com/en/product/nordace-siena-smart-backpack/" target="_blank">Nordace Siena Backpack</a> may seem like it’s on the smaller side, but it sure is mighty. The design is sleek and the fabric is water-resistant, with vegan leather details. It’s lightweight and has an easy-to-use luggage sleeve. The straps are well-padded, but not overly bulky. On the exterior, there is one side water-bottle pocket, an external USB port, and two zippered pockets. Inside, you’ll find a large main compartment, a fleece-lined slot for sunglasses, a water-resistant pouch, and a tech sleeve. There is also an external laptop sleeve for easy access at security. You can also purchase a <a href="https://nordace.com/en/product/nordace-siena-compression-packing-cube/" target="_blank">compressing packing cube</a> that’s designed to fit inside the backpack, which means you can fit enough in this bag for a weekend trip.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://nordace.com/en/product/nordace-siena-smart-backpack/',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571811385Nordace_Siena_Smart_Backpack.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'USB charging port',
          'Hidden back pocket',
          'Water-resistant interior pouch',
        ],
      },

      {
        title: 'REI Co-op Norseland Tote – 24L',
        description:
          'REI’s <a href="https://www.rei.com/product/158133/rei-co-op-norseland-tote-24l" target="_blank">Norseland Tote</a> is an ideal personal item for urban travelers and those doing light activities since it can double as a day pack. Two large water bottle holders make it easy to stay hydrated throughout your trip. Other features that moderately active travelers will appreciate include the snap-shut front pocket for easy access to snacks, and the adjustable top-strap closure that can hold a jacket or travel blanket. The heavy-duty nylon fabric is water- and tear-resistant. This pack is also convertible, meaning you can easily hide the padded backpack straps and carry it as a tote bag. Inside you’ll find a padded laptop sleeve and an organizer pocket for essentials.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://www.rei.com/product/158133/rei-co-op-norseland-tote-24l',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571811436REI_Norseland_Tote_24L.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Good price for value',
          'Unisex style',
          'Ultra-protective laptop sleeve',
        ],
      },

      {
        title: 'Samsonite Encompass Womens Convertible Weekend Duffel',
        description:
          'Samsonite’s spacious <a href="https://gosendbox.netlify.app/" target="_blank">Encompass Convertible Weekend Duffel</a> can pass as a personal item for weekend warriors and business travelers alike. In addition to the roomy interior, the separate bottom compartment holds two pairs of shoes. The bag can also be carried three ways: hand-held, shoulder (with a padded shoulder strap), or crossbody. Water-resistant fabric, durable zippers, and a stowable luggage loop add to the bag’s functionality. For organization, you’ll find a front organizer pocket, a few interior organizing pockets, a tablet pocket, and an RFID-protective pocket. The bag comes with a three-year warranty.',
        buttonText: 'Buy It Now',
        productUrl: 'https://gosendbox.netlify.app/',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1571811507Samsonite_Encompass_Womens_Convertible_Weekend_Duffel.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Spacious, fits enough for a weekend trip',
          'Plenty of organizational pockets',
          'Separate bottom compartment fits two pairs of shoes',
        ],
      },

      {
        title: 'Speck Travel Business Backpack',
        description:
          'Speck Travel is a new 2019 travel brand that launched with a stellar personal item. The <a href="https://gosendbox.netlify.app/" target="_blank">Business Backpack</a> unzips fully to reveal a well-protected laptop pocket, and can open to lie flat for security screening. The backpack straps are supportive and comfortable, and there’s also a padded back panel with a hidden pocket for essentials. Other stand-out features include an external USB port, luggage pass-through sleeve, and a lifetime warranty. Inside are plenty of pockets, including fleece-lined ones for electronics. Other exterior features include two water bottle sleeves, a reflective strip, easy-access pockets, compression buckles, and easy-to-clean fabric. Plus, all of Speck Travel’s bags come with packing cubes and pouches to help with organization.',
        buttonText: 'Buy It Now',
        productUrl:
          'https://gosendbox.netlify.app/',
        ProductImage:
          'https://cdn-3.convertexperiments.com/uf/10025040/10024674/1572503511Speck-Travel_Travel-Backpack-2.png',
        reason: 'Reasons to Buy',
        reasonList: [
          'Comes with packing cubes and pouches',
          'Lifetime warranty',
          'Good price for value',
        ],
      },
    ],
    bmVideo: {
      videId: 'bom-qheTZXQ',
      videoTitle:
        "The Best Personal Item Bags for Plane Travel (Backpacks & Totes) |  Editors' Choice Awards (2019)",
      videoDescription:
        'Want to see the other category winners? Check out the <a href="https://www.youtube.com/watch?v=AOawFFBWL4E" target="_blank">The Best New Travel Gear of 2019</a> on ’s YouTube channel!',
    },
  };
  var bulletPointText =
    '' +
    '  <div>' +
    "      <h2>More Editors' Choice 2019:</h2>" +
    '      <p><a href="https://www..com/editors-choice-awards-2019/" target="_blank" rel="noopener"> Editors\' Choice Awards</a></p>' +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Carry-On Luggage 2019</a></p>' +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Personal Items 2019</a></p>' +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Travel Pillows 2019</a></p>' +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Travel Shoes for Men 2019</a></p>' +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Travel Shoes for Women 2019</a></p>' +
    '      <p><a href="https://gosendbox.netlify.app/" target="_blank" rel="noopener">Best New Travel Tech 2019</a></p>' +
    '      <p><em class="bm-new">Some review products are sent to us free of charge and with no incentive to offer a favorable review. We offer our unbiased opinions, positive and negative, and will never accept compensation to review a product.</em></p>' +
    '  </div>';
  var bmEditorWinner = '';
  var bmEditor = '';
  var topProduct1 = '';
  function init() {
    urlCheck();
  }
  function getList(reasonList) {
    var lilist = '';
    $(reasonList).each(function(bmindex, bmval) {
      lilist += '<li> ' + bmval + '</li>';
    });
    return lilist;
  }
  //add editor choice section
  function getEditorChoice(listitem) {
    //top section of container
    genrateTopSection(listitem.bmTopSec);
    //list section
    genrateBottomSection(listitem);
    //banner section
    updateTopBanner(listitem.bmTopBanner);
    //add video section
    addVideoSection(listitem.bmVideo);
    $('body').on('click', 'a.read-more', function() {
      $(this)
        .parents('.bm-choice-section')
        .toggleClass('bm-read-more');
      var bmText = $(this).text();
      if (bmText == 'Read more') $(this).text('Show less');
      else $(this).text('Read more');
    });
  }
  function updateTopBanner(bmTopBanner) {
    // $('header.post-header .post-meta a').text(bmTopBanner.bannerSubHead);
    var date = new Date();
    $('header.post-header .post-meta a').text(
      'Editors’ Choice  Nov ' + date.getDate() + ', 2019'
    );
    $('.post-title').text(bmTopBanner.heading);
    $('.at-above-post.addthis_tool').after(
      '<p>' + bmTopBanner.bannerDesc + '</p>'
    );
    var topBnnerString =
      '' +
      '  <div class="bm-topBnner">' +
      '      <div class="bm-topBnner-inr">' +
      '          <div class="bm-topBnner-img">' +
      '<img src="' +
      bmTopBanner.bannerProductImage +
      '" class="bm-top-ptoduct">' +
      '              <img src="' +
      bmTopBanner.bannerSmallImage +
      '">' +
      '          </div>' +
      '          <div class="bm-topBnner-text">' +
      '              <p class="bm-top-heading">' +
      bmTopBanner.bannerSmallText +
      '</p>' +
      '              <p class="bm-top-subheading">' +
      bmTopBanner.bannerLargeText +
      '</p>' +
      '          </div>' +
      '      </div>' +
      '  </div>';
    $('.hero + div').after(topBnnerString);
  }
  function genrateTopSection(topItems) {
    $(topItems).each(function(i, val) {
      topProduct1 +=
        '      <div class="bm-item ' +
        val.itemClass +
        '">' +
        '          <a href="' +
        val.TopProductUrl +
        '" target="_blank">' +
        '              <div class="bm-item-text">' +
        '                  <p>' +
        val.TopTitle +
        '</p>' +
        '                  <h3>' +
        val.topDescription +
        '</h3>' +
        '              </div>' +
        '              <div class="bm-item-text-mobile ' +
        val.itemClass +
        '">' +
        '                 <img src="' +
        val.mobileSitelogo +
        '">' +
        '                  <p>' +
        val.TopTitle +
        '</p>' +
        '                  <h3>' +
        val.topDescrmobile +
        '</h3>' +
        '              </div>' +
        '              <div class="item-name">' +
        '                  <p>' +
        val.TopPer +
        '</p>' +
        '              </div>' +
        '              <div class="product-img"> <img src="' +
        val.TopProductImage +
        '"></div>' +
        '              <div class="bm-item-cta"><button type="button">' +
        val.TopButtonText +
        '</button></div>' +
        '          </a>' +
        '      </div>';
    });
    var bmtopProduct = '<div class="item-contain">' + topProduct1 + '</div>';
    $('.at-above-post.addthis_tool').after(bmtopProduct);
  }
  function genrateBottomSection(listitem) {
    $(listitem.bmBottomSec).each(function(i, val) {
      var bmlist = getList(val.reasonList);
      if (i < 3) {
        bmEditorWinner +=
          '        <div class="bm-choice-section bm-read-more">' +
          '              <div class="bm-imgSection">' +
          '                  <a href="' +
          val.productUrl +
          '" target="_blank"><img src="' +
          val.ProductImage +
          '" target="_blank"></a>' +
          '              </div>' +
          '              <div class="choice-text">' +
          '                  <h3> ' +
          val.title +
          '</h3>' +
          '                  <p>' +
          val.description +
          '</p>' +
          '       <a class="read-more">Read more</a>            <h5>' +
          val.reason +
          '</h5>' +
          '                  <ul>' +
          bmlist +
          '                  </ul>' +
          '              <div class="bm-item-cta-outer"><a class="bm-item-cta" href="' +
          val.productUrl +
          '" target="_blank"><button type="button">' +
          val.buttonText +
          '</button></a></div>' +
          '              </div>' +
          '          </div>';
      } else {
        bmEditor +=
          '        <div class="bm-choice-section bm-read-more">' +
          '              <div class="bm-imgSection">' +
          '                  <a href="' +
          val.productUrl +
          '" target="_blank"><img src="' +
          val.ProductImage +
          '"></a>' +
          '              </div>' +
          '              <div class="choice-text">' +
          '                  <h3> ' +
          val.title +
          '</h3>' +
          '                  <p>' +
          val.description +
          '</p>' +
          '      <a class="read-more">Read more</a>             <h5>' +
          val.reason +
          '</h5>' +
          '                  <ul>' +
          bmlist +
          '                  </ul>' +
          '              <div class="bm-item-cta-outer"><a class="bm-item-cta" href="' +
          val.productUrl +
          '" target="_blank"><button type="button">' +
          val.buttonText +
          '</button></a></div>' +
          '              </div>' +
          '          </div>';
      }
    });
    var bmtopProduct1 =
      '<div class="bmEditor-choice bmEditor-choice-alfa"><h2>' +
      listitem.mainTitle +
      '</h2>' +
      bmEditor +
      '</div>';
    var bmtopProductWinner =
      '<div class="bmEditor-choice bmEditor-choice-winner"><h2>' +
      listitem.winnerTitle +
      '</h2>' +
      bmEditorWinner +
      '</div>';
    $('.item-contain').after(bmtopProductWinner);
    $('.bmEditor-choice-winner').after(bmtopProduct1);
  }
  function addVideoSection(bmVideos) {
    $('.bmEditor-choice-alfa').after(
      '<div class="bm-video"><h2>' +
        bmVideos.videoTitle +
        '</h2><iframe width="835" height="470" src="https://www.youtube.com/embed/' +
        bmVideos.videId +
        '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>' +
        bmVideos.videoDescription +
        '</p></div>'
    );
    $('.bm-video').after(bulletPointText);
  }
  //check url to show specific data according to url
  function urlCheck() {
    //    getEditorChoice(PersonalItems);
    //getEditorChoice(menShoes);
    var url = window.location.href;
    if (url.indexOf('/best-travel-shoes-for-women-2019/') != -1) {
      getEditorChoice(womenShoes);
      $('body').addClass('bm-womenshoes');
      removeCurrent(
        'a[href="https://gosendbox.netlify.app/"]'
      );
    } else if (url.indexOf('/best-travel-shoes-for-men-2019/') != -1) {
      getEditorChoice(menShoes);
      $('body').addClass('bm-menshoes');
      removeCurrent(
        'a[href="https://gosendbox.netlify.app/"]'
      );
    } else if (url.indexOf('/best-carry-on-luggage-2019/') != -1) {
      getEditorChoice(carryOn);
      $('body').addClass('bm-carryon');
      removeCurrent(
        'a[href="https://gosendbox.netlify.app/"]'
      );
    } else if (url.indexOf('/best-travel-pillows-2019/') != -1) {
      getEditorChoice(travelPillows);
      $('body').addClass('bm-pilows');
      removeCurrent(
        'a[href="https://gosendbox.netlify.app/"]'
      );
    } else if (url.indexOf('/best-travel-tech-2019/') != -1) {
      getEditorChoice(travelTech);
      $('body').addClass('bm-traveltech');
      removeCurrent(
        'a[href="https://gosendbox.netlify.app/"]'
      );
    } else if (url.indexOf('/best-travel-personal-items-2019/') != -1) {
      getEditorChoice(PersonalItems);
      $('body').addClass('bm-backpacks');
      removeCurrent(
        'a[href="https://gosendbox.netlify.app/"]'
      );
    }
  }
  function removeCurrent(element) {
    $(element)
      .parent()
      .remove();
  }
  function textChange() {
    $(
      'ul li a[hareref="https://gosendbox.netlify.app/"]'
    ).text('Editors’ Choice Product Awards 2019');
    $("h2.p1 b:contains('More from :')")
      .parent()
      .css('display', 'block !important');

    $(".entry-content h2:contains('More from :')").css(
      'display',
      'block'
    );

    $(".entry-content h2:contains('More from :')").html(
      'More Editors’ Choice 2019:'
    );

    //text change for editor note
    // $('.entry-content > p > em').text(
    //   'Some review products are sent to us free of charge and with no incentive to offer a favorable review. We offer our unbiased opinions, positive and negative, and will never accept compensation to review a product'
    // );
  }

  BMHelper.doWhenJqueryLoaded(function() {
    $ = convert.$;
    BMHelper.onLoadElement('.at-above-post.addthis_tool', init);
    BMHelper.onLoadElement(
      'ul li a[href="https://gosendbox.netlify.app/"]',
      textChange
    );
  });
})();
