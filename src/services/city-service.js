const {CityRepository} = require("../respository");

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await cityRepository.createCity(data);
            return city;
        }
        catch(e){
            console.log(e);
            throw {e}
        }
    }

    async deleteCity(cityId){
        try{
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        }
        catch(e){
            console.log(e);
            throw {e}
        }
    }

    async updateCity(cityId, data){
        try{
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        }
        catch(e){
            console.log(e);
            throw {e};
        }
    }

    async getCity(cityId){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        }
        catch(e){
            console.log(e);
            throw {e}
        }
    }
}

module.exports =  CityService;