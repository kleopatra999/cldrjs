define([
	"cldr",
	"json!fixtures/cldr/main/en/numbers.json",
	"json!fixtures/cldr/supplemental/likelySubtags.json"
], function( Cldr, enNumbersJson, likelySubtagsJson ) {

	Cldr.load( enNumbersJson );
	Cldr.load( likelySubtagsJson );

	describe( "new Cldr( locale )", function() {

		it( "should throw error on missing locale parameter", function() {
			expect(function() {
				new Cldr();
			}).to.throw( Error, /E_MISSING_PARAMETER/ );
		});

		it( "should throw error on invalid locale parameter type", function() {
			expect(function() {
				new Cldr( 7 );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				new Cldr( {} );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				new Cldr( [] );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				new Cldr( function() {} );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
		});

	});

	describe( ".get( path, options )", function() {
		var cldr = new Cldr( "en" );

		it( "should throw error on invalid parameter type", function() {
			expect(function() {
				cldr.get( {} );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				cldr.get( 7 );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				cldr.get( null );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				cldr.get( "", 7 );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				cldr.get( "", "invalid" );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				cldr.get( "", [] );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
		});

		it( "should throw error on missing item when options.throw is true", function() {
			expect(function() {
				cldr.get( "any/missing/path", { throw: true } );
			}).to.throw( Error, /E_MISSING_CLDR_ITEM/ );
		});

	});

	describe( ".main( path, options )", function() {
		var cldr = new Cldr( "en" );

		it( "should throw error on invalid parameter type", function() {
			expect(function() {
				cldr.main( {} );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				cldr.main( 7 );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				cldr.main( null );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				cldr.main( "", 7 );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				cldr.main( "", "invalid" );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
			expect(function() {
				cldr.main( "", [] );
			}).to.throw( Error, /E_INVALID_PAR_TYPE/ );
		});

		it( "should throw error on missing item when options.throw is true", function() {
			expect(function() {
				cldr.main( "any/missing/path", { throw: true } );
			}).to.throw( Error, /E_MISSING_CLDR_ITEM/ );
		});

	});

});
