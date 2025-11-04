sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.ViewJSONBinding", {
        onInit() {
            var mydata = {
                            "Eid":"1",
                            "Enabled":true,
                            Address:{
                                    "Street":"Santan",
                                    "City":"Sto Tomas",
                                    "Zip":"122",
                                    "Country":"Ph"
                                    },
                            "SalesAmount":"88",
                            "CurrencyCode":"" 
                          };
           var oModel_local = new JSONModel();
           oModel_local.setData(mydata);
           this.getView().setModel(oModel_local);
        },
        formatAddress:function()
        {
            var oModel  = this.getView().getModel();
            var address = oModel.getProperty("/Address").Street;
            var zip     = oModel.getProperty("/Address").Zip;
            var city    = oModel.getProperty("/Address").City;
            var country = oModel.getProperty("/Address").Country;
            return `${address } ${zip}  ${city } ${country}`; 
        }
    });
});