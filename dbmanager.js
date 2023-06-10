const PDFDocument = require('pdfkit');

var mongoose = require('mongoose');
var dev_db_url = "mongodb://127.0.0.1:27017/db_users";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true,});
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console,'MongoDB no puede conectarse'));

var User = require('./user');


exports.user_create = function(req, res){
    var user = new User({
        fecha: req.body.fecha,
        nombre_del_oficial: req.body.nombre_del_oficial,
        matricula_del_vehiculo: req.body.matricula_del_vehiculo,
        folio:req.body.folio,
        ubicacion: req.body.ubicacion,
        nombre_del_infractor: req.body.nombre_del_infractor,
        total_a_pagar: req.body.total_a_pagar,
        motivo_de_la_multa: req.body.motivo_de_la_multa,
        tipo_de_vehiculo: req.body.tipo_de_vehiculo,
    })
    
    user.save(function(err){
        if(err){
            console.error(err);
        }       res.send({'message': 'Se cargo tu registro'})
        
        })
}

exports.user_details = function(req, res){
    User.findById(req.query.id, function(err,user){
        if(err)
           return next(err)
                res.send(user)
    })

}

    exports.user_update = function(req,res) {
        User.findByIdAndUpdate(req.query.id, {$set:req.body}, function(err, user){
            if(err)
                return next(err)
                    res.send({'message' : 'Se actualizo tu registro'})
    
    })
}

exports.user_delete = function(req,res) {
    User.findByIdAndRemove(req.query.id, {$set:req.body}, function(err, user){
        if(err)
            return next(err)
                res.send({'message' : 'Se eliminó el registro'})

})
}