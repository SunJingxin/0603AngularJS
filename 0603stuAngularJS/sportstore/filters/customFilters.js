/**
 * Created by Administrator on 2016/6/2.
 */
angular.module("customFilters",[]).
    filter("unique",function () {
    return function (data, propertyName) {

        if(angular.isArray(data) && angular.isString(propertyName)){
            var result = [];
            var key = {};
            for(var i = 0;i < data.length;i++){
                var val = data[i][propertyName];
                if (angular.isUndefined(key[val])){
                    key[val] = true;
                    result.push(val);
                }
            }
            return result;
        }else{
            return data;
        }
    }
}).filter("range",function ($filter) {
    return function (data,page,size) {
        //console.log(page + " " + size);
        if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)){
            var startIndex = (page - 1) * size;
            if (data.length < startIndex){
                return [];
            }else {
                //var result = [];
                //????????????????
                /*for (var i = startIndex;i < startIndex + size;i++){
                    result.push(data[i]);
                }*/
                return $filter("limitTo")(data.splice(startIndex),size);
            }
        }
    }
}).filter("pageCount",function () {
    return function (data,size) {
        //console.log(size);
        //console.log(data);
        if(angular.isArray(data)){
            var result = [];
            for(var i = 0;i < Math.ceil(data.length / size);i++){
                result.push(i);
            }
            //console.log(result);
            return result;
        }else{
            return data;
        }
    }
});