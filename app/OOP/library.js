'use strict'

module.exports = {
	Car: function (name, model, type) {
		if (typeof(name) !== "string"){
		    name =null;
		}
		if (typeof(model) !== "string"){
		    model =null;
		}
		if (typeof(type) !== "string"){
		    type =null;
		} 	 	 
		this.name = ((name == null) ? 'General' : name);
		this.model = ((model == null) ? 'GM' : model);
		this.type = type;
		this.numOfDoors = ((name == 'Porshe' || name == 'Koenigsegg') ? 2 : 4);
		this.numOfWheels = ((type == 'trailer') ? 8 : 4);
		this.isSaloon = ((type == 'trailer') ? false:  true);
		this.speed = '0 km/h';
		this.drive = function (spd) {
			this.speed = (type == 'trailer') ? (spd * 11) + ' km/h' : (spd * 50) + ' km/h';
		return this;
		}
	}
};