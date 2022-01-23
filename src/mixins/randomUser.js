import users from '../data/users'
export default {
    methods: {
        randomUser() {
            const objUsers = Math.floor(Math.random() * users.length);
            return users[objUsers];
        },
    }
};