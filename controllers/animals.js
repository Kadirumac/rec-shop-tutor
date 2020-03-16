var Animal = require('../models/Animals')

exports.createAnimal = async (req, res) => {
    var data = req.body
    
    var animal = new Animal(data)
    await animal.save()
    
    res.status(200).send(animal)
}

exports.getAnimals = async (req, res) => {
   
    var animals = await Animal.find()
  
    res.status(200).send(animals)
}

exports.getAnimal = async (req, res) => {
    
    var id = req.params.i
    
    var animal = await Animal.findById(id)
    
    res.status(200).send(animal)
}

exports.deleteAnimal = async (req, res) => {
    
    var id = req.params.id
    
    var animal = await Animal.findByIdAndDelete(id)
   
    res.status(200).send(animal)
}

exports.updateAnimal = async (req, res) => {
   
    var id = req.params.id

    var data = req.body 
    var animal = await Animal.findByIdAndUpdate(id, data, {new: true})
    res.status(200).send(animal)
}