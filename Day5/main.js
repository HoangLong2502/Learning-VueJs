Vue.createApp({
    data() {
        return {
            navItem : [
                {
                    navName: "Tổng quan",
                    svgUrl : "./svg/Nav/home.png"
                },
                {
                    navName: "Sản phẩm",
                    svgUrl : "./svg/Nav/local_mall.png"
                },
                {
                    navName: "Quảng cáo",
                    svgUrl : "./svg/Nav/campaign.png"
                },
                {
                    navName: "Kết quả quảng cáo",
                    svgUrl : "./svg/Nav/assessment.png"
                },
                {
                    navName: "Chức năng",
                    svgUrl : "./svg/Nav/extension.png"
                },
            ],
            flatformItem : [
                {
                    name : "Facebook",
                    img : "./img/facebook.png"
                },
                {
                    name : "Google",
                    img : "./img/google.png"
                },
                {
                    name : "TikTok",
                    img : "./img/tik-tok.png"
                },
                {
                    name : "Zalo",
                    img : "./img/zalo.png"
                },
            ]
        }
    }
}).mount('#app')