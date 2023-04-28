const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

router.get('/student',  (req, res) => {
    res.render('student'); 
});

router.post('/addStudent', (req, res) => { 
    res.render('displayData',{Nombre:req.body.nombre,Edad: req.body.edad, NSS: req.body.nss, TipoSangre:req.body.tpSangre}); // cambiamos res.send por render para mostrar los datos en un hmtl y mandamos los datos con res.body
})

module.exports = router;