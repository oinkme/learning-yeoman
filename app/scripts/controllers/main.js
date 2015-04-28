'use strict';

/**
 * @ngdoc function
 * @name learningYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningYeomanApp
 */
angular.module('learningYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
