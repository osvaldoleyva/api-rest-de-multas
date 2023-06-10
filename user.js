var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    fecha: {type: String, required: true},
    nombre_del_oficial: {type: String, required: true, max: 150},
    matricula_del_vehiculo: {type: String, required: true, max: 150},
    folio: {type: Number, required: true},
    ubicacion: {type: String, required: true, max: 150},
    nombre_del_infractor: {type: String, required: true, max: 150},
    total_a_pagar: {type: String, required: true,},
    motivo_de_la_multa:{type: String, required: true, max: 150},
    tipo_de_vehiculo:{type: String, required: true, max: 150},

});

module.exports = mongoose.model('User', UserSchema);