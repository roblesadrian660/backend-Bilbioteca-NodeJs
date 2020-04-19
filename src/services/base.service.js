class BaseService {

    constructor(reposetory) {
        this.reposetory = reposetory;
    }

    async get(id) {
        if (!id) {
            let error = new Error();
            error.status = 400;
            error.message = "es id es requerido"
            throw error;
        }

        let currentEntity = await this.reposetory.get(id);

        if (!currentEntity) {
            let error = new Error();
            error.status = 404;
            error.message = "la entidad no existe"
            throw error;
        }

        return currentEntity;
    }

    async getAll() {
        return await this.reposetory.getAll();
    }

    async create(entity) {
        return await this.reposetory.create(entity);
    }

    async update(id, entity) {
        if (!id) {
            let error = new Error();
            error.status = 400;
            error.message = "es id es requerido"
            throw error;
        }
        return await this.reposetory.update(id, entity);
    }

    async delete(id) {
        if (!id) {
            let error = new Error();
            error.status = 400;
            error.message = "es id es requerido"
            throw error;
        }

        return await this.reposetory.delete(id);
    }
}

module.exports = BaseService;