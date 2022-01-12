const {Router}=require('express');
const router = Router();

const{rederSubastaFrom,
    createNewSubasta,
    renderSubastas,
    renderEditFrom,
    updateSubasta,
    deleteSubasta
     }=require('../controllers/subastas.controller');

const {isAuthenticated} = require('../helpers/auth');

//nueva subasta
router.get('/subastas/add',isAuthenticated, rederSubastaFrom);
router.post('/subastas/new-subasta',isAuthenticated, createNewSubasta);

//Obtener todas las subastas
router.get('/subastas',isAuthenticated, renderSubastas);

//editar subastas
router.get('/subastas/edit/:id',isAuthenticated, renderEditFrom);
router.put('/subastas/edit/:id',isAuthenticated, updateSubasta);

//eliminacion de subastas
router.delete('/subastas/delete/:id',isAuthenticated, deleteSubasta)

module.exports=router;