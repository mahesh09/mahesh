jQuery.sap.declare("SapTableOdata.util.formatter");
jQuery.sap.require("sap.ui.core.format.DateFormat");
SapTableOdata.util.formatter = {
//jQuery.sap.require("SapTableOdata.DateFormat");
//jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");


/*com.ril.ZScheme.util.formatter =  {
		
		dateFormat:function(value) {

			if(value == null){
				return null;
			}
			var _smonth = value.getMonth() + 1;
			var _sdate = value.getDate();
			if (_smonth.toString().length < 2) {

				_smonth = "0" + _smonth.toString();
			}
			if (_sdate.toString().length < 2) {

				_sdate = "0" + _sdate.toString();
			}
			var    formatDate = value.getFullYear()  + '-' + _smonth + '-' + _sdate + "T00:00:00";

			return formatDate;
		},	
		
		mdate:function(oDate){
			 oDate = oDate.split(".");
			 oDate = oDate[1]+"."+oDate[0]+"."+oDate[2];
	        if (oDate == undefined){
	 
	                        return "";
	        }
	        else{
	        var oDateFormat = sap.ca.ui.model.format.DateFormat.getInstance({
	 
	                        pattern : "dd.MMM.YYYY"
	 
	        });
	 
	        return oDateFormat.format(oDate);      
	        }
		},
		dateFormatDisplay:function(value){
			if (value == undefined)
				return "";
			var oDateFormat = sap.ca.ui.model.format.DateFormat.getInstance({
				pattern : "dd.MM.YYYY"
			});
			return oDateFormat.format(value);
		},
		dateTimeFormat:function(value) {
			if(value == null){
				return null;
			}
			var    formatDate = value.getFullYear()  + '-' + _smonth + '-' + _sdate value + "T00:00:00";
			return formatDate;
		},
		
		concatdatetime:function(val1,val2){
			if(val1 == null || val2 == null){
				return null;
			}
			 var b = val1.split(".");
			val1 = b[2]+"-"+b[1]+"-"+b[0];
			var conc = val1+"T"+val2;
			return conc;
		},
		
		concatdatetime1:function(val1,val2){
			if(val1 == null || val2 == null){
				return null;
			}
			var conc = val1+"T"+val2;
			return conc;
		},
		
	 msToTime : function(duration) {
	        var milliseconds = parseInt((duration%1000)/100)
	            , seconds = parseInt((duration/1000)%60)
	            , minutes = parseInt((duration/(1000*60))%60)
	            , hours = parseInt((duration/(1000*60*60))%24);

	        hours = (hours < 10) ? "0" + hours : hours;
	        minutes = (minutes < 10) ? "0" + minutes : minutes;
	        seconds = (seconds < 10) ? "0" + seconds : seconds;

	        return hours + ":" + minutes + ":" + seconds;
	    },
	     formatAMPM :function(hou,min) {
	    	  var hours = hou;
	    	  var minutes = min;
	    	  var ampm = hours >= 12 ? 'PM' : 'AM';
	    	  hours = hours % 12;
	    	  hours = hours ? hours : 12; // the hour '0' should be '12'
	    	  minutes = minutes < 10 ? '0'+minutes : minutes;
	    	  var strTime = hours + ':' + minutes + ' ' + ampm;
	    	  return strTime;
	    	},
	    	formatYear : function(date){
	    		var monthNames = [
	    		                  "Jan", "Feb", "Mar",
	    		                  "Apr", "May", "Jun", "Jul",
	    		                  "Aug", "Sep", "Oct",
	    		                  "Nov", "Dec"
	    		                ];
	    		                var date = date;
	    		                var day = date.getDate();
	    		                var monthIndex = date.getMonth();
	    		                var year = date.getFullYear();
	    		                var stryear = monthNames[monthIndex]+' '+day+',' + year;
	    		                return stryear;
	    	}, 
	    	FromTime : function(date){
	    		                var datess = new Date(date);
	    		                var dayt = datess.getDate();
	    		                var day = ('0' + dayt).slice(-2);
	    		                var monthIndext = datess.getMonth()+1;
	    		                var monthIndex = ('0' + monthIndext).slice(-2);
	    		                var year = datess.getFullYear();
	    		                var Hourt=datess.getHours();
	    		                var Minutest=datess.getMinutes();
	    		                var Secondst=datess.getSeconds();
	    		                var Hour=('0' + Hourt).slice(-2);
	    		                var Minutes=('0' + Minutest).slice(-2);
	    		                var Seconds=('0' + Secondst).slice(-2);
	    		               // var stryear = monthNames[monthIndex]+' '+day+',' + year;
	    		                var stryear = year+'-'+monthIndex+'-'+day+'T'+Hour+':'+Minutes+':'+Seconds;
	    		                return stryear;
	    	},  
	    	format24Hours : function(time){
		    	var hours = Number(time.match(/^(\d+)/)[1]);
		    	var minutes = Number(time.match(/:(\d+)/)[1]);
		    	if(time.match(/\s(.*)$/)  == null){
		    		var sTime = "PT"+hours+"H"+minutes+"M00S";
		    		return sTime;
		    	}
		    	var AMPM = time.match(/\s(.*)$/)[1];
		    	if(AMPM == "PM" && hours<12) hours = hours+12;
		    	if(AMPM == "AM" && hours==12) hours = hours-12;
		    	var sHours = hours.toString();
		    	var sMinutes = minutes.toString();
		    	if(hours<10) sHours = "0" + sHours;
		    	if(minutes<10) sMinutes = "0" + sMinutes;
		    	var sTime = "PT"+sHours+"H"+sMinutes+"M00S";
		    	return sTime;
	    	},
	    	
	    	State: function(value){
	    		
	    		if(value == "Approved"){
	    			return "Success";
	    		} else if(value == "Rejected"){
	    			return "Error";
	    		}else if(value == "Pending"){
	    			return "Warning";
	    		}
	    	},
	    	info: function(value){
	    		 return value+"/n  a Scheme"
	    	},
	    dateTimeFormat: function(value){
	    	
	    	var oDateFormat = sap.ca.ui.model.format.DateFormat.getInstance({
   			 
                pattern : "dd.MMM.YYYY/hh.mm.ss"
    		});
	    	return oDateFormat.format(value); 
	    		
	    	}, 
	    	formatUTCYear : function(date){
	    		var dateUTC =date.toUTCString();
	    		var stryear = dateUTC.split('G');
	         return stryear[0];
	    	},   
	    	
	    	DateValue: function(fromD){
	    		var oDateFormat = sap.ca.ui.model.format.DateFormat.getInstance({
	    			 
                    pattern : "dd.MMM.YYYY"
	    		});
    return oDateFormat.format(fromD); 	
	    	},
	    	ToDate: function(value){
	    		var value=value.toISOString()
	    		var oDateFormat = sap.ca.ui.model.format.DateFormat.getInstance({
	    			 
                    pattern : "dd.MMM.YYYY"
	    		});
    return oDateFormat.format(value);
	    	},
	    	schemeTypeFctn: function(type){
	    		if(type=="01"){
	    			return "CONNECTIVITY";
	    		}else if(type=="02"){
	    			return "DEVICES";
	    		}else if(type=="03"){
	    			return "SWITCH N WALK SCHEMES";
	    		}
	    	},
	    	*/

	    		    toUpperCase: function(sStr) {
	    		    	debugger;
	    		        return sStr.toUpperCase();
	    		    },
	    			
	    			mdate:function(oDate){
	    				 
	    		        if (oDate == undefined){
	    		 
	    		                        return "";
	    		        }
	    		        else{
	    		        	var oDate=oDate.getDate()+"-"+oDate.getMonth()+1+"-"+oDate.getFullYear()+"T:00:00:00";
	    		        /*var oDateFormat = sap.ca.ui.model.format.DateFormat.getInstance({
	    		 
	    		                        pattern : "dd.MMM.YYYY"
	    		 
	    		       });*/
	    		 
	    		        return oDate;      
	    		        }
	    			},
};
