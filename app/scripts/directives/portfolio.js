'use strict';

/**
 * @ngdoc directive
 * @name siteApp.directive:portfolio
 * @description
 * # portfolio
 */
angular.module('siteApp')
  .directive('portfolio', function () {
    return {
      template: '<a href="#" class="portfolio-box"><img src="images/{{portfolio.img}}" class="img-responsive" alt=""><div class="portfolio-box-caption"><div class="portfolio-box-caption-content"><div class="project-category text-faded">{{portfolio.category}}</div><div class="project-name">{{portfolio.name}}</div></div></div></a>',
      restrict: 'A',
      scope: {
        portfolio: '='
      }
    };
  });
