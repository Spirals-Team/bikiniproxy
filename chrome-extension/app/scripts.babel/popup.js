'use strict';

angular.module('BikiniRepair', [])
.controller('mainController', function($scope, $location, $rootScope, $http) {
    $scope.knownErrors = []
    $scope.errors = []
    $scope.repairActions = []

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        $scope.$apply(function () {
            $scope.errors = chrome.extension.getBackgroundPage().errors[tabs[0].id]
            if ($scope.errors == null) {
                $scope.errors = []
            }
            $scope.repairActions = chrome.extension.getBackgroundPage().repairActions[tabs[0].id]
            if ($scope.repairActions == null) {
                $scope.repairActions = []
            }
            $scope.knownErrors = chrome.extension.getBackgroundPage().knownErrors[tabs[0].id]
            if ($scope.knownErrors == null) {
                $scope.knownErrors = []
            }
        });
    });
})

