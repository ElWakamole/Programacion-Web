let express = require('express');
let mysql = require('mysql');
let app = express();
let puerto = 3000;

app.listen(puerto, function(){
    console.log("Servidor En Linea");
});
//Base de datos
//Parametros de conexion
let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'PW'
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conectado a la base de datos');
    }
});

//Rutas
//Ruta de Inicio - Raiz
app.get('/',function(req,res){
    res.send("Ruta de Inicio");
});

//Ruta a todos los articulos
app.get('/API/Articulos',function(req,res){
    conexion.query('select * from Articulos',function(error,filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});
//A un articulo
app.get('/API/Articulos/:id',function(req,res){
    conexion.query('select * from Articulos where id = ?',[req.params.id],function(error,fila){
        if(error){
            throw error;
        }else{
            res.send(fila);
        }
    });
});
//Ruta para agregar un articulo
app.post('/API/Articulos',function(req,res){
    let data = {descripcion: req.body.descripcion,
                precio: req.body.precio,
                cantidad: req.body.cantidad};
    let sql='insert into Articulos set ?';
    conexion.query(sql,data,function(error,results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});