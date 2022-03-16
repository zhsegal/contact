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
TIME: String,


DURATIONYEARS: String,
DURATIONMONTHS: String,
PROSTHESIS: String,
OCUPATION:String,
PART:[],
ATOPIC:String,
LACGEL:String,


testtype1:String,
testnum1:String,
testres1:String,
testrel1:String,

testtype2:String,
testnum2:String,
testres2:String,
testrel2:String,

testtype3:String,
testnum3:String,
testres3:String,
testrel3:String,

testtype4:String,
testnum4:String,
testres4:String,
testrel4:String,

testtype5:String,
testnum5:String,
testres5:String,
testrel5:String,

testtype6:String,
testnum6:String,
testres6:String,
testrel6:String,

testtype7:String,
testnum7:String,
testres7:String,
testrel7:String,

testtype8:String,
testnum8:String,
testres8:String,
testrel8:String,

testtype9:String,
testnum9:String,
testres9:String,
testrel9:String,

testtype10:String,
testnum10:String,
testres10:String,
testrel10:String,

testtype11:String,
testnum11:String,
testres11:String,
testrel11:String,

testtype12:String,
testnum12:String,
testres12:String,
testrel12:String,


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

DURATIONYEARS:req.body.DURATIONYEARS,
DURATIONMONTHS:req.body.DURATIONMONTHS,
PROSTHESIS:req.body.PROSTHESIS,

OCUPATION:req.body.OCUPATION,
PART:req.body.PART,
ATOPIC:req.body.ATOPIC,
LACGEL:req.body.LACGEL,

testtype1:req.body.TESTTYPE1,
testnum1:req.body.TESTNUM1,
testres1:req.body.TESTRESULTS1,
testrel1:req.body.TESTREL1,

testtype2:req.body.TESTTYPE2,
testnum2:req.body.TESTNUM2,
testres2:req.body.TESTRESULTS2,
testrel2:req.body.TESTREL2,

testtype3:req.body.TESTTYPE3,
testnum3:req.body.TESTNUM3,
testres3:req.body.TESTRESULTS3,
testrel3:req.body.TESTREL3,

testtype4:req.body.TESTTYPE4,
testnum4:req.body.TESTNUM4,
testres4:req.body.TESTRESULTS4,
testrel4:req.body.TESTREL4,

testtype5:req.body.TESTTYPE5,
testnum5:req.body.TESTNUM5,
testres5:req.body.TESTRESULTS5,
testrel5:req.body.TESTREL5,

testtype6:req.body.TESTTYPE6,
testnum6:req.body.TESTNUM6,
testres6:req.body.TESTRESULTS6,
testrel6:req.body.TESTREL6,

testtype7:req.body.TESTTYPE7,
testnum7:req.body.TESTNUM7,
testres7:req.body.TESTRESULTS,
testrel8:req.body.TESTREL7,

testtype8:req.body.TESTTYPE8,
testnum8:req.body.TESTNUM8,
testres8:req.body.TESTRESULTS8,
testrel8:req.body.TESTREL8,

testtype9:req.body.TESTTYPE9,
testnum9:req.body.TESTNUM9,
testres9:req.body.TESTRESULTS19,
testrel9:req.body.TESTREL9,

testtype10:req.body.TESTTYPE10,
testnum10:req.body.TESTNUM10,
testres10:req.body.TESTRESULTS10,
testrel10:req.body.TESTREL10,

testtype11:req.body.TESTTYPE11,
testnum11:req.body.TESTNUM11,
testres11:req.body.TESTRESULTS11,
testrel11:req.body.TESTREL11,

testtype12:req.body.TESTTYPE12,
testnum12:req.body.TESTNUM12,
testres12:req.body.TESTRESULTS12,
testrel12:req.body.TESTREL12,








TIME: time
})

patient.save()

console.log(patient)
res.redirect('/')
})

app.listen(port, () => console.log(`Listening on port ${port}...`));