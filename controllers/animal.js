const AnimalSchema = require('../models/animalModel')

exports.addAnimal = async (req,res) => {
    const {name,type,expectedage,category,description} = req.body

    const animal = AnimalSchema({
        name,
        type,
        expectedage,
        category,
        description
    })

    try {
        if(!name || !type || !category || !description){
            return res.status(400).json({message: "All diels are required"})
        }
        await animal.save()
        res.status(200).json({message: "Animal Added"})
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }

    console.log(animal)
}

exports.getAnimal = async (req,res) => {
    try{
        const animals = await AnimalSchema.find().sort({createdAt: -1})
        res.status(200).json(animals)
    } catch (error){
        res.status(500).json({message: 'Server Error'})
    }
}

exports.updateAnimal = async (req, res) => {
    const { id } = req.params;
    const { name, type, expectedage, category, description } = req.body;

    try {
        if (!name || !type || !category || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const updatedAnimal = await AnimalSchema.findByIdAndUpdate(
            id,
            {
                name,
                type,
                expectedage,
                category,
                description
            },
            { new: true } 
        );

        if (!updatedAnimal) {
            return res.status(404).json({ message: "Animal not found" });
        }

        res.status(200).json({ message: "Animal updated", animal: updatedAnimal });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}


exports.deleteAnimal = async (req,res) => {
    const {id} = req.params;
    AnimalSchema.findByIdAndDelete(id)
        .then((animal)=>{
            res.statues(200).json({messsage: "Animal Deleted"})
        })
        .catch((err)=> {
            res.status(500).json({message: 'Server Error'})
        })
}