const pry = require('pryjs')
const Dragon = require('./models/Dragon')
const express=  require('express')
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors')
const bodyParser = require('body-parser')

server.listen(80);

io.on('connection', socket => {
    // console.log(socket)
    socket.on('dragons.index', respond => {
        Dragon.findAll()
            .then( dragons => {
                respond(dragons)
            })
    })

    socket.on('dragons.update', async params => {
        let dragon = await Dragon.findByPk(params.id)
        await dragon.update(params)
        let dragons = await Dragon.findAll()
        io.emit('dragons.update', dragons)
    })
})

app.use(cors())
app.use(bodyParser.json())

app.get('/dragons', (req, res) => {
    Dragon.findAll()
        .then( dragons => {
            res.json(dragons)
        })
})

app.get('/dragons/:id', (req, res) => {
    Dragon.findByPk(req.params.id)
        .then( dragon => {
            res.json(dragon)
        })
})

app.patch('/dragons/:id', async (req, res) => {
    let dragon = await Dragon.findByPk(req.params.id)
    dragon.update(req.body)
})


app.use('/', express.static('public'))