const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')
const { getAllPaises } = require('./src/models/paises')
const { getAllMusicos, getMusicoById } = require('./src/models/musicos')
const app = express()

// config
const PORT = 3000

// Static 3th parties
app.use("/bootstrap-css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
app.use("/bootstrap-js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")))
app.use("/jquery-js", express.static(path.join(__dirname, "node_modules/jquery/dist")))
app.use("/assets", express.static(path.join(__dirname, "assets")))
app.use("/bootstrap-icons", express.static(path.join(__dirname, "node_modules/bootstrap-icons")))

// register tempalte engine
app.engine('handlebars', engine({
    layoutsDir: path.join(__dirname, 'views'),
}))

app.set('view engine', 'handlebars')
app.set('views', './views')

// views
app.get('/', async (req, res) => {
    const musicos = await getAllMusicos()
    res.render('home', {
        layout: 'home',
        musicos
    })
})

app.get('/musico/:id', async (req, res) => {
    const musico = await getMusicoById(req.params.id)
    res.render('musico', {
        layout: 'musico',
        musico
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'about'
    })
})

// API
app.get('/api/paises', async (req, res) => {
    try {
        const paises = await getAllPaises()
        res.send(paises)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/api/musicos', async (req, res) => {
    try {
        const musicos = await getAllMusicos()
        res.send(musicos)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})