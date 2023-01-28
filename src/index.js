const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server");
const ApiRoutes = require('./routes');

const CityRepository = require("./respository/city-repository");

const setupAndStartServer = async () => {
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        // const repo = new CityRepository();
        // repo.createCity({ name: "New Delhi" })
    })
}

setupAndStartServer();