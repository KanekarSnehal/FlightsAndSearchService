const { City } = require("../models");

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (e) {
            console.log(e);
            throw { e }
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }
        catch (e) {
            console.log(e);
            throw { e }
        }
    }

    async updateCity(cityId, data) {
        try {
            // the below approach also works but will not return updated object
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });

            // for getting updated data in mysql we use the bellow approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        }
        catch (e) {
            console.log(e);
            throw { e };
        }
    }

    async getCities(cityId) {
        try {
            const city = await cityId ? City.findByPk(cityId) : City.findAll();
            return city;
        }
        catch (e) {
            console.log(e);
            throw { e }
        }
    }
}

module.exports = CityRepository;