class MockApi {
    async authorize(user, password) {
        console.log(`You auth with next credentials: ${user}, ${password}`)
        const mockData = {
            token: 'abcd'
        };
    
        return mockData;
    }

    async storeItem(item) {
        this.item = item;
    }

    async clearItem() {
        this.item = '';
    }
}

export default MockApi;