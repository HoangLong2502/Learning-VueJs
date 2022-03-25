Vue.createApp({
    data() {
        return {
            isLogin : false,

        };
    },
    methods : {
        handleLogin() {
            this.isLogin = true;
        },
        handleLogout() {
            this.isLogin = false;
        },
    },
}).mount('#directive')