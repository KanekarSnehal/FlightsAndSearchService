const { City } = require("../models/index");

class CityRepository{
    async createCity({ name }){
        try{
            const city = await City.create({ name });
            return city;
        }
        catch(e){
            throw {e}
        }
    }

    async deleteCity({ cityId }){
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        }
        catch(e){
            throw {e}
        }
    }
}

module.exports = CityRepository;