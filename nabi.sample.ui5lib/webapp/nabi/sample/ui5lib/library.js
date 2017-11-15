/*!
 * ${copyright}
 */
/* globals nabi */
/**
 * Initialization code and shared classes of library nabi.sample.ui5lib
 */
sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/library"
], function(jQuery, library) {
	"use strict";


	/**
	 * A library containing mobile controls
	 *
	 * @namespace
	 * @name nabi.sample.ui5lib
	 * @public
	 */

	// library dependencies

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name : "nabi.sample.ui5lib",
		dependencies : ["sap.ui.core", "sap.m" , "sap.ui.unified"],
		types: [],
		interfaces: [],
		controls: [
			"nabi.sample.ui5lib.ProductRating"
		],
		elements: [],
		noLibraryCSS: true,
		version: "0.1.0"
	});

	return nabi.sample.ui5lib;

});
