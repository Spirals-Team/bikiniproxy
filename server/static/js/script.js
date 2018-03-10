var host = window.location.hostname;
if (window.location.port) {
    host += ":" + window.location.port;
}
var ws = new WebSocket('ws://' + host);



var app = angular.module('BikiniRepair', ['ngRoute', 'ui.bootstrap'])
.directive('keypressEvents', [
    '$document',
    '$rootScope',
    function($document, $rootScope) {
        return {
            restrict: 'A',
            link: function() {
                $document.bind('keydown', function(e) {
                    $rootScope.$broadcast('keypress', e);
                    $rootScope.$broadcast('keypress:' + e.which, e);
                });
            }
        };
    }
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/state/:id/repair', {
            controller: 'stateRepair'
        })
        .when('/state/:id', {
            controller: 'stateController'
        })
        .when('/', {
            controller: 'mainController'
        });
    $locationProvider.html5Mode(false);
}])
.controller('repairModal', ['$rootScope', '$uibModalInstance', '$http', 'state', 'repair', 'parent', function($rootScope, $uibModalInstance, $http, state, repair, parent) {
        var $ctrl = this;
        $ctrl.repair = {
            state: state,
            status: "in_creation"
        };
        $ctrl.buggyState = null;

        getState(state);

        var deregisterListener = $rootScope.$on('new_state', function(e, state) {
            if (state.state.url !== $ctrl.repair.state.url) {
                $ctrl.repair = {
                    state: state.state,
                    status: "in_creation"
                };
                $ctrl.buggyState = null;
                getState(state.state);
            }
        });

        function getState(state) {
            $ctrl.buggyState = state;
            $http.get('api/state/' + md5(state.url) + '/repair').then(function (response) {
                $ctrl.repair = (response.data);
            });
            $http.get('api/state/' + md5(state.url) ).then(function (response) {
                $ctrl.buggyState = (response.data);
                $ctrl.buggyState.screenshot = 'api/state/' + md5(state.url) + '/screenshot.png'
            });
        }

        $uibModalInstance.closed.then(function() {
            deregisterListener();
        });

        $ctrl.ok = function () {
            $uibModalInstance.close();
        };
        $ctrl.nextState = function () {
            $rootScope.$emit('next_state', 'next');
        };
        $ctrl.previousState = function () {
            $rootScope.$emit('previous_state', 'next');
        };
    }])
