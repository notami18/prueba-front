export default {
    methods: {
        checkDataLocalStorage() {
            return JSON.parse(localStorage.getItem("states"));
        },

        addUpdateDataLocalStorage(data) {
            localStorage.setItem("states", JSON.stringify(data))
        },

        removeData() {
            storage.removeItem("states");
        }
    }
};