const mongoose = require('mongoose');

// medicine Schema
const medicineSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const medicine = module.exports = mongoose.model('medicine', medicineSchema);

// Get medicines
module.exports.getmedicines = (callback, limit) => {
	medicine.find(callback).limit(limit);
}

// Add medicine
module.exports.addmedicine = (medicine, callback) => {
	medicine.create(medicine, callback);
}

// Update medicine
module.exports.updatemedicine = (id, medicine, options, callback) => {
	var query = {_id: id};
	var update = {
		name: medicine.name
	}
	medicine.findOneAndUpdate(query, update, options, callback);
}


// Delete medicine
module.exports.removemedicine = (id, callback) => {
	var query = {_id: id};
	medicine.remove(query, callback);
}
