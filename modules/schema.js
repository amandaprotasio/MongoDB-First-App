const mongoose = require('mongoose')

const Aluno = mongoose.model('Aluno',
    { nome: String,
      idade: Number
    })


module.exports.Aluno = Aluno
