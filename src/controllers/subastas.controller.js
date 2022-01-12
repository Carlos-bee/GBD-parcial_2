const subastasCtrl={};

const Subasta =require('../models/Subasta');

subastasCtrl.rederSubastaFrom= (req, res) =>{
    res.render('subastas/new-subasta')
};
subastasCtrl.createNewSubasta = async (req, res) =>{
    const {title, description} = req.body;
    const newSubasta = new Subasta({title, description});
    newSubasta.user = req.user.id;
    await newSubasta.save();
    req.flash('success_msg', 'Subasta añadida exitosamente');
    res.redirect('/subastas')
};
subastasCtrl.renderSubastas= async (req,res)=>{
    const subastas = await Subasta.find({user: req.user.id});
    res.render('subastas/all-subastas', {subastas});
};
subastasCtrl.renderEditFrom= async (req, res)=>{
    const Subasta= await Subasta.findById(req,params.id);
    if (subasta.user != req.user.id){
        req.flash('error_msg', 'No autorizado');
        return res.redirect('/subastas');
    }
    res.render('subastas/edit-subasta', {subasta});
};
subastasCtrl.updateSubasta = async (req, res)=>{
    const {title,description} =req.body;
    await Subasta.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg', 'Subasta actualizada exitosamente');
    if (subasta.user != req.user.id){
        req.flash('error_msg', 'No autorizado');
        return res.redirect('/subastas');
    }
    res.redirect('/subastas');
};
subastasCtrl.deleteSubasta = async (req, res)=>{
   await Subasta.findByIdAndDelete(req.params.id)
   req.flash('success_msg', 'Subasta eliminada exitosamente');
   if (subasta.user != req.user.id){
    req.flash('error_msg', 'No autorizado');
    return res.redirect('/subastas');
}

    res.redirect('/subastas')
};

module.exports=subastasCtrl;