(function () {
  try {
    /*-----------------------
    section data 
  -----------------------*/
    var FEHelper = this;
    // (Get more done with brill) top section 
    FEHelper.GetMore = '' +
      '  <div class="Fe-container">' +
      '  <div class="Fe-cards-module--header center-align">' +
      '      <h3>Get more done with brill</h3>' +
      '  </div>' +
      '  <div class="Fe-cards-module--group center-align">' +
      '      <div rol="article" class="Fe-cards-module--item">' +
      '          <picture>' +
      '             <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/2-icons-collaborate.svg">' +
      '          </picture>' +
      '          <div class="Fe-cards-module--copy">' +
      '              <h6>Collaborate on any device</h6>' +
      '          </div>' +
      '          <div class="Fe-cards-module--item__content">' +
      '              <p>Share files quickly with teammates, customers, partners, and vendors. A secure central workspace makes it easy to store files and collaborate with anyone.</p>' +
      '          </div>' +
      '          <div class="Fe-cta-wrapper">' +
      '              <a class="Fe-button-link" href="#"><span>Learn more <span></span></a><span class="Fe-diveder">| </span>' +
      '              <a class="Fe-button-link" href="#"><span> Read ebook</span></a>' +
      '          </div>' +
      '      </div>' +
      '      <div rol="article" class="Fe-cards-module--item">' +
      '          <picture>' +
      '              <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/2-icons-integrations.svg">' +
      '          </picture>' +
      '          <div class="Fe-cards-module--copy">' +
      '              <h6>Integrate with all your apps</h6>' +
      '          </div>' +
      '          <div class="Fe-cards-module--item__content">' +
      '              <p>We integrate with more than 1,400 of your favorite apps, like Microsoft Teams, Slack, Okta, and Zoom, so you connect the content across all your tools.</p>' +
      '          </div>' +
      '          <div class="Fe-cta-wrapper">' +
      '              <a class="Fe-button-link" href="#"><span>Learn more </a><span class="Fe-diveder">| </span></span>' +
      '              <a class="Fe-button-link" href="#"><span> Read ebook</span></a>' +
      '          </div>' +
      '      </div>' +
      '      <div rol="article" class="Fe-cards-module--item">' +
      '          <picture>' +
      '              <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/2-icons-security.svg">' +
      '          </picture>' +
      '          <div class="Fe-cards-module--copy">' +
      '              <h6>Built-in security and compliance</h6>' +
      '          </div>' +
      '          <div class="Fe-cards-module--item__content">' +
      '              <p>With security built-in, you get total peace of mind. We take care of strict data privacy and compliance needs, like GDPR, GxP, and CFR. And no VPN? No problem.</p>' +
      '          </div>' +
      '          <div class="Fe-cta-wrapper">' +
      '              <a class="Fe-button-link" href="#"><span>Learn more </span></a><span class="Fe-diveder">| </span>' +
      '              <a class="Fe-button-link" href="#"><span> Read ebook</span></a>' +
      '          </div>' +
      '      </div>' +
      '      <div rol="article" class="Fe-cards-module--item">' +
      '          <picture>' +
      '              <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/2-icons-remote.svg ">' +
      '          </picture>' +
      '          <div class="Fe-cards-module--copy">' +
      '              <h6>Work whenever and wherever you go</h6>' +
      '          </div>' +
      '          <div class="Fe-cards-module--item__content">' +
      '              <p>Enable everyone on your team to get work done from anywhere, at any time. We power secure remote work so you can focus on growing your business.</p>' +
      '          </div>' +
      '          <div class="Fe-cta-wrapper">' +
      '              <a class="Fe-button-link" href="#"><span>Learn more </a><span class="Fe-diveder">| </span></span>' +
      '              <a class="Fe-button-link" href="#"><span> Read ebook</span></a>' +
      '          </div>' +
      '      </div>' +
      '  </div>' +
      '  </div>' +
      '  </div>';
    // (Get more done with brill) html section 
    FEHelper.youWork = '' +
      '  <div class="Fe-container">' +
      '      <div class="Fe-cards-module--header center-align">' +
      '          <h3>See how brill can simplify how you work</h3>' +
      '      </div>' +
      '      <div class="Fe-cards-module--group center-align">' +
      '          <picture class="Fe-cards-module--image">' +
      '              <a href="#">' +
      '                  <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/6-resources-feature-datasheet-780x520.jpg">' +
      '                  <div class="button-link">' +
      '                      <p>Find the right plan for you</p> <span>Compare plans</span>' +
      '                  </div>' +
      '              </a>' +
      '          </picture>' +
      '          <picture class="Fe-cards-module--image">' +
      '              <a>' +
      '                  <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/6-resources-explore-brill-780x520.jpg">' +
      '                  <div class="button-link">' +
      '                      <p>Explore how brill works</p> <span>Watch video</span>' +
      '                  </div>' +
      '              </a>' +
      '          </picture>' +
      '          <picture class="Fe-cards-module--image">' +
      '              <a href="#">' +
      '                  <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/6-resources-demo-780x520.jpg">' +
      '                  <div class="button-link">' +
      '                      <p>Watch brill in action</p> <span>See demo</span>' +
      '                  </div>' +
      '              </a>' +
      '          </picture>' +
      '      </div>' +
      '  </div>' +
      '  </div>';
    //brill logo section 
    FEHelper.logo = '' +
      '  <div class="Fe-logo-stripe-item">' +
      '      <div class="Fe-cards-module--header center-align">' +
      '          <h3>We\'re trusted by 97,000 organizations</h3>' +
      '      </div>' +
      ' <a href="#">'+
      '        <div class="logo-stripe--row">' +
      '          <div class="Fe-logo-stripe--item">' +
      '                  <pitcher>' +
      '                      <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/3-logo-shopify-240x160.png">' +
      '                      </picture>' +
      '          </div>' +
      '          <div class="Fe-logo-stripe--item">' +
      '                  <pitcher>' +
      '                      <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/3-logo-spotify-240x160.png">' +
      '                      </picture>' +
      '          </div>' +
      '          <div class="Fe-logo-stripe--item">' +
      '                  <pitcher>' +
      '                      <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/3-logo-stitchfix-160x160.png">' +
      '                      </picture>' +
      '          </div>' +
      '          <div class="Fe-logo-stripe--item">' +
      '                  <pitcher>' +
      '                      <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/3-logo-legalzoom-240x160.png">' +
      '                      </picture>' +
      '          </div>' +
      '          <div class="Fe-logo-stripe--item">' +
      '                  <pitcher>' +
      '                      <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/3-logo-astrazeneca-240x160.png">' +
      '                      </picture>' +
      '          </div>' +
      '          <div class="Fe-logo-stripe--item">' +
      '                  <pitcher>' +
      '                      <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/3-logo-intuit-200x160.png">' +
      '                      </picture>' +
      '          </div>' +
      '      </div>' +
      '      </a>'+
      '  </div>';
    //ANALYST CAROUSEL and CUSTOMER CAROUSEL section 
    FEHelper.feAnalystCarousel = '' +
      ' <div class="main-container">' +
      '  <div class="fe-new-slider">' +
      '      <div data-glide-el="track" class="glide__track">' +
      '          <ul class="glide__slides">' +
      '              <div class="FeCrousel item1">' +
      '                  <div class="fe-item">' +
      '                      <div class="container">' +
      '                          <div class="Fe-flexible-callout--content">' +
      '                              <div class="Fe-flexible-callout--image">' +
      '                                  <picture>' +
      '                                      <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/4-carousel-logo-legalzoom-306x80.png"' +
      '                                          class="lazyautosizes ls-is-cached lazyloaded" data-sizes="auto" sizes="180px">' +
      '                                  </picture>' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--copy">' +
      '                                  <blockquote>' +
      '                                      <p>Building our Estate Plan app on brill Platform enables a seamless and engaging customer experience. Customers can securely access, edit and store their legal documents with the option of connecting with their attorney for advice.</p>' +
      '                                  </blockquote>' +
      '                                  <p> </p>' +
      '                                  <p> </p>' +
      '                                  <p>– John Suh, CEO, LegalZoom</p>' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--ctas">' +
      '                                  <div class="Fe-buttons-wrapper"><a role="article" class="button-link--light" href="#"><i class="icon-education"></i><span>Explore how other companies grow with brill</span></a></div>' +
      '                              </div>' +
      '                          </div>' +
      '                      </div>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="FeCrousel item2">' +
      '                  <div class="fe-item">' +
      '                      <div class="container">' +
      '                          <div class="Fe-flexible-callout--content">' +
      '                              <div class="Fe-flexible-callout--image">' +
      '                                  <picture>' +
      '                                      <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/4-carousel-logo-stitchfix-402x100.png "' +
      '                                          class="lazyautosizes ls-is-cached lazyloaded" data-sizes="auto" sizes="180px">' +
      '                                  </picture>' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--copy">' +
      '                                  <blockquote>' +
      '                                      <p>We coach new hires to use brill as their workspace — the equivalent of their personal drive — and as their collaboration space. Even though they\'re working from home, we try to bring them closer with the tools that are available so they can partner and collaborate.</p>' +
      '                                  </blockquote>' +
      '                                  <p> </p>' +
      '                                  <p> </p>' +
      '                                  <p>– Ravindra Sunku, Director of IT, Stitch Fix</p>' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--ctas">' +
      '                                  <div class="Fe-buttons-wrapper"><a role="article" class="button-link--light" href="#"><i class="icon-education"></i><span>Explore how other companies grow with brill</span></a></div>' +
      '                              </div>' +
      '                          </div>' +
      '                      </div>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="FeCrousel item3">' +
      '                  <div class="fe-item">' +
      '                      <div class="container">' +
      '                          <div class="Fe-flexible-callout--content">' +
      '                              <div class="Fe-flexible-callout--image">' +
      '                                  <picture>' +
      '                                      <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/4-carousel-logo-uta-112x120.png"' +
      '                                          class="lazyautosizes ls-is-cached lazyloaded" data-sizes="auto" sizes="180px">' +
      '                                  </picture>' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--copy">' +
      '                                  <blockquote>' +
      '                                      <p>Having that great user experience, letting users work from anywhere on any device, having frictionless security that doesn\'t get in the way, these are all table-stakes in my opinion.</p>' +
      '                                  </blockquote>' +
      '                                  <p> </p>' +
      '                                  <p> </p>' +
      '                                  <p>Michael Keithley, CIO, United Talent Agency</p>' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--ctas">' +
      '                                  <div class="Fe-buttons-wrapper"><a role="article" class="button-link--light" href="#"><i class="icon-education"></i><span>Explore how other companies grow with brill</span></a></div>' +
      '                              </div>' +
      '                          </div>' +
      '                      </div>' +
      '                  </div>' +
      '              </div>' +
      '          </ul>' +
      '      </div>' +
      '<div class="slideshow--pager glide__controls glide__bullets" data-glide-el="controls[nav]"><button class="glide__bullet" data-glide-dir="=0">1</button><button class="glide__bullet" data-glide-dir="=1">2</button><button class="glide__bullet glide__bullet--active" data-glide-dir="=2">3</button></div>' +
      '<div class="slideshow--arrows glide__controls glide__arrows" data-glide-el="controls"><button class="prev" data-glide-dir="<">Previous</button><button class="next" data-glide-dir=">">Next</button></div>' +
      '  </div>' +
      '  </div>' +
      '  <div class="fe-new-slider1">' +
      '      <div data-glide-el="track" class="glide__track">' +
      '          <ul class="glide__slides">' +
      '              <div class="FeCrousel item4">' +
      '                  <div class="fe-item">' +
      '                      <div class="container">' +
      '                          <div class="Fe-flexible-callout--content">' +
      '                              <div class="Fe-flexible-callout--image">' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--copy">' +
      '                                  <blockquote>' +
      '                                      <p>The undisputed industry leader</p>' +
      '                                  </blockquote>' +
      '                                  <p> What do Gartner, Forrester, and IDC have in common? They\'re the top three analyst firms — and they\'ve all named brill a Leader. Explore the capabilities that earned us the triple crown.</p>' +
      '                                  <p> </p>' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--ctas">' +
      '                                  <div class="Fe-buttons-wrapper"><a class="button-link--light" href="#"><i class="icon-education"></i><span>Download reports</span></a></div>' +
      '                              </div>' +
      '                          </div>' +
      '                      </div>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="FeCrousel item5">' +
      '                  <div class="fe-item">' +
      '                      <div class="container">' +
      '                          <div class="Fe-flexible-callout--content">' +
      '                              <div class="Fe-flexible-callout--image">' +
      '                                  <picture>' +
      '                                      <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/5-carousel-logo-gartner-200x160.png"' +
      '                                          class="lazyautosizes ls-is-cached lazyloaded" data-sizes="auto" sizes="180px">' +
      '                                  </picture>' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--copy">' +
      '                                  <blockquote>' +
      '                                      <p> 2020 Gartner Peer Insights Customers\'<br> Choice Winner</p>' +
      '                                  </blockquote>' +
      '                                  <p class="Fe-star"> <img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/5-carousel-gartner-stars.png"></p>' +
      '                                  <p> 4.5 out of 5</p>' +
      '                                  <p></p>' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--ctas">' +
      '                                  <div class="Fe-buttons-wrapper"><a role="article" about="/node/41271" class="button-link--light" href="#"><i class="icon-education"></i><span>Read reviews</span></a></div>' +
      '                              </div>' +
      '                          </div>' +
      '                      </div>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="FeCrousel item6">' +
      '                  <div class="fe-item">' +
      '                      <div class="container">' +
      '                          <div class="Fe-flexible-callout--content">' +
      '                              <div class="Fe-flexible-callout--image">' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--copy">' +
      '                                  <blockquote>' +
      '                                      <p>According to Forrester, organizations achieve up to a 405% ROI and over 20% in productivity gains in 3 years with brill.</p>' +
      '                                  </blockquote>' +
      '                                  <p> </p>' +
      '                                  <p> </p>' +
      '                                  <p class="Fe-yourturn">Now it\'s your turn.</p>' +
      '                              </div>' +
      '                              <div class="Fe-flexible-callout--ctas">' +
      '                                  <div class="Fe-buttons-wrapper"><a role="article" about="/node/41271" class="button-link--light" href="#"><i class="icon-education"></i><span>Learn more</span></a></div>' +
      '                              </div>' +
      '                          </div>' +
      '                      </div>' +
      '                  </div>' +
      '              </div>' +
      '          </ul>' +
      '      </div>' +
      '<div class="slideshow--pager glide__controls glide__bullets" data-glide-el="controls[nav]"><button class="glide__bullet" data-glide-dir="=0">1</button><button class="glide__bullet" data-glide-dir="=1">2</button><button class="glide__bullet glide__bullet--active" data-glide-dir="=2">3</button></div>' +
      '<div class="slideshow--arrows glide__controls glide__arrows" data-glide-el="controls"><button class="prev" data-glide-dir="<">Previous</button><button class="next" data-glide-dir=">">Next</button></div>' +
      '  </div>' +
      '  </div>' +
      '  </div>';


    //banner image
    FEHelper.bannerimg = '<img src="https://fe-test-dev.s3.amazonaws.com/brill/brill-206/1-hero-fg-SMB_1764x1200.png">';
    //popup video section 
    FEHelper.popUpVideo = '' +
      '  <div class="tingle-modal tingle-modal--youtube tingle-modal--visible tingle-modal--overflow" style=""><button class="tingle-modal__close">Close</button>' +
      '      <div class="tingle-modal-brill">' +
      '          <div class="tingle-modal-brill__content"><iframe class="tingle-modal--iframe" width="560" height="315" src="#"' +
      '                  frameborder="0" allow="encrypted-media" allowfullscreen=""></iframe></div>' +
      '      </div>' +
      '  </div>';

    /*-----------------------
    functional part start
  --------------------*/

    /*-----------------------
    helper function
  --------------------*/

    //wait for element to load
    FEHelper.onLoadElement = function (selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelectorAll(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    },
      FEHelper.onLoadGlid = function (trigger, delayInterval, delayTimeout) {
        var interval = setInterval(function () {
          if (window && window.Glide
          ) {
            clearInterval(interval);
            trigger();
          }
        }, delayInterval);
        setTimeout(function () {
          clearInterval(interval);
        }, delayTimeout);
      },
      FEHelper.hasClass = function (element, className) {
        return element.classList
          ? element.classList.contains(className)
          : new RegExp('\\b' + className + '\\b').test(element.className);
      },
      FEHelper.addClass = function (element, className) {
        if (element.classList) element.classList.add(className);
        else if (!hasClass(element, className))
          element.className += ' ' + className;
      },
      FEHelper.removeClass = function (element, className) {
        if (element.classList) element.classList.remove(className);
        else
          element.className = element.className.replace(
            new RegExp('\\b' + className + '\\b', 'g'),
            ''
          );
      },
      FEHelper.insertBefore = function (beforeElement, targetElement) {
        targetElement.parentNode.insertBefore(beforeElement, targetElement);
      },
      FEHelper.insertAfter = function (afterElement, targetElement) {
        targetElement.parentNode.insertBefore(
          afterElement,
          targetElement.nextSibling
        );
      },
      FEHelper.live = function (selector, event, callback, context) {
        /****Helper Functions****/
        // helper for enabling IE 8 event bindings
        function addEvent(el, type, handler) {
          if (el.attachEvent) el.attachEvent('on' + type, handler);
          else el.addEventListener(type, handler);
        }
        // matches polyfill
        this.Element && function (ElementPrototype) {
          ElementPrototype.matches = ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        }(Element.prototype);
        // live binding helper using matchesSelector
        function live(selector, event, callback, context) {
          addEvent(context || document, event, function (e) {
            var found, el = e.target || e.srcElement;
            while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
            if (found) callback.call(el, e);
          });
        }
        live(selector, event, callback, context);
      },
      FEHelper.removeElement = function (selector) {
        var el = document.querySelector(selector);
        if (el != null) {
          el.parentNode.removeChild(el);
        }
      },
      FEHelper.createEl = function (_tag, _csName, _html) {
        var el = document.createElement(_tag);
        el.className = _csName;
        if (_html != undefined) el.innerHTML = _html;
        return el;
      }

    /*-----------------------
    init is the main controller
  --------------------*/
    FEHelper.init = function () {
      //insert get more top section 
      var FeGetMore = FEHelper.createEl("div", "FeGetMore", GetMore);
      FEHelper.insertAfter(FeGetMore, document.querySelector(".logo-stripe"));

      //companies logo section added below the get more section 
      var Felogo = FEHelper.createEl("div", "Felogo", logo);
      FEHelper.insertAfter(Felogo, document.querySelector(".FeGetMore"));

      //add analyst and customer carousel 
      var FeCrouselNew = FEHelper.createEl("div", "FcrouselNew", feAnalystCarousel);
      FEHelper.insertAfter(FeCrouselNew, document.querySelector(".module-83961.cta-module.center-align"));

      //add brill work section 
      var Feyouwork = FEHelper.createEl("div", "Feyouwork", youWork);
      FEHelper.insertAfter(Feyouwork, document.querySelector(".FcrouselNew"));

      //update banner image 
      document.querySelector(".hero--image.anim-wrapper picture").innerHTML = bannerimg;

      //update hero banner heading/sub heading  copy
      document.querySelector('.hero--messaging h1').innerHTML = "Work from anywhere";
      document.querySelector('.hero--messaging h3').innerHTML = "Secure file sharing and seamless collaboration";
      document.querySelector('.hero--messaging .buttons-wrapper a.button-primary').innerText = 'Try brill for free';
      document.querySelector('.cta-module .cta-module--submodule-content h3').innerHTML = ('Ready to get started?');

      // glid carousel method called after glid object instance created  
      FEHelper.onLoadGlid(FEHelper.feCustomerCarouselFn, 50, 5000);
      FEHelper.onLoadGlid(FEHelper.feAnalystCarouselFn, 50, 5000);


      //add popup video section on click 
      FEHelper.live('.Feyouwork .Fe-cards-module--image:nth-child(2)', 'click', function () {
        var popUp = FEHelper.createEl('div', 'fe-popup-video', popUpVideo);
        FEHelper.removeElement('.fe-popup-video');
        document.body.appendChild(popUp);
      });

      //remove video section 
      FEHelper.live('.fe-popup-video .tingle-modal__close', 'click', function () {
        FEHelper.removeElement('.fe-popup-video');

      });
      document.querySelector(".Felogo+ .cta-module .buttons-wrapper a").href = "#";
      document.querySelector(".cta-module .cta-module--submodule__element .buttons-wrapper .button-primary--light").href = "#";
      document.querySelector(".hero .buttons-wrapper .button-primary--light").href = "#";
      document.querySelector('.cta-module--submodule__element [href="/pricing"]').href = "#";
      document.querySelector('.hero--messaging .buttons-wrapper .button-primary').href = "#";
      
    };
    //analyst carousel method
    FEHelper.feAnalystCarouselFn = function () {
      var glide = new Glide('.fe-new-slider', {
        type: 'carousel',
        perView: 1,
        arrows: true,
        navigation: true,
        navigationCenter: true,
        autoplay:9000,
        focusAt: 'center'
      })
      glide.mount()
    }
    //customer carousel method
    FEHelper.feCustomerCarouselFn = function () {
      var glide = new Glide('.fe-new-slider1', {
        type: 'carousel',
        perView: 1,
        arrows: true,
        navigation: true,
        autoplay:8000,
        focusAt: 'center'
      })
      glide.mount()
    }
    /*-----------------------
   script start executing from here and wait target elemnet
  --------------------*/
    FEHelper.onLoadElement(
      '.logo-stripe',
      FEHelper.init,
      50,
      10000
    );
  } catch (err) {
    //console && console.log(err);
  }
})();