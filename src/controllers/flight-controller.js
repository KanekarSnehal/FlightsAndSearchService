const { FlightService } = require("../services");
const { SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();
const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        });
    }
    catch (error) {
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to create a flight',
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.body);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'Successfully fetched a flight',
            err: {}
        });
    }
    catch (error) {
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to fetch a flight',
            err: error
        })
    }
}

module.exports = {
    create,
    get
}