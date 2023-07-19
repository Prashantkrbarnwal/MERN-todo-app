const todomodel = require('../models/todomodel')

module.exports.gettodo = async (req, res) => {
    const todo = await todomodel.find()
    res.send(todo)
}

module.exports.savetodo = async (req, res) => {

    const { text } = req.body



    todomodel
    .create({text})
    .then((data)=>{
        console.log("Added successfully...");
        console.log(data);
        res.send(data)
    })
}

module.exports.updatetodo = async (req, res) => {
    const {_id, text} = req.body
    todomodel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("updated successfully...."))
    .catch((err) => console.log(err))
}

module.exports.deletetodo = async (req, res) => {
    const {_id } = req.body
    todomodel
    .findByIdAndDelete(_id)
    .then(()=> res.send("deleted successfully...."))
    .catch((err) => console.log(err))
}
