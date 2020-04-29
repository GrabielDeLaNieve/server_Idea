class BaseService {
    constructor({ repository }) {
      this.repository = repository;
    }

    async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
      // Este throw error lo va capturar el middleware de error...
    }

    const currentEntity = await this.repository.get(id);

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity does not found";
      throw error;
    }

    return currentEntity;
    }

    async getAll(entity) {
    return await this.repository.getAll(entity);
    }
  
    async update(id, entity) {
        if (!id) {
          const error = new Error();
          error.status = 400;
          error.message = "id must be sent";
          throw error;
        }
        
        return await this.repository.update(id, entity);
    }

    async delete(id) {
        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = "id must be sent";
            throw error;
        }
        return await this.repository.delete(id);
    }
}

module.exports = BaseService;