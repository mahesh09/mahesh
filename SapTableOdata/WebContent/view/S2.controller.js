jQuery.sap.require("sap.ui.core.mvc.Controller");
sap.ui.controller("SapTableOdata.view.S2", {

	onInit : function() {debugger;
		debugger;
		var that=this;
		var path="/Employees";
		var omodel=this.getOwnerComponent().getModel();
		omodel.read(path,null,[],true,function(oData,oresponse){
			var omodel=new sap.ui.model.json.JSONModel();
			omodel.setData(oData);
			that.byId("idcombo").setModel(omodel);
			
		});
		
		this.oInitialLoadFinishedDeferred = jQuery.Deferred();
		this.getRouter().attachRoutePatternMatched(this.onRouteMatched, this);
	},
	getRouter : function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
	},
	onRouteMatched : function(oEvent) {
		debugger;
		var that=this;
	var id = oEvent.getParameter("arguments").a;
	var id1 = oEvent.getParameter("arguments").b;
	
		//this.getView().byId("na").setValue(id);
		//this.getView().byId("na1").setValue(id1);
	},

	onFinish:function(oevt){
		var a=oevt.oSource.getSelectedKeys();
		for(i=0;i<a.length;i++){
		//var b=a.split();
		this.byId("idcombo2").setSelectedKey("a");
		}
	},
	onNavBack : function(){
		var router=sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("S1");
	}

});