console.log('SCRIPT OK!');

const app = new Vue({
    el: "#app",
    data: {
        loading: true,
        emails: [],
        numOfEmails: 10,
        inputNum: 0
    },
    methods: {
        generateEmails() {

            // Guard clause
            if (this.numOfEmails <= 0) {
                return;
            }

            // Reset array
            this.emails.length = 0;

            // Inizio creazione email
            setTimeout(() => {
                for (let i = 0; i < this.numOfEmails; i++) {
                    axios
                        .get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            console.log(response.data.response);
                            if (response.status === 200) {
                                this.emails.push(response.data.response);
                                this.loading = this.emails.length < this.numOfEmails
                            }

                        })
                }
            }, 5)
        },
        getNumOfEmails(desiredNumOfEmails) {
            this.numOfEmails = desiredNumOfEmails;
        }
    }
})