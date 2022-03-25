Vue.createApp({
    data() {
        return {
            isLogin : false,
            nameHero : "",
        };
    },
    methods : {
        handleLogin() {
            this.isLogin = true;
        },
        handleLogout() {
            this.isLogin = false;
        },
        handleNameHero(nameHero) {
            this.nameHero = nameHero;
        }
    },
}).mount('#directive')