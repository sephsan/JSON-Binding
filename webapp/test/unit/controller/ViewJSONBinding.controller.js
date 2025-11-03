/*global QUnit*/

sap.ui.define([
	"sapips/training/jsonbinding/controller/ViewJSONBinding.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewJSONBinding Controller");

	QUnit.test("I should test the ViewJSONBinding controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
