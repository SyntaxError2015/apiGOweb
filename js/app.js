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
            otherwise({
                redirectTo: '/#/'
            });
    }]);

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}

app.controller('EndpointController', function () {
    this.endpoints = [
        {
            "id": "551faa4696d4c24c6a000001",
            "urlPath": "/uTnALoNH",
            "user": {
                "id": "",
                "username": "",
                "password": "",
                "firstName": "",
                "lastName": "",
                "email": "",
                "facebookId": "",
                "googleId": ""
            },
            "name": "test endpoint",
            "description": "desc",
            "authentication": {
                "userId": "",
                "password": ""
            },
            "get": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericGET"
            },
            "post": {
                "statusCode": 0,
                "delay": 0,
                "response": "",
                "function": ""
            },
            "put": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericPUT"
            },
            "delete": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericDELETE"
            }
        },
        {
            "id": "551face096d4c22048000001",
            "urlPath": "/EUbDYOZw",
            "user": {
                "id": "",
                "username": "",
                "password": "",
                "firstName": "",
                "lastName": "",
                "email": "",
                "facebookId": "",
                "googleId": ""
            },
            "name": "",
            "description": "",
            "authentication": {
                "userId": "",
                "password": ""
            },
            "get": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericGET"
            },
            "post": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericPOST"
            },
            "put": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericPUT"
            },
            "delete": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericDELETE"
            }
        },
        {
            "id": "551face096d4c22048000002",
            "urlPath": "/WAF5TEx8",
            "user": {
                "id": "",
                "username": "",
                "password": "",
                "firstName": "",
                "lastName": "",
                "email": "",
                "facebookId": "",
                "googleId": ""
            },
            "name": "",
            "description": "",
            "authentication": {
                "userId": "",
                "password": ""
            },
            "get": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericGET"
            },
            "post": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericPOST"
            },
            "put": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericPUT"
            },
            "delete": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericDELETE"
            }
        },
        {
            "id": "551face196d4c22048000003",
            "urlPath": "/Ngfj5LH9",
            "user": {
                "id": "",
                "username": "",
                "password": "",
                "firstName": "",
                "lastName": "",
                "email": "",
                "facebookId": "",
                "googleId": ""
            },
            "name": "",
            "description": "",
            "authentication": {
                "userId": "",
                "password": ""
            },
            "get": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericGET"
            },
            "post": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericPOST"
            },
            "put": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericPUT"
            },
            "delete": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericDELETE"
            }
        },
        {
            "id": "551face196d4c22048000004",
            "urlPath": "/Mlb4ddgO",
            "user": {
                "id": "",
                "username": "",
                "password": "",
                "firstName": "",
                "lastName": "",
                "email": "",
                "facebookId": "",
                "googleId": ""
            },
            "name": "",
            "description": "",
            "authentication": {
                "userId": "",
                "password": ""
            },
            "get": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericGET"
            },
            "post": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericPOST"
            },
            "put": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericPUT"
            },
            "delete": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericDELETE"
            }
        },
        {
            "id": "551face296d4c2204800000e",
            "urlPath": "/i5IfoIP7",
            "user": {
                "id": "",
                "username": "",
                "password": "",
                "firstName": "",
                "lastName": "",
                "email": "",
                "facebookId": "",
                "googleId": ""
            },
            "name": "",
            "description": "",
            "authentication": {
                "userId": "",
                "password": ""
            },
            "get": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericGET"
            },
            "post": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericPOST"
            },
            "put": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericPUT"
            },
            "delete": {
                "statusCode": 200,
                "delay": 0,
                "response": "Hello world!",
                "function": "Api.GenericDELETE"
            }
        }
    ];
});


