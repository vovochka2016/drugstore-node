const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

medicine =require('./models/medicine');
drug =require('./models/drug');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/drugstore');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/drugs or /api/medicines');
});

app.get('/api/medicines', (req, res) => {
	medicine.getmedicines((err, medicines) => {
		if(err){
			throw err;
		}
		res.json(medicines);
	});
});

app.post('/api/medicines', (req, res) => {
	var medicine = req.body;
	medicine.addmedicine(medicine, (err, medicine) => {
		if(err){
			throw err;
		}
		res.json(medicine);
	});
});

app.put('/api/medicines/:_id', (req, res) => {
	var id = req.params._id;
	var medicine = req.body;
	medicine.updatemedicine(id, medicine, {}, (err, medicine) => {
		if(err){
			throw err;
		}
		res.json(medicine);
	});
});

app.delete('/api/medicines/:_id', (req, res) => {
	var id = req.params._id;
	medicine.removemedicine(id, (err, medicine) => {
		if(err){
			throw err;
		}
		res.json(medicine);
	});
});

app.get('/api/drugs', (req, res) => {
	drug.getdrugs((err, drugs) => {
		if(err){
			throw err;
		}
		res.json(drugs);
	});
});

app.get('/api/drugs/:_id', (req, res) => {
	drug.getdrugById(req.params._id, (err, drug) => {
		if(err){
			throw err;
		}
		res.json(drug);
	});
});

app.post('/api/drugs', (req, res) => {
	var drug = req.body;
	drug.adddrug(drug, (err, drug) => {
		if(err){
			throw err;
		}
		res.json(drug);
	});
});

app.put('/api/drugs/:_id', (req, res) => {
	var id = req.params._id;
	var drug = req.body;
	drug.updatedrug(id, drug, {}, (err, drug) => {
		if(err){
			throw err;
		}
		res.json(drug);
	});
});

app.delete('/api/drugs/:_id', (req, res) => {
	var id = req.params._id;
	drug.removedrug(id, (err, drug) => {
		if(err){
			throw err;
		}
		res.json(drug);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
