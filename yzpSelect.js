var yzpSelect=angular.module("yzpSelect",[]);
yzpSelect.directive("yzpSelect",function(){
	return{
		scope:{
			selectName:'@',
			selectList:'=',
			yzpModel:'=',
			placeholder:'@'
		},
		restrict:'E',
		template:'<div><div><input ng-click=toggleSelect() ng-model="yzpModel" placeholder={{placeholder}} readOnly></input></div><select-ul ng-if="isShow" ng-init="isShow=false"></select-ul></div>',
		link:function(scope){
			scope.toggleSelect=function(){
				scope.isShow=!scope.isShow;
			};
		}
	}
});

yzpSelect.directive("selectUl",function(){
	return{
		restrict:'E',
		replace:'true',
		template:'<ul ng-mouseleave=toggleSelect()><li ng-repeat="item in selectList" ng-click="selected(item)">{{item}}</li></ul>',
		link:function(scope){
			scope.selected=function(item){
				scope.$parent.yzpModel=item;
				scope.toggleSelect();
			}
		}
	}
});
