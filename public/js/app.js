/**
 * Created by 31326 on 2017/11/28.
 */
var douban = angular.module('douban',['ngRoute','controllers']);

douban.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/today',{
        templateUrl:'view/today.html',
        controller:'todayController'
    })
        .when('/older',{
        templateUrl:'view/older.html',
        controller:'olderController'
    })
        .when('/author',{
            templateUrl:'view/author.html',
            controller:'authorController'
        })
        .when('/column',{
            templateUrl:'view/column.html',
            controller:'columnController'
        })
        .when('/mylove',{
            templateUrl:'view/mylove.html',
            controller:'myloveController'
        })
        .when('/setting',{
            templateUrl:'view/setting.html',
            controller:'settingController'
        })
        .otherwise({
            redirectTo:'/today'
        });
}]);


douban.run(['$rootScope',function ($rootScope) {
    //设置类名初始值
    $rootScope.collapsed = false;
    $rootScope.toggle = function () {
        //改变类名初始值
        $rootScope.collapsed = !$rootScope.collapsed;
        //获取所有导航
        var navs = document.querySelectorAll('.navs dd');
        if($rootScope.collapsed){
            for(var i=0;i<navs.length;i++){
                navs[i].style.transform = 'translate(0)';
                navs[i].style.transitionDelay = '0.3s';
                navs[i].style.transitionDuration = (i+1)*0.15 +'s';
            }
        }else{
            var len = navs.length -1;
            for(var j=len;j>0;j--){
                navs[j].style.transform = 'translate(-100%)';
                navs[j].style.transitionDelay ='';
                navs[j].style.transitionDuration = (len -j)*0.15 +'s';
            }

        }
    }
}]);
