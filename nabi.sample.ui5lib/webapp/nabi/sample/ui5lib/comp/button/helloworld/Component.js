sap.ui.define([
	"jquery.sap.global",
	"sap/m/Button",
	"sap/m/MessageToast",
	"sap/ui/core/UIComponent"
], function(jQuery, Button, MessageToast, UIComponent) {
	"use strict";

	var Component = UIComponent.extend("nabi.sample.ui5lib.comp.button.helloworld.Component", {
		
		metadata : {
			manifest: "json"
		}
	});

	Component.prototype.createContent = function() {
		return new Button(this.createId("myBtn"), {
			text : "Hello World Component",
			press : function(){
				MessageToast.show("Hello World!");
			}
		});
	};

	return Component;

});
