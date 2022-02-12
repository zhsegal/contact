const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

const mongoURI = "mongodb+srv://admin-zvika:5293612aA!@cluster0.w9hbu.mongodb.net/Contact";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

const patientSchema = new mongoose.Schema({
ID:String,
GENDER: String,
AGE: String,

TIME: String
})
const Patient = mongoose.model("Patient", patientSchema)


app.post('/', (req, res) => {
var year=new Date().getDate().toString()
var day=new Date().getFullYear().toString()
var month=new Date().getMonth()
var monthi= month + 1
var time= year +'-'+ monthi + '-' + day

var patient=new Patient({
ID:req.body.ID,
GENDER:req.body.GENDER,
AGE: req.body.AGE,





TIME: time
})

patient.save()

console.log(patient)
res.redirect('/')
})

app.listen(port, () => console.log(`Listening on port ${port}...`));