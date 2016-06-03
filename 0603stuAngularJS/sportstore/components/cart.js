/**
 * Created by Administrator on 2016/6/3.
 * 购物车的所有功能函数
 */
var cart = angular.module("cart", []);
cart.factory("cart", function () {
    //购物车的实体容器
    var cartData = [];
    return {
        addProduct:function (id,name,price) {
            var addedToCart = false;
            for(var i=0;i < cartData.length;i++){
                if(cartData[i].id == id){
                    cartData[i].count++;
                    addedToCart = true;
                    break;
                }
            }
            if(!addedToCart){
                cartData.push(
                    {count:1,id:id,name:name,price:price}
                );
            }
        },
        removeProduct:function (id) {
            for(var i = 0;i < cartData.length;i++){
                if(cartData[i].id == id){
                    cartData.splice(i,1);
                    break;
                }
            }
        },
        getProducts:function () {
            return cartData;
        }
    };
});
cart.directive("cartSummary",function (cart) {
    return {
        restrict:"E",   //
        templateUrl:"views/cartSummary.html",
        controller:function ($scope) {
            var cartData = cart.getProducts();
            $scope.total = function () {
                var total = 0;
                for(var i = 0;i < cartData.length;i++){
                    total += (cartData[i].price * cartData[i].count);
                }
                return total;
            }
            $scope.productCount = function () {
                var sumCount = 0;
                for(var i = 0;i < cartData.length;i++){
                    sumCount += cartData[i].count;
                }
                return sumCount;
            }
        }
    };
});