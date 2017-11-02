module.exports = function(grunt) {
	"use strict";
	grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
	
	// good for debugging
	grunt.log.writeln("\n### grunt.config() ###\n" + JSON.stringify(grunt.config(), null, 2));
	
	grunt.registerTask("default", [
		"clean",
		"lint",
		"build"
	]);
};