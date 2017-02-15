function Telephone(){
	this.displayMessage = "";
	this.isPowerOn = false;	
}
Telephone.prototype.powerOn = function(){
	this.displayMessage = "Device is up";
		this.isPowerOn = true;	
};
Telephone.prototype.powerOff = function(){
	this.displayMessage = "";
		this.isPowerOn = false;
};
Phone = function(name,model,os) {	
	//Ensure Only string can be assigened. Not [1]
	(typeof name == "string") ? this.name = name	: this.name = "General";
	(typeof model == "string") ? this.model = model	: this.model = "Mobile";
	(typeof os == "string") ? this.os = os	: this.os = "Android";
	
	if (this.name  === "Tecno" || this.name === "Infinix" || this.name === "General") { 	
	  	this.CPU = "MTK Processor";		
	  	this.isAndroid = true;			
	  	this.doubleSim = true;			
	  	this.isIphone = false;	
	  	this.isCharging = false;		
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
Phone.prototype = new Telephone();
Phone.prototype.charge = function() {
	this.isCharging = true;	
};
Phone.prototype.displayInfo = function() {
	return "Name: " + this.name + " Model: " + this.model + " Os: " + this.os;	
};
Phone.prototype.stopCharge = function() {
	this.isCharging = false;	
};
Phone.prototype.powerOn = function(){
	this.displayMessage = "Device is up, seraching for wireless signal";
	this.isPowerOn = true;	
};	

