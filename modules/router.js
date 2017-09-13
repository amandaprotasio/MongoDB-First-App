/*************************
 *	Rotas da Aplicacao
 **************************/
 // const controller = require('./controller')
 const schema = require('./schema')

 const defineRouter = (app) => {

 app.get('/', (req, res) => {

   schema.Aluno.find((err, alunos) => {
     if (err) {
      //  return res.render('erro');
      console.log(err);
     }
     console.log('alunos render');
     res.render('alunos', { list: alunos });
   });
 });

 app.get('/novo', (req, res) => {
   res.render('novoAluno');
 });

 app.get('/:idAluno', (req, res) => {
   schema.Aluno.findById(req.params.idAluno, (err, aluno) => {
     res.render('novoAluno', { a : aluno});
   });
 });

 app.post('/salvar', (req, res) => {   
   if (req.body._id !== '') {
     schema.Aluno.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, aluno) => {
       res.redirect('/');
     });
   } else {
     let aluno = new schema.Aluno(req.body);
     aluno._id = null;
     aluno.save((err, a) => {
       res.redirect('/');
     });
   }
 });

 app.get('/del/:idAluno', (req, res) => {
   schema.Aluno.findByIdAndRemove(req.params.idAluno, (err, aluno) => {
     console.log(err);
   });
   res.redirect('/');
 });

  	return app
  }

 module.exports = defineRouter
