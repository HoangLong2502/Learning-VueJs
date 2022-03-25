Vue.createApp({
    data() {
        return {
            data : [
                {
                    question : "What is the return policy?",
                    answer: "Most unopened items in new condition and returned within"
                },
                {
                    question : "How long does it take to process a refund?",
                    answer: "We will reimburse you for returned items in the same way you paid for them."
                },
                {
                    question : "What is the policy for late/non-delivery of items ordered online?",
                    answer: "Our local teams work diligently to make sure that your order arrives on time"
                },
                {
                    question : "When will my credit card be charged?",
                    answer: "Most unopened items in new condition and returned within"
                },
                {
                    question : "Will I be charged sales tax for online orders?",
                    answer: "Most unopened items in new condition and returned within"
                },
            ],
            button : {
                plus : true,
                minus : false,
            },
            cardOpen : [],
            cardClose : [],
        }
    },
    computed : {
        openCard() {
            let cardOpen = [...this.cardOpen];
        }
    },
    methods : {
        handleOpenAnswer(event) {
            const button = event.target
            const answer = button.parentElement.parentElement.parentElement.parentElement
            const answer1 = answer.querySelector('.app__answer');
            answer1.classList.toggle('active');
        }
    },
}).mount('#app')