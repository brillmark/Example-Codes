(function () {
  var comparisontable = '' +
    ' <div class="fe_price_table_inner">' +
    '  <div class="comparison">' +
    '      <table>' +
    '          <tbody>' +
    '              <tr class="fePriceHead">' +
    '                  <td>storage</td>' +
    '                  <td>100GB</td>' +
    '                  <td>unlimited </td>' +
    '                  <td>unlimited </td>' +
    '                  <td>unlimited </td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>Storage</td>' +
    '                  <td>100GB</td>' +
    '                  <td>Unlimited </td>' +
    '                  <td>Unlimited </td>' +
    '                  <td>Unlimited </td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>Granular Access & Controls</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>Data Loss Protection</td>' +
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
    '                  <td>HIPAA/HITECH-eligible, FedRAMP</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="fe_dash"> -  <span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>File Upload</td>' +
    '                  <td>2GB</td>' +
    '                  <td>5GB</td>' +
    '                  <td>5GB</td>' +
    '                  <td>5GB</td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>Minimum Users </td>' +
    '                  <td>3</td>' +
    '                  <td>3</td>' +
    '                  <td>3</td>' +
    '                  <td>3</td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>Maximum Users</td>' +
    '                  <td>10</td>' +
    '                  <td>Unlimited </td>' +
    '                  <td>Unlimited </td>' +
    '                  <td>Unlimited </td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>Desktop Access</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>Mobile Access</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>Version History</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>SSL & At-Rest Encryption</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>Two-Factor Authentication</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>Standard Business Support</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>User Management</td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>Advanced User & Security Reporting</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>Active Directory & SSO (Single Sign-On) Integration</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>Custom Branding</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>Mobile Security Controls</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr>' +
    '                  <td>Integration with EMM Providers</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +

    '              <tr class="compare-row">' +
    '                  <td>Unlimited External Collaborators</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>Full Content Visibility & Management</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>Full User Activity Tracking</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>Admin Role Delegation</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>Metadata & Custom Templates</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>Custom terms of Service</td>' +
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
    '                  <td>Optional: Box Governance, Box KeySafe, BoxZones</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span>  </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>Unlimited integrations, including DLP & eDiscovery</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>User Groups</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>Workflow Automation</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>Device Trust (Advanced Mobile Requirements )</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>Password Policy Enforcement</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr>' +
    '                  <td>Document Watermarking</td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td> <span class="fe_dash"> -  <span> </td>' +
    '                  <td><span class="tickblue"></span></td>' +
    '              </tr>' +
    '              <tr class="compare-row">' +
    '                  <td>API Calls Per Month</td>' +
    '                  <td>25,000</td>' +
    '                  <td>50,000</td>' +
    '                  <td>50,000</td>' +
    '                  <td>100,000</td>' +
    '              </tr>' +
    '          </tbody>' +
    '      </table>' +
    '   </div>' +
    '   <div class="fe_hide_show"> <a href="#"> <span class="fe_show">Show features</span> <span class="fe_hide">Hide features</span></a>  </div>' +
    '  </div>';
    // Retrieve the utils library

  // Retrieve the utils library

  var utils = window['optimizely'].get('utils');

  // We have infinite scroll enabled on the site. Wait until more than 200 products have been shown
  // to prompt the user to try out our filter by color feature
  utils.waitUntil(function () {
    return document.querySelectorAll('#pricing-tab-2 .pricing-package-column-wrapper').length && window.jQuery;
  }).then(function () {
    var $ = window.jQuery;

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