.controller('stateModal', ['$rootScope', '$uibModalInstance', '$http', 'state', 'repair', 'parent', function($rootScope, $uibModalInstance, $http, state, repair, parent) {
    var $ctrl = this;
    $ctrl.state = state;
    $ctrl.repair = repair;
    $ctrl.parent = parent;

    getState(state);

    var deregisterListener = $rootScope.$on('new_state', function(e, state) {
        if (state.state.url !== $ctrl.state.url) {
            getState(state.state);
        }
        $ctrl.repair = state.repair;
    });

    function getState(state) {
        $ctrl.state = state;
        $http.get('api/state/' + md5(state.url)).then(function (response) {
            $ctrl.state = (response.data);
            $ctrl.state.screenshot = 'api/state/' + md5(state.url) + '/screenshot.png'
        })
    }

    $uibModalInstance.closed.then(function() {
        deregisterListener();
    });

    $ctrl.ok = function () {
        $uibModalInstance.close();
    };
    $ctrl.nextState = function () {
        $rootScope.$emit('next_state', 'next');
    };
    $ctrl.previousState = function () {
        $rootScope.$emit('previous_state', 'next');
    };
}])
.controller('stateController', ['$rootScope', '$scope', '$location', '$rootScope', '$routeParams', '$uibModal', '$route', function($rootScope, $scope, $location, $rootScope, $routeParams, $uibModal, $route) {
    var $ctrl = $scope;
    $ctrl.states = $scope.$parent.filteredStates;



    var getIndex = function (stateId) {
        if ($ctrl.states == null) {
            return -1;
        }
        for (var i = 0; i < $ctrl.states.length; i++) {
            if (md5($ctrl.states[i].url) == stateId) {
                return i;
            }
        }
        return -1;
    };

    $scope.$watch("$parent.filteredStates", function () {
        $ctrl.states = $scope.$parent.filteredStates;
        $ctrl.index = getIndex($routeParams.id);
        if (modalInstance == null) {
            openBug($route.current);
        }
    });

    var modalInstance = null;
    $rootScope.$on('$routeChangeStart', function(next, current) {
        if (modalInstance != null && current.$$route.controller != $route.current.$$route.controller) {
            modalInstance = null;
        }
        $ctrl.index = getIndex(current.params.id);
        openBug(current);
    });

    var openBug = function (current) {
        if ($scope.index === -1) {
            return;
        }
        if (modalInstance == null) {
            var modal = {
                templateUrl: 'modelState.html',
                controller: 'stateModal'
            };
            if (current.$$route.controller === 'stateRepair') {
                modal = {
                    templateUrl: 'modelRepair.html',
                    controller: 'repairModal',
                };
            }

            modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: modal.templateUrl,
                controller: modal.controller,
                controllerAs: '$ctrl',
                size: "lg",
                resolve: {
                    state: function () {
                        return $scope.states[$scope.index];
                    },
                    repair: function () {
                        return $scope.$parent.repairs[md5($scope.states[$scope.index].url)];
                    },
                    parent: $ctrl
                }
            });
            modalInstance.result.then(function () {
                modalInstance = null;
                $location.path("/");
            }, function () {
                modalInstance = null;
                $location.path("/");
            })
        }
        $rootScope.$emit('new_state', {
            state: $scope.states[$scope.index],
            repair: $scope.$parent.repairs[md5($scope.states[$scope.index].url)]
        });
    };



    var nextState = function () {
        var index  = $scope.index + 1;
        if (index == $ctrl.states.length)  {
            index = 0;
        }

        var path = "/state/" + md5($ctrl.states[index].url);
        if ($route.current.$$route.controller === 'stateRepair') {
            path += "/repair"
        }
        $location.path(path);
        if (typeof gtag !== 'undefined') {
            gtag('event', 'next', {
                'event_category': 'Shortcut'
            });
        }
        return false;
    };

    var previousState = function () {
        var index  = $scope.index - 1;
        if (index < 0) {
            index = $ctrl.states.length - 1;
        }

        var path = "/state/" + md5($ctrl.states[index].url);
        if ($route.current.$$route.controller === 'stateRepair') {
            path += "/repair"
        }
        $location.path(path);
        if (typeof gtag !== 'undefined') {
            gtag('event', 'previous', {
                'event_category': 'Shortcut'
            });
        }
        return false;
    };

    $scope.$on('keypress:39', function () {
        $scope.$apply(function () {
            nextState();
        });
    });
    $scope.$on('keypress:37', function () {
        $scope.$apply(function () {
            previousState();
        });
    });
    $rootScope.$on('next_state', nextState);
    $rootScope.$on('previous_state', previousState);
}])
.controller('AppCtrl', ['$scope', '$http', '$location', '$rootScope', '$window', function ($scope, $http, $location, $rootScope, $window) {
    $scope.sortType     = 'url'; // set the default sort type
    $scope.sortReverse  = false;
    $scope.match  = "all";
    $scope.filter   = {};
    $scope.search   = "";
    $scope.pageTitle = "BikiniRepair";

    $scope.repairs = {};
    $scope.states = [];
    $scope.errors = [];

    function cleanErrorMessage(errorMessage) {
        if (errorMessage.indexOf((" is not defined")) != -1) {
            return "XXX is not defined";
        } else if (errorMessage.indexOf(("Cannot read property ")) != -1) {
            return "Cannot read property XXX of null";
        } else if (errorMessage.indexOf((" is not a function")) != -1) {
            return "XXX is not a function";
        } else if (errorMessage.indexOf((" is not a constructor")) != -1) {
            return "XXX is not a constructor";
        } else if (errorMessage.indexOf(("Cannot set property ")) != -1) {
            return "Cannot set property XXX of null";
        } else if (errorMessage.indexOf(("Unexpected token ")) != -1 && errorMessage.indexOf("in JSON at position") != -1) {
            return "Unexpected token X in JSON at position Y";
        } else if (errorMessage.indexOf(("Unexpected token ")) != -1 ) {
            return "Unexpected token X";
        } else if (errorMessage.indexOf((" from accessing a cross-origin frame.")) != -1 ) {
            return "Blocked a frame with origin XXX from accessing a cross-origin frame.";
        } else if (errorMessage.indexOf(("Syntax error, unrecognized expression: ")) != -1 ) {
            return "Syntax error, unrecognized expression: XXX";
        } else if (errorMessage.indexOf(("Script error for: ")) != -1 ) {
            return "Script error for:  XXX";
        }
        return errorMessage;
    }
    $scope.handled = {};
    $http.get('api/repairs').then(function successCallback(response) {
        $scope.repairs = response.data;

        $scope.handled = {};
        $scope.states.forEach(function (s) {
            if ($scope.handled[$scope.status(s)] == null) {
                $scope.handled[$scope.status(s)] = 0;
            }
            $scope.handled[$scope.status(s)]++;
        })
    });
    $http.get('api/states').then(function successCallback(response) {
        $scope.states = response.data;

        $scope.handled = {};
        $scope.states.forEach(function (s) {
            if ($scope.handled[$scope.status(s)] == null) {
                $scope.handled[$scope.status(s)] = 0;
            }
            $scope.handled[$scope.status(s)]++;
        })

        var errors = {};
        for (var i in $scope.states) {
            var stateErrors = new Set();
            for (var e in $scope.states[i].errors) {
                stateErrors.add(cleanErrorMessage($scope.states[i].errors[e]));
            }
            for (var it = stateErrors.values(), error= null; error=it.next().value; ) {
                if (errors[error] == null) {
                    errors[error] = 0;
                }
                errors[error]++;
            }
        }
        $scope.errors = [];
        for (var e in errors) {
            $scope.errors.push({
                message: e,
                count: errors[e]
            });
        }
    });

    $scope.repairState = function (state) {
        $location.path('/state/' +  md5(state.url) + '/repair');
        return false;
    };

    $scope.status = function (state) {
        const repair = $scope.repairs[md5(state.url)];
        if (!repair) {
            return "Unknown"
        }
        if (repair.handled) {
            return 'Handled';
        }
        if (repair.unhandled) {
            return 'Unhandled';
        }
        if (repair.partially) {
            return 'Partially';
        }
        if (repair.moreError) {
            return 'More';
        }
        return "Unknown";
    };

    $scope.openState = function(state) {
        $location.path( "/state/" +  md5(state.url));
        return false;
    };
    $scope.sort = function (sort) {
        if (sort == $scope.sortType) {
            $scope.sortReverse = !$scope.sortReverse;
        } else {
            $scope.sortType = sort;
            $scope.sortReverse = false;
        }
        return false;
    };

    $scope.stateFilter = function (state, index, array) {
        var allFalse = true;
        for (var i in $scope.filter) {
            if ($scope.filter[i] === true) {
                allFalse = false;
                break;
            }
        }
        if (allFalse) {
            if ($scope.search) {
                for (var e in state.errors) {
                    if (state.errors[e].toLowerCase().indexOf($scope.search.toLowerCase()) !== -1) {
                        return true;
                    }
                }
                return false;
            }
            return true;
        }

        for (var i in $scope.filter) {
            if ($scope.filter[i] === true) {
                for (var e in state.errors) {
                    if(cleanErrorMessage(state.errors[e]) === i || $scope.status(state) === i) {
                        if ($scope.search) {
                            return state.errors[e].toLowerCase().indexOf($scope.search.toLowerCase()) !== -1;
                        }
                        return true;
                    }
                }
            }
        }
        return false;
    };

    $rootScope.$on('new_state', function(e, state) {
        var title = "BikiniRepair of " + state.url;
        $scope.pageTitle = title;

        if (typeof gtag !== 'undefined') {
            gtag('config', 'UA-5954162-27', {'page_path': $location.path(), 'page_title': title});
        }
    });

    ws.onmessage = function (event) {
        $scope.$apply(function () {
            var data = {};
            try {
                data = JSON.parse(event.data);
            } catch (e) {
                return;
            }
            if (data.event == null) {
                return;
            }

            var body = data.data;

            console.log(body);
        });
    };
}]);