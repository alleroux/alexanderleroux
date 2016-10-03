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
      template: "\
      <a href=\"{{portfolio.link}}\" target=\"_blank\" class=\"portfolio-box\">\
      	<img src=\"images/{{portfolio.img}}\" class=\"img-responsive\" alt=\"{{portfolio.alt}}\">\
      	<div class=\"portfolio-box-caption\"><div class=\"portfolio-box-caption-content\">\
      		<div class=\"project-category text-faded\">{{portfolio.category}}</div>\
      		<div class=\"project-name\">{{portfolio.name}}</div>\
      		<div ng-bind-html=\"portfolio.notes\" class=\"portfolio-notes\"></div>\
      	</div>\
      	</div>\
      </a>",
      restrict: 'A',
      scope: {
        portfolio: '='
      }
    };
  });
