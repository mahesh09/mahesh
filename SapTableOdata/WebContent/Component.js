jQuery.sap.declare("SapTableOdata.Component");
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("SapTableOdata.util.formatter");
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

sap.ui.core.UIComponent.extend("SapTableOdata.Component", {
    metadata : {
        "name" : "SapTableOdata",
        "version" : "1.1.0-SNAPSHOT",
        "library" : "SapTableOdata",
        "includes" : ["css/style.css","img"],
        "dependencies" : {
            "libs" : [ "sap.m", "sap.ui.layout"],
            "components" : []
        },
"config" : {
resourceBundle : "i18n/messageBundle.properties",
serviceConfig : {
name: "",
 serviceUrl: "../SapTableOdata/proxy/V3/Northwind/Northwind.svc"
}
},
routing : {
    config : {
        "viewType" : "XML",
        "viewPath" : "SapTableOdata.view",
        "targetControl" : "fioriContent", 
        "targetAggregation" : "pages", 
        "clearTarget" : false
    },
	routes : [
		{
			pattern : "",
			name : "S1",
			view : "S1"
		},
		{
			pattern : "S2/{a}/{b}/{c}",
		
			name : "S2",
			view : "S2"
		},
		
	]
}
    },
    createContent : function() {
        var oViewData = {
            component : this
        };

        return sap.ui.view({
            viewName : "SapTableOdata.view.Main",
            type : sap.ui.core.mvc.ViewType.XML,
            viewData : oViewData
        });
    },
    init : function()
    {
    debugger;
    	
       sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
        var sRootPath = jQuery.sap.getModulePath("SapTableOdata");
        var oServiceConfig = this.getMetadata().getConfig().serviceConfig;
        var sServiceUrl = oServiceConfig.serviceUrl;
        var mConfig = this.getMetadata().getConfig();
        this._routeMatchedHandler = new sap.m.routing.RouteMatchedHandler(this.getRouter(), this._bRouterCloseDialogs);
        this._initODataModel(sServiceUrl);
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : [ sRootPath, mConfig.resourceBundle ].join("/")
        });
        this.setModel(i18nModel, "i18n");
      
        this.getRouter().initialize();
    },

    exit : function()
    {
        this._routeMatchedHandler.destroy();
    },
    setRouterSetCloseDialogs : function(bCloseDialogs) {
        this._bRouterCloseDialogs = bCloseDialogs;
        if (this._routeMatchedHandler) {
            this._routeMatchedHandler.setCloseDialogs(bCloseDialogs);
        }
    },

    _initODataModel : function(sServiceUrl) {
    var oModel = sap.ui.model.odata.ODataModel(sServiceUrl,true);
    this.setModel(oModel);
    }
});