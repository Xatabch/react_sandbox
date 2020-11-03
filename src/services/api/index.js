class APIService {
    async fetchPosts() {
        const json = await new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {header: 'text of post 1'}, 
                    {header: 'text of post 2'}
                ]);
            }, 1000);
        });

        return json;
    }
}

export default APIService;