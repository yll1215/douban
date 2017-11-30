/**
 * Created by 31326 on 2017/11/28.
 */
angular.module('controllers',[])
//导航菜单
.controller('navController',['$scope',function ($scope) {
    $scope.navs = [
        {link:'#/today',text:'今日一刻',icon:'icon-home'},
        {link:'#/older',text:'往期内容',icon:'icon-file-empty'},
        {link:'#/author',text:'热门作者',icon:'icon-pencil'},
        {link:'#/column',text:'栏目浏览',icon:'icon-menu'},
        {link:'#/mylove',text:'我的喜欢',icon:'icon-heart'},
        {link:'#/setting',text:'设置',icon:'icon-cog'},
        ];
}])
//今日一刻
.controller('todayController',['$scope','$http','$filter','$rootScope',function ($scope,$http,$filter,$rootScope) {
    var today = $filter('date')(new Date,'yyyy-MM-dd');

    $rootScope.title = '今日一刻';
    $rootScope.index = 0;
    $rootScope.loaded= false;


    $http({
        url:'api/today.php',
        method:'get',
        params:{today:today}
    }).success(function (data) {
        console.log(data);
        $rootScope.loaded = true;
        $scope.now = new Date;
        $scope.posts = data.posts;
    });
}])
//往期内容
.controller('olderController',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {
    $rootScope.title = '往期内容';
    $rootScope.index = 1;
    $rootScope.loaded= false;
    $http({
        url:'api/older.php',

    }).success(function (data) {
        console.log(data);
        $rootScope.loaded = true;
        $scope.now = new Date;
        $scope.posts = data.posts;
    });
    
}])
//热门作者
.controller('authorController',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {
    $rootScope.title = '热门作者';
}])
//栏目
.controller('columnController',['$scope','$rootScope',function ($scope,$rootScope) {
    $rootScope.title = '栏目浏览';
}])
//我的喜爱
.controller('myloveController',['$scope','$rootScope',function ($scope,$rootScope) {
    $rootScope.title = '我的喜欢';
}])
//设置
.controller('settingController',['$scope','$rootScope',function ($scope,$rootScope) {
    $rootScope.title = '设置';
}])