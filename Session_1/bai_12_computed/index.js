Vue.createApp({
    data(){
        return {
            ImgUrl : "https://vcdn1-sohoa.vnecdn.net/2021/08/10/Gameblockchain-1628608530-9349-1628609241.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=KdUZsUnsj8Tlw09sjWXu8Q",
            linkInfo : "https://vnexpress.net/game-blockchain-khong-phai-cuoc-choi-cua-tay-mo-4338746.html"
        }
    }
}).mount("#bind-attribute")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

Vue.createApp({
    methods : {
        createSoNut() {
            const mangXucXac = [getRandomInt(1,6), getRandomInt(1,6), getRandomInt(1,6)]

            const soNut = mangXucXac.reduce((tong, xucsac) => tong += xucsac, 0);
            return soNut
        },
        renderTaiHayXiu() {
            const soNut = this.createSoNut();
            if(soNut > 11){
                return "Tai"
            }
            else {
                return "Xiu"
            }
        }
    }
}).mount("#method")

Vue.createApp({
    data() {
        return {
            message : '<h1> Xin chao </h1>'
        }
    }
}).mount("#raw-html")

Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        handleClickMe() {
            console.log("click me")
        },
        handleIncrement(params, event) {
            console.log(event.target)
            this.count = this.count + params
        },
        handleSubmit() {
            alert("submit success")
        },
        handleLogin() {
            console.log("handleLogin")
        },
    },
}).mount("#event");

Vue.createApp({
    data() {
        return {
            message: '',
        };
    },
}).mount("#two-way-binding");

Vue.createApp({
    data() {
        return {
            count: 0,
            lastName: 'Le',
            firstName: 'Hoang Long',
        };
    },
    computed: {
        fullName() {
            console.log('run')
            return this.lastName + " " + this.firstName;
            // Ch??? ch???y khi gi?? tr??? thay ?????i;
        },
    },
    methods: {
        // getFullName() {
        //     console.log("run getFullname");
        //     return this.lastName + " " + this.firstName;
        // }, // sai v?? kh??ng thay ?????i m?? v???n ch???y l???i l??m cho b??? m???t hi???u n??ng
        handleIncrement() {
            this.count += 1;
            this.firstName = "Ngoc Ha";
            this.lastName = "Pham";
        },
    },
}).mount("#computed-and-watches")