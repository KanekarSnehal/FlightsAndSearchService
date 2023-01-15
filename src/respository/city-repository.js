const { City } = require("../models/index");

class CityRepository{
    async createCity({ name }){
        try{
            const city = await City.create({ name });
            return city;
        }
        catch(e){
            console.log(e);
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
            return true;
        }
        catch(e){
            console.log(e);
            throw {e}
        }
    }

    async updateCity(cityId, data){
        try{
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        }
        catch(e){
            console.log(e);
            throw {e};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        }
        catch(e){
            console.log(e);
            throw {e}
        }
    }
}

module.exports = CityRepository;