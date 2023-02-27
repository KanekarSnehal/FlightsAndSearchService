const { FlightService } = require("../services");

const flightService = new FlightService();
const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
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

module.exports = {
    create
}