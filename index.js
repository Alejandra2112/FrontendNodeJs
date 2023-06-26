const express = require('express')//Importa el modulo para crear aplicaciones web
const app = express() // Se crea una instancia de express
const puerto = 8089 //Puerto
const path = require('path') //Importa el mudulo path que permite trabajar con rutas y directorios
const hbs = require('hbs')//Motor de plantillas
app.use(express.static('PUBLIC'))   

app.set('views', path.join(__dirname+'/PUBLIC/VISTAS'))//direccion de las vistas
app.set('view engine', 'hbs')//Motor de p<lantillas


//Esta es la respuesta que se le muestra al cliente
app.get('/', (req, res)=>{
    res.render ('login')//render muestra un formato legible al cliente
})
app.get('/usuariosC', (req, res)=>{
    res.render('usuarios_crear')
})
app.get('/usuariosL', (req, res)=>{
    res.render('usuarios_listar')
})
app.get('/rolesC', (req, res)=>{
    res.render('roles_crear')
})
app.get('/rolesL', (req, res)=>{
    res.render('roles_listar')
})
app.get('/rolesE', (req, res)=>{
    res.render('roles_E')
})

app.get('/vigilantesC', (req, res)=>{
    res.render('vigilantes_crear')
})
app.get('/vigilantesL', (req, res)=>{
    res.render('vigilantes_listar')
})
app.get('/reservas', (req, res)=>{
    res.render('reservas_listar')
})
app.get('/reservasC', (req, res)=>{
    res.render('reservas_crear')
})

app.listen(puerto, () => {
    console.log(`Escuchando por el puerto ${puerto}`)
})