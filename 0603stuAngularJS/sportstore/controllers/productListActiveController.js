/**
 * Created by Administrator on 2016/6/2.
 */

angular.module("sportStore").
constant("productListActiveClass","btn-primary").
    constant("productListPageCount",3).
    constant("dataUrl","http://localhost:2403/products").
    controller("productListCtrl",function ($scope,$http,
                                           $filter,
                                           productListActiveClass,
                                           productListPageCount,
                                           dataUrl,cart) {
    var selectedCateory = null;
    //当前选择第几页
    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    $http.get(dataUrl).success(function (data) {
        $scope.data = {products:data};
    });
    //console.log("dddddddddd");
    $scope.selectCategory = function(newCategory) {
        selectedCateory = newCategory;
        $scope.selectedPage = 1;
    }

    $scope.selectPage = function (newPage) {
        $scope.selectedPage = newPage;
    }

    $scope.getCategoryClass = function (category) {
        return  selectedCateory == category ? productListActiveClass : "";
    }
    $scope.categoryFilterFn = function (product) {
        return selectedCateory == null || product.category == selectedCateory;
    }

    $scope.getPageClass = function (page) {
        return $scope.selectedPage == page ? productListActiveClass : "";
    }
    $scope.addProductToCart = function (product) {
        cart.addProduct(product.id,product.name,product.price);
    }
});