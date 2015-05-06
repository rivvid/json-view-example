'use strict';

angular
  .module('jsonViewApp', ['platypus.jsonviewer'])
  .controller('AppCtrl', function ($scope, $http) {

    $http.get('matches.sample.1.json')
      .then(function (response) {
        $scope.data = response.data;
      });

  });
