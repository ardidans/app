myApp.controller('rootController', [ '$scope', function($scope) {

	$scope.now = currFullDate;
	$scope.arrTab = [ 'member', 'b', 'c' ];
	$scope.activeTab = $scope.arrTab[0];

	$scope.setTabContent = function(index) {
		$scope.activeTab = index;
	};

	$scope.alert = function(val) {
		console.log(val);
	};
	
	$scope.formatter = {
		sex: function(cellvalue, optinos, rawObject) {
			var result = (cellvalue == 'M') ? '남' : '여';
			
			return result;
		}, 
		
	};

} ]);