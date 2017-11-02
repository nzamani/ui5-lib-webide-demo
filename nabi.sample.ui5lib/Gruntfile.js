module.exports = function(grunt) {
	"use strict";
	grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
	
	grunt.config.merge({
		
		openui5_preload : {
			//we don't want "nabi.sample.ui5lib" as a prefix in Component-preload.js
			preloadDbg : {
				options : {
					resources : {
						prefix : ""
					}
				}
			},
			//we don't want "nabi.sample.ui5lib" as a prefix in Component-preload.js
			preloadTmp : {
				options : {
					resources : {
						prefix : ""
					}
				}
			},
			//we want both library-dbg.js + library-preload.js 
			library : {
				options : {
					resources: "webapp",
					dest : "dist",
					compatVersion : "1.48"
				},
				libraries : {
					"nabi/sample/ui5lib" :[
						"nabi/sample/ui5lib/**",
						"!nabi/sample/ui5lib/thirdparty/**"
					]
				}
			}
		}
	});
	
	// good for debugging
	grunt.log.writeln("\n### grunt.config() ###\n" + JSON.stringify(grunt.config(), null, 2));
	
	
	grunt.registerTask("default", [
		"clean",
		"lint",
		"build",
		"openui5_preload:library"
	]);
};