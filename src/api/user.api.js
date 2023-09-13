import API from "./api";

const userAPI = {

    getAll(skip) {
        const url = `users?limit=10&skip=${skip}`;
        return API.get(url);
    },

    getOne(id) {
        const url = `users/${id}`;
        return API.get(url);
    },

    store(data) {
        const url = 'users';
        return API.post(url, data);
    },

    update(data) {
        const url = `users/${data.id}`;
        return API.put(url, data);
    },

    destroy(id) {
        const url = `users/${id}`;
        return API.delete(url);
    }
}

export default userAPI;
