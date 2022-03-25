// DOM
Vue.createApp({
    data : function() {
        return {
            blackPink : [
                {
                    name: "ironman",
                    img: "https://kenh14cdn.com/2019/2/22/photo-1-1550802045779701256954.jpg"
                }, 
                {
                    name: "captain",
                    img: "https://afamilycdn.com/2019/5/8/captain-america-movie-images-93-1557300616252619231309.jpg"
                }, 
                {
                    name: "spiderman",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzjbFZlBQDOcggxEzkDd4V-xYamrUUGYP6A&usqp=CAU"
                }, 
                {
                    name: "thor",
                    img: "https://toplist.vn/images/800px/thor-khong-phai-mot-vi-than-407917.jpg"
                }
            ]
        }
    }
}).mount("#directive")

// short
// Vue.createApp({
//     data() {
//         return {
//             nameUser : "Le Ba Hoang Long",
//             className : 33
//         }
//     }
// }).mount("#interpolation")
