class CrudRespository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        }
        catch (error) {
            console.log("Something went wrong in CRUDRespository")
            throw { error };
        }
    }

    async destroy(modelDataId) {
        try {
            await this.model.destroy({
                where: {
                    id: modelDataId
                }
            });
            return true;
        }
        catch (error) {
            console.log("Something went wrong in CRUDRespository")
            throw { error };
        }
    }

    async get(modelDataId) {
        try {
            const result = await modelDataId ? this.model.findByPk(modelDataId) : this.model.findAll();
            return result;
        }
        catch (error) {
            console.log("Something went wrong in CRUDRespository")
            throw { error };
        }
    }

    async update(data, modelDataId) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelDataId
                }
            })
            return result;
        }
        catch (error) {
            console.log("Something went wrong in CRUDRespository")
            throw { error };
        }
    }
}

module.exports = CrudRespository;