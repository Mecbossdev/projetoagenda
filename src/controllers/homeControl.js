const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'O primeiro titulo',
    descricao: 'A primeria descrisao'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))


exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.postEnv = (req, res) => {
    res.send(req.body);
    return;
};
