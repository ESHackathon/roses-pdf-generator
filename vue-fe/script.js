Vue.use(Vuetify, {
    theme: {
        primary: '#c39204',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
    }
})

new Vue({
    el: '#app',
    data: () => ({
        message: 'Hi Vue!',
        e6: 1,
        valid: true,
        title: '',
        titleRules: [
            v => !!v || 'Title is required',
            v => (v && v.length <= 10) || 'Title must be less than 10 characters'
        ],
        typeOfReview: null,
        items: [
            'Systematic Review',
            'Systematic Review Update',
            'Systematic Review Amendment',
            'Systematic Review from Systematic Map'
        ],
        authorsContracts: false,
        abstract: false,
        background: false,
        stakeholderAgreement: false,
    }),

    methods: {
        submit () {
            if (this.$refs.form.validate()) {
            // Native form submission is not yet supported
                axios.post('/api/submit', {
                    title: this.title,
                    typeOfReview: this.typeOfReview,
                    authorsContracts: this.authorsContracts,
                    background: this.background,
                    stakeholderAgreement: this.stakeholderAgreement
                })
            }
        },
        clear () {
            this.$refs.form.reset()
        }
    }
});
