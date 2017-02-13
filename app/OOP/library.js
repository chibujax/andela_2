'use strict'
module.exports = {
	Phone: function(name,model,os) {	
		//Ensure Only string can be assigened. Not [1]
		(typeof name == "string") ? this.name = name	: this.name = "General";
		(typeof model == "string") ? this.model = model	: this.model = "Mobile";
		(typeof os == "string") ? this.os = os	: this.os = "Android";
		this.isPowerOn = false;	
		this.isCharging = false;
		this.charge = function() {		
			this.isCharging = true;		
		}	
		this.stopCharge = function() {	
			this.isCharging = false;	
		}
		this.powerOn = function() {		
			this.isPowerOn = true;		
		}
		this.powerOff = function() {	
			this.isPowerOn = false;		
		}	
		if (this.name  === "Tecno" || this.name === "Infinix" || this.name === "General") { 	
		  	this.CPU = "MTK Processor";		
		  	this.isAndroid = true;			
		  	this.doubleSim = true;			
		  	this.isIphone = false;			
		}	
		else {			
			if (this.os === "iOS") {
				this.CPU = "Apple Chipset";		
			  	this.isAndroid = false;			
			  	this.isIphone = true;			
			  	this.doubleSim = false;			
			  	this.isCharging = false;		
			}
			else if (this.os === "Android") {
				this.CPU = "SnapDragon Processor";		
			  	this.isAndroid = true;			
			  	this.doubleSim = false;			
			  	this.isIphone = false;			
			  	this.isCharging = false;		
			}
			else {		
				this.CPU = "Microsoft Processor/Java CPU";		
				this.isAndroid = false;			
			  	this.isIphone = false;			
			  	this.doubleSim = false;			
			  	this.isCharging = false;		
			}
		}
	}

};