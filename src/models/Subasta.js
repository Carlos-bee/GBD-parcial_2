const {Schema, model} = require('mongoose');
 
const SubastaSchema =new Schema({
    title: {
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.export = model('Subasta', SubastaSchema);