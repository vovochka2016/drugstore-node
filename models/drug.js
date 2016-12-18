const mongoose = require('mongoose');

// drug Schema
const drugSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	medicine:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	producer:{
		type: String,
		required: true
	},
	prices:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const drug = module.exports = mongoose.model('drug', drugSchema);

// Get drugs
module.exports.getdrugs = (callback, limit) => {
	drug.find(callback).limit(limit);
}

// Get drug
module.exports.getdrugById = (id, callback) => {
	drug.findById(id, callback);
}

// Add drug
module.exports.adddrug = (drug, callback) => {
	drug.create(drug, callback);
}

// Update drug
module.exports.updatedrug = (id, drug, options, callback) => {
	var query = {_id: id};
	var update = {
		title: drug.title,
		medicine: drug.medicine,
		description: drug.description,
		producer: drug.producer,
		prices: drug.prices,
		image_url: drug.image_url,
		buy_url: drug.buy_url
	}
	drug.findOneAndUpdate(query, update, options, callback);
}

// Delete drug
module.exports.removedrug = (id, callback) => {
	var query = {_id: id};
	drug.remove(query, callback);
}