app.controller('UserController', ['$cookieStore', '$http', '$rootScope', '$mdDialog', function ($cookieStore, $http, $rootScope, $mdDialog) {
    try {
        $rootScope.token = $cookieStore.get('token');
        if($rootScope.token==undefined) throw new Error();
    } catch (ex) {
        $cookieStore.put('token', '0');
        $rootScope.token = $cookieStore.get('token');
    }

    function tryAuth() {
        if ($rootScope.token != undefined && $rootScope.token != '0') {
            $http.get('/api/users?token=' + $rootScope.token).success(function (data) {
                $rootScope.user = data;
                $rootScope.loggedIn = false;
            }).error(function (data) {
                $rootScope.loggedIn = true;
            });
        }
    }

    tryAuth();


    var putToken = function (value) {
        $cookieStore.put('token', value);
    };

    $rootScope.logout = function(){
        $rootScope.loggedIn = false;
        $rootScope.user = [];
        putToken('0');
        location.reload();
    };

    $rootScope.showLogin = function (ev) {
        $mdDialog.show({
            controller: ['$http', function ($http) {
                var ctrl = this;

                this.loginObject = {
                    username: "",
                    password: ""
                };

                this.registerObject = {
                    username: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    email: ""
                };

                this.login = function () {
                    $http.post('/api/login', ctrl.loginObject).
                        success(function (data, status, headers, config) {
                            putToken(data);
                            location.reload();
                        }).
                        error(function (data, status, headers, config) {
                            showMessage("alert-danger", "Login failed: " + data);
                            ctrl.loginObject = {
                                username: "",
                                password: ""
                            };
                            $("#loading").hide();
                        });
                };

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
            }],
            controllerAs: 'ctrl',
            templateUrl: '/templates/login.html',
            targetEvent: ev
        });
    };


}]);

function LoginRegisterController() {
    var loginObject = {
        username: "",
        password: ""
    };

    var registerObject = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    };

    var login = function () {
        alert('ceva');
    };

    var register = function () {
        $("#loading").show();
        alert('ceva');
        $http.post('/api/user', $rootScope.registerObject).
            success(function (data, status, headers, config) {
                location.reload();
            }).
            error(function (data, status, headers, config) {
                showMessage("alert-danger", "Register failed: " + data);
            }).then(function () {
                $("#loading").hide();
            });
    };
}

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

// app.directive('newEpisodes', function () {
//     return {
//         restrict: 'E',
//         templateUrl: '/Views/new-episodes.html',
//         controller: ['$http', function ($http) {
//             var ctrl = this;

//             this.loadMore = function () {
//                 //make the div bigger
//                 var ep = $(".ep");
//                 var addHeight = ep.height() + 2 * parseInt(ep.css('padding-bottom'));
//                 $("#eps").height($("#eps").height() + addHeight);

//                 $http.get('/API/EpisodeAPI.php?get=firstPageEpisodes&start=' + this.start + '&number=' + (this.getNrEpsPerRow())).success(function (data) {
//                     ctrl.episodes = ctrl.episodes.concat(data);
//                     ctrl.start += ctrl.getNrEpsPerRow()
//                 });
//             };

//             this.getNrEpsPerRow = function () {
//                 var screenWidth = $('#eps').width();
//                 if (screenWidth > 1700) return 5;
//                 if (screenWidth >= 1200) return 4;
//                 if (screenWidth >= 992) return 3;
//                 return 2;
//             };

//             $http.get('/API/EpisodeAPI.php?get=firstPageEpisodes&start=1&number=' + (this.getNrEpsPerRow() * 2)).success(function (data) {
//                 ctrl.episodes = data;
//             });

//             this.start = this.getNrEpsPerRow() * 2 + 1;
//         }],
//         controllerAs: 'epCtrl'
//     };
// });

// app.directive('episodesList', function () {
//     return {
//         restrict: 'E',
//         templateUrl: '/Views/episodes-list.html',
//         scope: {
//             animeid: '=animeid'
//         },
//         controller: ['$scope', '$http', function ($scope, $http) {
//             var ctrl = this;
//             this.text = $scope.animeid;
//             $http.get('/API/EpisodeAPI.php?get=episodesForAnime&id=' + $scope.animeid).success(function (data) {
//                 ctrl.episodes = data;
//             });
//         }],
//         controllerAs: 'epCtrl'
//     }
// });

// app.directive('anime', function () {
//     return {
//         restrict: 'E',
//         templateUrl: '/Views/anime.html',
//         scope: {
//             animeid: '=animeid'
//         },
//         controller: ['$scope', '$http', function ($scope, $http) {
//             var ctrl = this;

//             $http.get('/API/AnimeAPI.php?get=anime&id=' + $scope.animeid).success(function (data) {
//                 ctrl.anime = data;
//             });
//         }],
//         controllerAs: 'animeCtrl'
//     }
// });


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

