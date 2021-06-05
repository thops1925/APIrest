const express = require('express')
const route = express.Router()
const content = require('../model/modelSchema')


route.get('/', async (req, res)=>{
    try {
        const user = await content.find({})
        res.json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

route.post('/', async (req, res)=>{
    
    const list = new content({
        name: req.body.name,
        content: req.body.content
    })
                                                                                                                                
    try {
        const nameList = await list.save()
        res.status(201).json(nameList)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

route.get('/:id', routeID, async (req, res)=>{
res.json(res.id)
})

route.delete('/:id', routeID, async (req, res)=>{
    try {
        const removeOne = await content.deleteOne(req.id)
        res.status(200).json(removeOne)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

route.patch('/:id',routeID, async (req, res) => {
    if(req.body.name != null){
        res.id.name = req.body.name
    }
    if(req.body.content != null){
        res.id.content = req.body.content
    }
    try {
        const patch = await res.id.save()
        res.json(patch)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


async function routeID(req, res, next) {
let user
try {
    user = await content.findById(req.params.id)
    if (user === null) {
        return req.status(404).json({message: 'empty'})
    }
} catch (error) {
    return res.status(500).json({message: 'no result'})
}
   res.id = user
   next()
}

module.exports = route