const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' })

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }, { useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.get('/api/pturisticos', (req, res) => {
    res.send({ mongoose: "oi" })
});
mongoose.connection.on('error', (error) => {
    console.error("ERRO: " + error.message);
});

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
    console.log("running server on port" + server.address().port);
});