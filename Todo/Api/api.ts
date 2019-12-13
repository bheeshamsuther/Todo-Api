import express from 'express'
import todo from '../../config/Model/schema'

const router = express.Router();



// Add
router.post('/post', async (req: express.Request, res: express.Response) => {
    const Todo = await new todo(req.body);
    Todo.save()
        .then(() => {
            res.send({ message: 'Todo Added' })
        })
        .catch((err) => {
            console.log(err)
        })
})

// Get 
router.get('/get', async (req: express.Request, res: express.Response) => {
    const Todo = await todo.find()
    res.send({
        message: Todo
    })

})

// Update
router.put("/update/:id", async (req: express.Request, res: express.Response) => {
    await todo.findOneAndUpdate({ _id: req.body.id },
        {
            title: req.body.title,
            description: req.body.description,
            city: req.body.city,
        })
        .then(() => {
            res.send({
                message: "Update Succesfully"
            })
        })
        .catch((err) => {
            console.log(err)
        })
})

// Delete
router.delete("/delete/:id", async (req: express.Request, res: express.Response) => {
    await todo.findByIdAndDelete({ _id: req.body.id })
        .then(() => {
            res.send({
                message: "Delete Succesfully"
            })
        })
        .catch((err) => {
            console.log(err)
        })
})


module.exports = router;