sap.ui.controller("SapTableOdata.view.Main", {

    onInit : function()
    {
    	debugger;
        if (sap.ui.Device.support.touch === false) 
        {
            this.getView().addStyleClass("sapUiSizeCompact");
        }
    }
});
