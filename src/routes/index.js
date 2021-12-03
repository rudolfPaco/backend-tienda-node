function adicionar(app){
    app.get('/', (req, res) => {
        res.send('Rudolf Felipez Mancilla')
    })
}

module.exports = {
    adicionar
}