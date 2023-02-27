class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        }
        catch (e) {
            console.log(e);
            throw { e }
        }
    }

    async destroy(id) {
        try {
            const response = await this.repository.destroy(id);
            return response;
        }
        catch (e) {
            console.log(e);
            throw { e }
        }
    }

    async get(id) {
        try {
            const response = await this.repository.get(id);
            return response;
        }
        catch (e) {
            console.log(e);
            throw { e }
        }
    }

    async update(id, data) {
        try {
            const response = await this.repository.update(id, data);
            return response;
        }
        catch (e) {
            console.log(e);
            throw { e }
        }
    }
}

module.exports = CrudService;