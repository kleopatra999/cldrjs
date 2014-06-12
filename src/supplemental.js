define([
	"./util/always_array"
], function( alwaysArray ) {

	return function( cldr ) {

		var prepend, supplemental;
		
		prepend = function( prepend ) {
			return function( path, options ) {
				path = alwaysArray( path );
				return cldr.get( [ prepend ].concat( path ), options );
			};
		};

		supplemental = prepend( "supplemental" );

		// Week Data
		// http://www.unicode.org/reports/tr35/tr35-dates.html#Week_Data
		supplemental.weekData = prepend( "supplemental/weekData" );

		supplemental.weekData.firstDay = function( options ) {
			return cldr.get( "supplemental/weekData/firstDay/{territory}" ) ||
				cldr.get( "supplemental/weekData/firstDay/001", options );
		};

		supplemental.weekData.minDays = function( options ) {
			var minDays = cldr.get( "supplemental/weekData/minDays/{territory}" ) ||
				cldr.get( "supplemental/weekData/minDays/001", options );
			return parseInt( minDays, 10 );
		};

		// Time Data
		// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
		supplemental.timeData = prepend( "supplemental/timeData" );

		supplemental.timeData.allowed = function( options ) {
			return cldr.get( "supplemental/timeData/{territory}/_allowed" ) ||
				cldr.get( "supplemental/timeData/001/_allowed", options );
		};

		supplemental.timeData.preferred = function( options ) {
			return cldr.get( "supplemental/timeData/{territory}/_preferred" ) ||
				cldr.get( "supplemental/timeData/001/_preferred", options );
		};

		return supplemental;

	};

});
