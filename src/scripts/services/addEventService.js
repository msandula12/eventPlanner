angular.module('eventApp')
.factory('addEventService', function(){

	// object constructor for events
	var Event = function(title, date, description) {
		this.title = title;
		this.date = date;
		this.description = description;
	};

	// event types listed in dropdown menu
	var eventTypes = [
		{ 
			name: 'Dining',
			style: 'dining'
		},
		{
			name: 'Shopping',
			style: 'shopping'
		}
	];

	// create empty array for new events to get pushed to
	var events = [];

	// create new event, add to events array on form submit
	var addEvent = function(title, date, description) {
		var newEvent = new Event(title.name, date, description);
		events.push(newEvent);
	};

	return { // return object for injection into addEventController
		Event      : Event,
		eventTypes : eventTypes,
		events     : events,
		addEvent   : addEvent
	};

});