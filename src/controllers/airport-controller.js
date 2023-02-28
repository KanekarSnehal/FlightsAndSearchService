const { AirportService } = require("../services");
const airportService = new AirportService();
const { SuccessCodes } = require("../utils/error-codes");

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            sucess: true,
            message: 'Successfully created a airport',
            err: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to create a city',
            err: error
        })
    }
}

module.exports = {
    create
}