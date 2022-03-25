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
            fullDataName: "",
        };
    },
    /**
     * Dùng khi cần dùng nhiều data để tính toán
     */
    computed: {
        fullName() {
            console.log('run')
            return this.lastName + " " + this.firstName;
            // Chỉ chạy khi giá trị thay đổi;
        },
    },
    /**
     * Dùng khi theo dõi 1 data duy nhất
     */
    watch: {
        count(newValue, oldValue) {
            console.log("da thay doi data count", newValue);
            console.log("da thay doi data count", oldValue);
            // giúp chúng ta theo doi data đã tạo ra
            // mỗi khi data thay đỔi thì hàm watch được gọi
            // Muốn theo dõi data nào thì ghi đúng data đó
            if (newValue > 10) {
                this.count = 0;
            }
        },
        lastName(newValue) {
            this.fullDataName = this.lastName + " " + this.firstName
        },
        firstName(newValue) {
            this.fullDataName = this.lastName + " " + this.firstName
        }
    },
    /**
     * methods dung để xử lí:
     *  - events
     *  - function (tính năng trên trang web)
     */
    methods: {
        // getFullName() {
        //     console.log("run getFullname");
        //     return this.lastName + " " + this.firstName;
        // }, // sai vì không thay đổi mà vẫn chạy lại làm cho bị mất hiệu năng
        handleIncrement() {
            this.count += 1;
            this.firstName = "Ngoc Ha";
            this.lastName = "Pham";
        },
    },
}).mount("#computed-and-watches")

Vue.createApp({
    data() {
        return {
            active: false,
            styleForP: {
                backgroundColor: "red",
                color: "yellow",
                fontSize: 28,
            },
            styleForText: {
                textAlign: "left"
            }
        };
    },
    methods: {
        handleStyle() {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.styleForP.backgroundColor = "#" + randomColor;
        },
        handleActive() {
            this.active = true;
        },
    },
}).mount("#styling")