'use strict';

/**
 * @ngdoc function
 * @name siteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the siteApp
 */
angular.module('siteApp')
  .controller('MainCtrl', function ($scope) {

    /*!
     * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
     * Code licensed under the Apache License v2.0.
     * For details, see http://www.apache.org/licenses/LICENSE-2.0.
     */
     $scope.portfolios = [
      {
        category: "My Day Job",
        name: "Real Estate Digital",
        img: "portfolio/realestatecenter.png",
        notes: 'I build real estate websites for <a href="http://www.realestatedigital.com" target="_blank">RED</a>',
        link: "https://realestatecenter.bankofamerica.com",
        alt: "Bank of America Real Estate Center screen shot"
      },
      {
        category: "My Other Job",
        name: "MelRok Energy IoT",
        img: "portfolio/portfolio-melrok.png",
        notes: "I built melrok.com and I'm building the user interface for their Energy Management Platform",
        link: "http://melrok.com",
        alt: "Melkrok.com screen shot"
      },
      {
        category: "Enterprise Security Software",
        name: "McAfee Vulnerability Manager",
        img: "portfolio/mvm.png",
        notes: "I served as the front end engineer for the McAfee Vulnerability Manager product for 8 years",
        link: "http://intelsecurity.com",
        alt: "McAfee Vulnerability Manager 7.5 screen shot"
      },
      {},
      {
        category: "PHP Security Consulting",
        name: "Wisilica PHP Server Application Security Review",
        img: "portfolio/secure-php.png",
        notes: "I performed a security review of their API services",
        link: "http://wisilica.com/",
        alt: "PHP Lock logo"
      },
      {}
     ];

    (function($) {
        "use strict"; // Start of use strict

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });

        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 51
        })

        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

        // Fit Text Plugin for Main Header
        $("h1").fitText(
            1.2, {
                minFontSize: '35px',
                maxFontSize: '65px'
            }
        );

        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        })

        // Initialize WOW.js Scrolling Animations
        new WOW().init();

    })(jQuery); // End of use strict

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
