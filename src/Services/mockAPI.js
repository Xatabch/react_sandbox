class MockApi {
    async authorize(user, password, delay = 3000) {
        console.log(`You authorize with next credentials: ${user}, ${password}`);

        const db = {
            'Ivan': {
                token: 'abcd'
            },
            'Maria': {
                token: 'ftp'
            }
        };
        
        // Эмулирует задержку в 3 секунды
        return new Promise((resolve) => setTimeout(resolve, delay)).then(() => db[user]);
    }

    storeItem(item) {
    }

    clearItem() {
    }
}

export default new MockApi();