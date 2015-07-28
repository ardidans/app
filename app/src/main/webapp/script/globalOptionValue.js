/**
 * 
 */

var currYear = '';
var currMonth = '';
var currDate = '';
var currFullDate = '';

var zeroSet = function(num) {
	return ('0' + num).slice(-2);
}

var setDate = function(date) {
	currYear = (date.getFullYear()) + "";
	currMonth = zeroSet(date.getMonth() + 1);
	currDate = zeroSet(date.getDate());
	currFullDate = currYear + '-' + currMonth + '-' + currDate;
	
}
