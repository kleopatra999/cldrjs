require.config({
	paths: {
		cldr: "../dist/cldr",
		fixtures: "./fixtures",
		json: "../bower_components/requirejs-plugins/src/json",
		text: "../bower_components/requirejs-text/text"
	}
});

require([

	"./functional/main",

], function() {
	mocha.run();
});
