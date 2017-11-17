module.exports = function(grunt) {
	"use strict";
	grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");

	var myLibPrefix = "nabi/sample/ui5lib";	// change this as needed

	grunt.config.merge({
		dir:{
			libPrefix : myLibPrefix,
			webapp : "webapp/" + myLibPrefix
		},
		openui5_preload : {
			//override config from bestpractice build
			preloadDbg : {
				options : {
					resources : {
						prefix : "<%= dir.libPrefix %>"	//use own prefix instead of name of root folder of this project
					}
				}
			},
			//override config from bestpractice build
			preloadTmp : {
				options : {
					resources : {
						src : [
							"**/*.js",
							"**/*.fragment.html",
							"**/*.fragment.json",
							"**/*.fragment.xml",
							"**/*.view.html",
							"**/*.view.json",
							"**/*.view.xml",
							"**/*.properties",
							"**/manifest.json",		//needed because we want the manifest to be inside the Component-preload.js file
							"!test/**"
						],
						prefix : "<%= dir.libPrefix %>"	//use own prefix instead of name of root folder of this project
					},
					compress : true
				}
			},
			//we want both library-dbg.js + library-preload.js
			library : {
				options: {
					resources: {
						cwd: "<%= dir.webapp %>",
						src: [				// everything incl. library.js + any manifest.json
							"**/*.js",
							"**/*.fragment.html",
							"**/*.fragment.json",
							"**/*.fragment.xml",
							"**/*.view.html",
							"**/*.view.json",
							"**/*.view.xml",
							"**/*.properties",
							"**/manifest.json",
							"!test/**",
							"!thirdparty/**"
						],
						prefix: "<%= dir.libPrefix %>"
					},
					compress: true,
					dest: "<%= dir.dist %>"
				},
				libraries : true
			}
		}
	});

	grunt.log.writeln("\n### grunt.config() ###\n" + JSON.stringify(grunt.config(), null, 2));


	grunt.registerTask("default", [
		"clean",
		"lint",
		"build",
		"openui5_preload:library"
	]);
};
