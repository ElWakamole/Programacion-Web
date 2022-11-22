let express = require('express');
let mysql = require('mysql');
let app = express();
let puerto = 3000;
//Que el cliente Frontend pueda usar la API
let cors = require('cors');
//Recivir datos Json
app.use(express.json());

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
//Actualizar un articulo
app.put('/API/Articulos/:id',function(req,res){
    let id = req.params.id;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let cantidad = req.body.cantidad;
    let sql = "update Articulos set descripcion = ?, precio = ?, cantidad = ? where id = ?";
    conexion.query(sql,[descripcion,precio,cantidad,id],function(error,results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});
//Ruta para eliminar un articulo
app.delete('/API/Articulos/:id',function(req,res){
    let id = req.params.id;
    conexion.query('delete from Articulos where id = ?',[id],function(error,results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});