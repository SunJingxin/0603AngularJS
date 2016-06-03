/**
 * Created by Administrator on 2016/6/2.
 */
todoApp.controller("ToDoCtrl",function($scope) {
    $scope.todo = model;

    $scope.incompleteCount = function () {
        var count = 0;
        angular.forEach($scope.todo.items,function (item) {
            if (!item.done) count++;
        });
        return count;
    }

    $scope.warnLevel = function () {
        return $scope.incompleteCount() < 3 ?
            "label-success" : "label-danger";
    }

    $scope.addItem = function (actionText) {
        $scope.todo.items.push({action:actionText,done:false});
    }
});