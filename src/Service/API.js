class API {
    async getPosts() {
        const response = await fetch(`${HOST}/posts`);
        const data = await response.json();

        return {
            status: response.status,
            data: data
        }
    }
}

export default new API();