angular.module('eventApp')
.controller('addEventController', ['$scope', 'addEventService',
	function($scope, addEventService) {

	// items returned from addEventService
	$scope.Event          = addEventService.Event;
	$scope.events         = addEventService.events;
	$scope.eventTypes     = addEventService.eventTypes;
	$scope.addEvent       = addEventService.addEvent;

}]);