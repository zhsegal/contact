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
ID:String

})
const Patient = mongoose.model("Patient", patientSchema)


app.post('/', (req, res) => {


var patient=new Patient({
ID:req.body.ID
})

patient.save()
res.send(req.body)
console.log(patient)
})

app.listen(port, () => console.log(`Listening on port ${port}...`));