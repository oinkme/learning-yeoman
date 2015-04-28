'use strict';

/**
 * @ngdoc function
 * @name learningYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the learningYeomanApp
 */
angular.module('learningYeomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
