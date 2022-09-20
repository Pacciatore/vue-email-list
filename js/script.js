console.log('SCRIPT OK!');

const app = new Vue({
    el: "#app",
    data: {
        emails: []
    },
    mounted() {

        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response.data.response);

                    this.emails.push(response.data.response);

                })
        }

    }
})