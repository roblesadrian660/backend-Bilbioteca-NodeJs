const express = require('express');

let _express = null;
let _config = null;

class Server {
    constructor({ config, Routes }) {
        _config = config;
        _express = express().use(Routes);
    }

    start() {
        return new Promise((resolve) => {
            _express.listen(_config.PORT, () => {
                console.log(_config.APPLICATION_NAME + " Api corriendo en el puerto " + _config.PORT);
                resolve();
            });
        })
    }
}

module.exports = Server;