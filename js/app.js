var app = angular.module('apiGO', ['ngCookies', 'ngMaterial', 'ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/templates/index.html'
            }).
            when('/endpoints', {
                templateUrl: '/templates/endpoints.html',
                controller: 'EndpointController',
                controllerAs: 'EndpointCtrl'
            }).
            when('/history/:id', {
                templateUrl: '/templates/history.html',
                controller: 'HistoryController',
                controllerAs: 'HistoryCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}

app.controller('HistoryController', ['$http', '$rootScope', '$routeParams', function ($http, $rootScope, $routeParams) {
    var ctrl = this;
    if (!$rootScope.loggedIn) {
        if (window.location != '/#/')
            window.location.replace('/#/');
    }
    this.endpointId = $routeParams.id;

    this.history = [];

    $http.get('/api/history?token=' + $rootScope.token + '&endpointPath=/'+ this.endpointId).success(function (data) {
        ctrl.history = data;
        for(i in ctrl.history){
            ctrl.history[i].time = Date.parse(ctrl.history[i].requestDate);
            ctrl.history[i].requestDate = new Date(ctrl.history[i].time).toString();
            //alert(JSON.stringify(ctrl.history[i].parameters));
        }
        //alert(JSON.stringify(ctrl.endpoints));
    }).error(function (data) {
        showMessage("alert-danger", "History failed to load!");
    });


}]);

app.controller('EndpointController', ['$http', '$mdDialog', '$rootScope', function ($http, $mdDialog, $rootScope) {
    var ctrl = this;
    var ctrlE = this;
    this.methods = ["GET", "POST", "PUT", "DELETE"];

    //make the methods null if not used
    this.removeNulls = function (endpoints) {
        for (var i = 0; i < endpoints.length; i++) {
            var endp = endpoints[i];
            for (var j = 0; j < 4; j++) {
                if (endp.rest[this.methods[j]].statusCode == 0)
                    endp.rest[this.methods[j]] = null;
            }
        }
    };


    if (!$rootScope.loggedIn) {
        if (window.location != '/#/')
            window.location.replace('/#/');
    }

    $http.get('/api/endpoints?token=' + $rootScope.token).success(function (data) {
        ctrl.endpoints = data;
        ctrl.removeNulls(ctrl.endpoints);
        //alert(JSON.stringify(ctrl.endpoints));
    }).error(function (data) {
        showMessage("alert-danger", "Endpoints failed to load!");
    });


    this.create = function () {
        $http.post('/api/endpoints?token=' + $rootScope.token, 'post').success(function (data) {
            showMessage("alert-success", "Endpoint created!");
            ctrl.endpoints = [data].concat(ctrl.endpoints);
            ctrl.removeNulls(ctrl.endpoints);
        }).error(function (data) {
            showMessage("alert-danger", "Endpoint creation failed: " + data);
        });
    };

    this.update = function (endpoint) {
        //alert(JSON.stringify(endpoint));
        $http.put('/api/endpoints?token=' + $rootScope.token, endpoint).success(function (data) {
            showMessage("alert-success", "Endpoint modified!");
            ctrlE.endpoints[ctrlE.endpoints.indexOf(endpoint)] = data;
            ctrlE.removeNulls(ctrlE.endpoints);
        }).error(function (data) {
            showMessage("alert-danger", "Endpoint modification failed: " + data);
        });
    };

    this.delete = function (endpoint) {
        var index = ctrl.endpoints.indexOf(endpoint);

        var confirm = $mdDialog.confirm()
            .title('Are you sure you want to delete the endpoint?')
            .content('The endpoind and all its history will be deleted.')
            .ariaLabel('Delete Endpoint')
            .ok('Yes')
            .cancel('No');
        $mdDialog.show(confirm).then(function () {
            if (index >= 0)
                $http.delete('/api/endpoints?token=' + $rootScope.token + '&id=' + endpoint.id).success(function (data) {
                    showMessage("alert-success", "Endpoint deleted!");
                    ctrl.endpoints.splice(index, 1);
                }).error(function (data) {
                    showMessage("alert-danger", "Endpoint deletion failed: " + data);
                });
            else
                showMessage("alert-danger", "Endpoint deletion failed: wrong endpoint ID! Reload page!");
        }, function () {
            showMessage("alert-danger", "Canceled.");
        });
    };

    this.edit = function (endpoint) {
        $mdDialog.show({
            controller: ['$http', function ($http) {
                var ctrl = this;
                this.endpoint = endpoint;
                this.methods = ["GET", "POST", "PUT", "DELETE"];

                this.selectedIndex = 0;
                this.previousIndex = 0;

                this.change = function (isOk) {
                    if (!isOk && this.restEnabled) {
                        showMessage("alert-danger", "Invalid fields!");
                        this.selectedIndex = this.previousIndex;
                    } else {
                        this.rest = endpoint.rest[this.methods[this.selectedIndex]];
                        this.restEnabled = !(this.rest == null || this.rest == undefined);
                        this.previousIndex = this.selectedIndex;
                    }
                };
                this.change(true);


                this.toggleRest = function () {
                    if (this.restEnabled) {
                        this.rest = null;
                        endpoint.rest[this.methods[this.selectedIndex]] = null;
                    } else {
                        endpoint.rest[this.methods[this.selectedIndex]] = {
                            "statusCode": 200,
                            "delay": 0,
                            "response": "Hello world!",
                            "contentType": "text/plain"
                        };
                        this.rest = endpoint.rest[this.methods[this.selectedIndex]];
                    }
                };

                this.copy = function () {
                    for (var i = 0; i < 4; i++) {
                        if (this.rest != null && this.rest != undefined)
                            endpoint.rest[this.methods[i]] = JSON.parse(JSON.stringify(this.rest));
                        else
                            endpoint.rest[this.methods[i]] = null;
                    }
                };

                this.save = function (isOk) {
                    if (isOk || !this.restEnabled) {
                        ctrlE.update(endpoint);
                        $mdDialog.hide();
                    }
                    else
                        showMessage("alert-danger", "Invalid fields!");
                };

                //For cotent types
                this.contentTypes = ["application/json", "text/plain", "application/javascript", "application/xml", "application/pdf", "application/octet-stream", "multipart/form-data", "text/html", "text/csv", "text/xml"];
                this.querySearch = function (query) {
                    return query ? ctrl.contentTypes.filter(createFilterFor(query)) : [];
                }
                function createFilterFor(query) {
                    var lowercaseQuery = angular.lowercase(query);
                    return function filterFn(state) {
                        return (state.indexOf(lowercaseQuery) === 0);
                    };
                }
            }],
            controllerAs: 'ctrl',
            templateUrl: '/templates/edit_endpoint.html'
        });
    };
}]);


app.controller('UserController', ['$cookieStore', '$http', '$rootScope', '$mdDialog', function ($cookieStore, $http, $rootScope, $mdDialog) {
    var ctrl = this;

    try {
        $rootScope.token = $cookieStore.get('token');
        if ($rootScope.token == undefined) throw new Error();
    } catch (ex) {
        $cookieStore.put('token', '0');
        $rootScope.token = $cookieStore.get('token');
    }

    function tryAuth() {
        if ($rootScope.token != undefined && $rootScope.token != '0') {
            $http.get('/api/users/sessions?token=' + $rootScope.token).success(function (data) {
                $rootScope.user = data;
                ctrl.user = data;
                $rootScope.loggedIn = true;
            }).error(function (data) {
                $rootScope.loggedIn = false;
                if (window.location != '/#/')
                    window.location.replace('/#/');
            });
        }
        else if (window.location != '/#/')
            window.location.replace('/#/');
    }

    tryAuth();


    var putToken = function (value) {
        $cookieStore.put('token', value);
    };

    $rootScope.logout = function () {
        $rootScope.loggedIn = false;
        $rootScope.user = [];
        putToken('0');
        location.reload();
    };

    $rootScope.showLogin = function (ev) {
        $mdDialog.show({
            controller: ['$http', function ($http) {
                var ctrl = this;

                this.loginObject = {};

                this.registerObject = {};


                this.register = function () {
                    $("#loading").show();
                    $http.post('/api/users', ctrl.registerObject).
                        success(function (data, status, headers, config) {
                            location.reload();
                        }).
                        error(function (data, status, headers, config) {
                            showMessage("alert-danger", "Register failed: " + data);
                            $("#loading").hide();
                        });
                };

                this.login = function () {
                    $("#loading").show();
                    $http.post('/api/users/sessions?username=' + this.loginObject.username + '&password=' + this.loginObject.password, 'fgdfg').
                        success(function (data) {
                            //alert(data);
                            putToken(data);
                            location.reload();
                        }).
                        error(function (data) {
                            showMessage("alert-danger", "Login failed: " + data);
                            ctrl.loginObject = {
                                username: "",
                                password: ""
                            };
                            $("#loading").hide();
                        });
                };
            }],
            controllerAs: 'ctrl',
            templateUrl: '/templates/login.html',
            targetEvent: ev
        });
    };
}]);

app.directive('passwordMatch', [function () {
    return {
        restrict: 'A',
        scope: true,
        require: 'ngModel',
        link: function (scope, elem, attrs, control) {
            var checker = function () {

                //get the value of the first password
                var e1 = scope.$eval(attrs.ngModel);

                //get the value of the other password
                var e2 = scope.$eval(attrs.passwordMatch);
                return e1 == e2;
            };
            scope.$watch(checker, function (n) {

                //set the form control to valid if both
                //passwords are the same, else invalid
                control.$setValidity("unique", n);
            });
        }
    };
}]);



app.directive('tooltip', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).tooltip();
        }
    };
});


app.filter('htmlToPlaintext', function () {
        return function (text) {
            return String(text).replace(/<[^>]+>/gm, '');
        }
    }
);

function showMessage(className, text) {
    var messageDiv = $("#message");
    messageDiv.addClass(className);
    messageDiv.html(text);
    messageDiv.fadeToggle(200);
    setTimeout(function () {
        $("#message").fadeToggle(500);
    }, 2000);
    setTimeout(function () {
        $("#message").removeClass(className);
    }, 2600);
}

