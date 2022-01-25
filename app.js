const http = require("http");
const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));


// definición de arreglo de objetos
let datos = [{
    matricula: '2018030489', 
    nombre: 'Eduardo Soto',
    sexo: 'M', 
    materias:['Prog. Web', 'Base de Datos','Ingles']
},
{
    matricula: '2018030579', 
    nombre: 'Maria Rubio',
    sexo: 'F', 
    materias:['Base de Datos','Ingles']
},
{
    matricula: '2018038654', 
    nombre: 'Fernando Hernandez',
    sexo: 'M', 
    materias:['Prog. Web', 'Base de Datos','Ingles']
}]

// Codificar request - result
app.get('/',(req,res) =>{ 
    res.render('index',{titulo: "Lista de Alumnos", listado:datos})
})

app.get('/tabla',(req,res) =>{
    const params = {
        numero:req.query.numero
    }
    res.render('tabla',params);
})

app.post('/tabla',(req,res) =>{
    const params = {
        numero:req.body.numero
    }
    res.render('tabla',params);
})

app.get('/cotizacion',(req,res)=>{
    const params ={
        folio : req.query.folio,
        desc : req.query.desc,
        precio : req.query.precio,
        pginicial : req.query.pginicial,
        plazos : req.query.plazos
    }
    res.render('cotizacion',params);
})

app.post('/cotizacion',(req,res)=>{
    const params ={
        folio : req.body.folio,
        desc : req.body.desc,
        precio : req.body.precio,
        pginicial : req.body.pginicial,
        plazos : req.body.plazos
    }
    res.render('cotizacion',params);
})


app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/error.html');
})

const puerto = 3000;
app.listen(puerto,()=>{ 
    console.log("Escuchando");
});
