/**
 * Created by Bogdan on 3/14/2015.
 */
 var app = angular.module('apiGO', ['ngCookies', 'ngMaterial']);

 function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}

app.controller('UserController', ['$cookieStore', '$http', '$rootScope', function($cookieStore, $http, $rootScope) {
    try {
        this.userKey = $cookieStore.get('userKey');
    } catch(ex) {
        $cookieStore.put('userKey', '0');
        this.userKey = $cookieStore.get('userKey');
    }

    $rootScope.user = "NBI";

    this.save = function(){
        putCookie("userKey", this.userKey);
    };

    putCookie = function(key, value){
        $cookieStore.put(key, value);
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


app.filter('htmlToPlaintext', function() {
    return function(text) {
        return String(text).replace(/<[^>]+>/gm, '');
    }
}
);

