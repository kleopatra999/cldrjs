define([
	"./main",
	"./supplemental"
], function( Cldr, supplemental ) {

	var initSuper = Cldr.prototype.init;

	/**
	 * .init() automatically ran on construction.
	 *
	 * Overload .init().
	 */
	Cldr.prototype.init = function() {
		initSuper.apply( this, arguments );
		this.supplemental = supplemental( this );
	};

	return Cldr;

});
