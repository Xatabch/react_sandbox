class MockApi {
    async authorize(user, password) {
        console.log(`You auth with next credentials: ${user}, ${password}`);
        const mockData = {
            token: 'abcd'
        };
    
        return new Promise((resolve) => setTimeout(resolve, 3000)).then(() => mockData);
    }

    storeItem(item) {
    }

    clearItem() {
    }
}

export default new MockApi();