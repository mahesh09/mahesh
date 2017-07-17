jQuery.sap.require("sap.ui.thirdparty.d3");
jQuery.sap.declare("SapTableOdata.util.formatter");
sap.ui.controller("SapTableOdata.view.S1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.S1
*/
	onInit: function() {
		
		//This is second commit///////////
		//this is my third commit//////////////
		//this is my third commit
		///////////////
		var oDate=new Date();
		 var ctFromTstamp = SapTableOdata.util.formatter.mdate(oDate);
		 
		this.byId("fnameid").setValue(ctFromTstamp);
		var data =[
		           {
		        	   fname:"uma",lname:"rao"
		           }];
		var ojsmodel=new sap.ui.model.json.JSONModel();
		ojsmodel.setData(data);
		this.getView().setModel(ojsmodel,"omodel");
		var that=this;
		that.ontabadd();
var omodel=this.getOwnerComponent().getModel();
var path="/Employees";
omodel.read(path,null,[],true,function(oData,response)
		{
	var jsmodel=new sap.ui.model.json.JSONModel(oData);
	//jsmodel.setData(oData);
	that.getView().byId("otable").setModel(jsmodel);
	var otab=that.getView().byId("otable");
	//var data=otab.getModel().getData();
	var items=otab.getItems();
	this.flag=4;
	this.flag1=5;
	for(var i=0;i<items.length;i++){
		if(i < this.flag){
		items[i].addStyleClass("abc");
	}else if(i<=this.flag1){items[i].addStyleClass("bcd");}
		else{items[i].addStyleClass("ecf");}
	}
	var d= new Date ();
	if ( d.getDate()>=1){
	    that.getView().byId("gst1").setVisible(true);
	}else {
		that.getView().byId("gst1").setVisible(false);
	}
	   
	
});
/*var treeData = [
                {
                  "name": "Top Level",
                  "parent": "null",
                  "children": [
                    {
                      "name": "Level 2: A",
                      "parent": "Top Level",
                      "children": [
                        {
                          "name": "Son of A",
                          "parent": "Level 2: A"
                        },
                        {
                          "name": "Daughter of A",
                          "parent": "Level 2: A"
                        }
                      ]
                    },
                    {
                      "name": "Level 2: B",
                      "parent": "Top Level"
                    }
                  ]
                }
              ];
//************** Generate the tree diagram	 *****************
var margin = {top: 20, right: 120, bottom: 20, left: 120},
	width = 960 - margin.right - margin.left,
	height = 500 - margin.top - margin.bottom;
	
var i = 0,
	duration = 750,
	root;

var tree = d3.layout.tree()
	.size([height, width]);

var diagonal = d3.svg.diagonal()
	.projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
	.attr("width", width + margin.right + margin.left)
	.attr("height", height + margin.top + margin.bottom)
  .append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;
  
update(root);

d3.select(self.frameElement).style("height", "500px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
	  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
	  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
	  .on("click", click);

  nodeEnter.append("circle")
	  .attr("r", 1e-6)
	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
	  .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
	  .attr("dy", ".35em")
	  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
	  .text(function(d) { return d.name; })
	  .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
	  .attr("r", 10)
	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
	  .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
	  .remove();

  nodeExit.select("circle")
	  .attr("r", 1e-6);

  nodeExit.select("text")
	  .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
	  .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
	  .attr("class", "link")
	  .attr("d", function(d) {
		var o = {x: source.x0, y: source.y0};
		return diagonal({source: o, target: o});
	  });

  // Transition links to their new position.
  link.transition()
	  .duration(duration)
	  .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
	  .duration(duration)
	  .attr("d", function(d) {
		var o = {x: source.x, y: source.y};
		return diagonal({source: o, target: o});
	  })
	  .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
	d.x0 = d.x;
	d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
	d._children = d.children;
	d.children = null;
  } else {
	d.children = d._children;
	d._children = null;
  }
  update(d);
}*/
	},
	onSearch : function(oevt){
		debugger;
		var search=oevt.oSource.getValue();
		var otab=this.getView().byId("otable");
		var items=otab.getItems();
		var data=otab.getModel().getData();
		
		for(i=0; i<data.results.length;i++){
			var id=data.results[i].EmployeeID.toString();
		    var name=data.results[i].FirstName.toLowerCase();
		    if(id.indexOf(search)> -1 || name.indexOf(search) > -1 ){
				items[i].setVisible(true);
				//otab.setVisible(true)
			}else{
				items[i].setVisible(false);
				//otab.setVisible(false);
			}
			
		}
		
		
		
	},
	
	/*NavTONext:function(oEvt){
		debugger;
		var a=oEvt.mParameters.listItem.mAggregations.cells[0].mProperties.text;
		var b=oEvt.mParameters.listItem.mAggregations.cells[1].mProperties.text;
		var c=oEvt.mParameters.listItem.mAggregations.cells[2].mProperties.text;
		var router=sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("S2",{
			a:a,
			b:b,
			c:c
		});
	},
	*/
	ontabadd:function(){
		var that=this;
		var bEvOTFfieldForTable="1233,11113,1131313,12313,13131@1233,11113,1131313,12313,13131";
		//var bEvOTFfieldForTable=oData.Evotf;
    var tempArr=bEvOTFfieldForTable.split("@");
    that.finalOTFarr =[];
    for(var i=0;i<tempArr.length;i++){
    var otfArr=tempArr[i].split(",");
    
    var obj={};
    obj.plan=otfArr[0]; 
    obj.from=otfArr[1];
    obj.to=otfArr[2];
    obj.otf=otfArr[3];
    obj.value=otfArr[4];
    
    that.finalOTFarr.push(obj);
    }
    
    var jsonModel = new sap.ui.model.json.JSONModel(that.finalOTFarr);
    var oTable = that.getView().byId("otable234");
    oTable.setModel(jsonModel);
    var Template = new sap.m.ColumnListItem({
          cells:[new sap.m.Text({ text:"{plan}"}),
                 new sap.m.Input({value:"{from}",enabled:true}),
                 new sap.m.Input({value:"{to}",enabled:true}),
                 new sap.m.Input({value:"{otf}",enabled:true, liveChange:[this.onEnteringOTF,this]}),
                 new sap.m.Input({value:"{value}",enabled:true})]
    });
    oTable.bindItems("/",Template);
   // oTable.setModel(jsonModel);
    
    
    //oTable.bindAggregation(items);
          
},
onEnteringOTF:function(e){
	//this.onRechargeTo(e);
var otf = e.oSource.getValue();
var oTable = this.getView().byId("otable234");

//var context = e.oSource.getBinddingContext();
var context = e.oSource.getBindingContext();
oTable.getModel().setProperty("value",otf,context);
e.oSource.oParent.getCells()[4].setValue(otf);

},

onCommonSave : function(oevt){
	
	var reject=this.byId("otable");
var items=[];
	if(reject.getSelectedItems().length > 0){
		for(var i=0;i<reject.getSelectedItems().length;i++){
			var sPath=reject.getSelectedItems()[i].getBindingContext().sPath;
			var sdata=reject.getModel().getProperty(sPath);
			var data=sdata.EmployeeID;
			items.push(data);
		}
	}return items;
}
/*var that.arr=[];
var otable=this.byId("otable");
var property=this.byId("uploadadata").getValue();
that.arr.push({property:property});
var omodel = new sap.ui.model.json.JSONModel(that.arr);
otable.setModel(omodel);
//In view//////////
items="{/}"*/

});