const { FlightRepository, AirplaneRepository } = require("../respository");
const { compareTime } = require("../utils/helper");

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if (compareTime(data.arrivalTime, data.departureTime))
                throw { error: "Arrival time cannot be less than departure time" };
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity
            })
            return flight;
        }
        catch (error) {
            console.log("Something went wrong in service layer", error);
            throw { error };
        }
    }

    async getFlight(data) {
        try {
            const flight = await this.flightRepository.getFlight(data);
            return flight;
        }
        catch (error) {
            console.log("Something went wrong in service layer", error);
            throw { error };
        }
    }
}

module.exports = FlightService;