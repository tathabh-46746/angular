'use strict';
demo.filter('durations', function(){
	return function(duration)
	{
		switch(duration) {
			case 1:
				return "Half hour session";
			case 2:
				return "One hour session";	
			case 3:
				return "Half day session";
			case 4:
				return "Full day session";
		}
	}
});