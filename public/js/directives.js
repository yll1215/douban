/**
 * Created by 31326 on 2017/11/28.
 */
angular.module('directive',[])
    .directive('loading',function () {
        return {
            restrict: 'A',
            replace: true,
            template: '<img src="public/images/loading.gif" alt="" />'
        }

    });