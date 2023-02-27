const { Op } = require("sequelize");
const { Flight } = require("../models");

class FlightRepository {
    #createFilter(data) {
        let filter = {};
        if (data.arrivalTime) {
            filter.arrivalTime = data.arrivalTime;
        }
        if (data.departureTime) {
            filter.departureTime = data.departureTime;
        }
        let priceFilter = [];
        if (data.minPrice) {
            priceFilter.push({ price: { [Op.gte]: data.minPrice } })
        }
        if (data.maxPrice) {
            priceFilter.push({ price: { [Op.lte]: data.maxPrice } })
        }
        Object.assign(filter, { [Op.and]: priceFilter });
        console.log("filter", filter);
        return filter;
    }

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

    async getFlight(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flight.findAll({
                where: filterObject
            });
            return flight;
        }
        catch (e) {
            console.log("Something went wrong in repository layer");
            throw { e }
        }
    }
}

module.exports = FlightRepository;