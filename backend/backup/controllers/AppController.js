const { baseMessage } = require("../utils/baseMessage")

class AppControllers{
    async index(req, res){
        res.status(200).send(baseMessage(true, "Welcome to Bikin.id API", null))
    }
}

module.exports = new AppControllers