const { addAnimal, getAnimal, deleteAnimal, updateAnimal} = require('../controllers/animal')

const router = require('express').Router()


router.post('/add-animal',addAnimal)
        .get('/get-animals',getAnimal)
        .delete('/delete-animal/:id', deleteAnimal)
        .put('/edit-animal/:id',updateAnimal)
module.exports = router