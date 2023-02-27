const { Flight } = require("../models");

class FlightRepository {
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        }
        catch (error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;