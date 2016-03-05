var remider=angular.module('remider',[]);
remider.controller('rdCtrl', ['$scope', function($scope){
	var d = localStorage.data;
	$scope.shijieliebiao=d?JSON.parse(d):[];
	$scope.colors=['purple','green','blue','yellow','brow','pink','orange']	
	$scope.clistindex=0;
	$scope.showshijian=function(index){
		$scope.clistindex=index;
	}
	$scope.deletItem=function(){
		var r=[];
		for(var i=0;i<$scope.shijieliebiao.length;i++){
			if(i!=$scope.clistindex){
				r.push($scope.shijieliebiao[i])
			}
		}
		$scope.shijieliebiao=r;
		$scope.clistindex=0;
		localStorage.data=JSON.stringify($scope.shijieliebiao);
	}
	$scope.addshijian=function(){
		var data={
			name:'新列表'+($scope.shijieliebiao.length+1),
			color:$scope.colors[$scope.shijieliebiao.length%7],
			items:[]
		};
		$scope.shijieliebiao.push(data);
		localStorage.data=JSON.stringify($scope.shijieliebiao);
	}



	$scope.addTodo=function(){
		var cu=$scope.shijieliebiao[$scope.clistindex];
		var data={name:'',isDone:false};
		cu.items.push(data);
		localStorage.data=JSON.stringify($scope.shijieliebiao);
	}
	$scope.deleteTodo=function(index){
		var r=[];
		var cu=$scope.shijieliebiao[$scope.clistindex];
		for(var i=0; i<cu.items.length;i++){
			if(i!=index){
				r.push(cu.items[i])
			}
		}
		$scope.shijieliebiao[$scope.clistindex].items=r;
		localStorage.data=JSON.stringify($scope.shijieliebiao);
	}
	$scope.save=function(){
		localStorage.data=JSON.stringify($scope.shijieliebiao);
	}
}])