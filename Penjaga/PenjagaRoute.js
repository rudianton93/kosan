let expres = require('express');
let route = expres.Router();
let PenjagaController=require('./PenjagaController.js');

route.get('/penjaga', function (req, res) {
    PenjagaController.getPenjaga(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/penjaga', function (req, res) {
    let akses = req.body;
    PenjagaController.createPenjaga(akses,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/penjaga/:_id', function (req, res) {
    PenjagaController.removePenjaga(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/penjaga/:_id', function (req, res) {
     let akses = req.body;
     PenjagaController.updatePenjaga(req.params._id,akses,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 
 route.get('/penjaga/kos/:penjaga/:kos', function (req, res) {
     let penjaga = req.params.penjaga;
     let kos = req.params.kos;
     PenjagaController.getPenjagaBykos(penjaga,kos, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 
 route.get('/penjaga/:_id', function (req, res) {
     let id = req.params._id;
     PenjagaController.getPenjagaById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});

module.exports = route;