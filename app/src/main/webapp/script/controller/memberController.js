myApp.controller('memberController', [ '$scope', function($scope) {
	$scope.grid = {
		url: 'selectMemberList.do?', 
		parameter: {
			'id' : '', 
			
		}, 
		reload: function() {
			$('#member').jqGrid('setGridParam', {
				url : $scope.grid.url + $.param($scope.grid.parameter), 
				datatype : 'json', 
				
			}).trigger('reloadGrid');
		}, 
		
	};
	
	$('#member').jqGrid({
		url: $scope.grid.url + $.param($scope.grid.parameter), 
		datatype: 'json', 
		mtype: 'get', 
		colNames: ['순번', '아이디', '비밀번호', '이름', '나이', '성별', '통신사', '연락처', '등록일시', '수정일시'], 
		colModel: [{
			name: 'seq', 
			index: 'seq', 
			width: 100, 
			align: 'right',
			hidden: true, 
			
		}, {
			name: 'id', 
			index: 'id', 
			width: 80, 
			align: 'left',
			hidden: false, 
			
		}, {
			name: 'pw', 
			index: 'pw', 
			width: 100, 
			align: 'left',
			hidden: true, 
			
		}, {
			name: 'name', 
			index: 'name', 
			width: 60, 
			align: 'center',
			hidden: false, 
			
		}, {
			name: 'age', 
			index: 'age', 
			width: 40, 
			align: 'right',
			hidden: false, 
			
		}, {
			name: 'sex', 
			index: 'sex', 
			width: 40, 
			align: 'center', 
			formatter: $scope.formatter.sex, 
			hidden: false, 
			
		}, {
			name: 'telecom', 
			index: 'telecom', 
			width: 100, 
			align: 'center',
			hidden: true, 
			
		}, {
			name: 'phoneNumber', 
			index: 'phoneNumber', 
			width: 100, 
			align: 'center',
			formatter: function(cellvalue, options, rawObject) {
				var result = '';
				
				result += '[' + rawObject.telecom + '] ';
				result += rawObject.phoneFirst + '-' + rawObject.phoneMedium + '-' + rawObject.phoneLast;
				
				return result;
			}, 
			hidden: false, 
			
		}, {
			name: 'regTime', 
			index: 'regTime', 
			width: 120, 
			align: 'center',
			hidden: false, 
			
		}, {
			name: 'updTime', 
			index: 'updTime', 
			width: 120, 
			align: 'center',
			hidden: false, 
			
		}], 
		
		/* OPTIONS */
		width: 645, 
		loadonce: true, 
		reloadGrid: true, 
		rownumbers: true, 
		shrinkToFit: false, 
		
		jsonReader: {
			id: 'seq', 
			repeatitems: false, 
			root: 'member', 
			records: ('member' != null) ? 'member'.length : 0, 
		}, 
		
		/* FUNCTIONS */
		loadComplete: function(data) {
			console.log('loadComplete');
			console.log(data);
			
			$scope.memberList = data;
		}, 
		onSelectRow: function(id) {
			console.log('onSelectRow');
			console.log(id);
		}, 
		ondblClickRow: function(id) {
			console.log('ondblClickRow');
			console.log(id);
		}, 
	});
	
	$scope.exportExcel = function() {
		if (angular.isUndefined($scope.memberList) || $scope.memberList.length < 1) {
			alert('출력 할 목록이 없습니다.');
			
			return;
		}
		
		var url = 'downloadExcel.do'
		
		var win = window.open(url);
		
		win.onunload = function() {
			$scope.grid.reload();
		}
		
		
	};
	
//	$scope.exportExcel = function() {
//		var url = 'report/templateXls/' + $scope.grid.type
//				+ '?ownerCorpSeq=' + seq
//				+ '&subclassify=' + subclassify
//				+ '&excludeLCS=' + $scope.grid.queryMap.excludeLCS
//				+ '&excludeCAR=' + $scope.grid.queryMap.excludeCAR
//				+ '&from=' + $scope.grid.queryMap.from
//				+ '&to=' + $scope.grid.queryMap.to
//		;
//		
//		get(url, "GET", "json", null,
//		function(response) {
//			$scope.fileDown(response);
//			$scope.notify("목록을 다운로드 하였습니다.");
//		}, function (error, status){
//			alert('목록을 다운로드에 실패하였습니다.');
//		}, true);
//		
//		$scope.grid.reload();
//		
//	};
	
} ]);