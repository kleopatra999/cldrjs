define([
	"./common/validate",
	"./common/validate/presence",
	"./common/validate/type/path",
	"./common/validate/type/plain_object",
	"./item/get_resolved",
	"./item/lookup",
	"./main",
	"./path/normalize",
	"./util/json/merge"
], function( validate, validatePresence, validateTypePath, validateTypePlainObject, itemGetResolved, itemLookup, Cldr, pathNormalize, jsonMerge ) {

	Cldr._raw = {};

	/**
	 * Load resolved or unresolved cldr data
	 * @json [JSON]
	 *                                       
	 * Overwrite Cldr.load().
	 */
	Cldr.load = function( json ) {
		validatePresence( json, "json" );
		validateTypePlainObject( json, "json" );
		Cldr._raw = jsonMerge( Cldr._raw, json );
	};

	/**
	 * .get().
	 *
	 * Overwrite .get().
	 */
	Cldr.prototype.get = function( path, options ) {
		var attributes, ret;
		options = options || {};

		validatePresence( path, "path" );
		validateTypePath( path, "path" );
		validateTypePlainObject( options, "options" );

		attributes = this.attributes;

		// 1: use languageId as locale on item lookup for simplification purposes, because no other extended subtag is used anyway on bundle parent lookup.
		// 2: during init(), this method is called, but languageId is yet not defined. Use "" as a workaround in this very specific scenario.
		ret = itemLookup( Cldr, attributes && attributes.languageId /* 1 */ || "" /* 2 */, path, attributes );

		if ( options.throw ) {
			validate( "E_MISSING_CLDR_ITEM", typeof ret !== "undefined", function() {
				return { path: pathNormalize( path, attributes ).join( "/" ) };
			});
		}

		return ret;
	};

	return Cldr;

});
