console.log('SCRIPT OK!');

const app = new Vue({
    el: "#app",
    data: {
        emails: [],
        numOfEmails: 1
    },
    methods: {
        generateEmails() {
            this.emails.length = 0;
            setTimeout(() => {
                for (let i = 0; i < this.numOfEmails; i++) {
                    axios
                        .get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            console.log(response.data.response);

                            this.emails.push(response.data.response);

                        })
                }
            }, 5)
        },
    }
})