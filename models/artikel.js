const mongoose = require('mongoose')
 

    

//daten aufgabe definieren(schema)
var ArtikelSchema = new mongoose.Schema({
    name : String,
    type : String
})
// document vorlage aus schema (Model)
 var namelModel = mongoose.model('name',ArtikelSchema)

 module.exports = namelModel
// var newArtikel = new namelModel({name:"Marco",type:"sniger"})
// newArtikel.save()




