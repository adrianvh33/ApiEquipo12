const {RESTDataSource} = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ProjectInvAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.projectInv_api_url;
    }

    async userById(id){
        return await this.get(`/users/${id}`);
    }

    async createProject(project) {
        project = new Object(JSON.parse(JSON.stringify(project)));
        return await this.post('project', project);
    }

    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post('user', user);
    }

    async editUser(id,user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.put(`/editUser/${id}`,user);
    }

    async editProject(id,project) {
        project = new Object(JSON.parse(JSON.stringify(project)));
        return await this.put(`/editProject/${id}`,project);
    }

    async projectsByUser(id){
        return await this.get(`/project/byIntegrante/${id}`);
    }
}

module.exports = ProjectInvAPI;