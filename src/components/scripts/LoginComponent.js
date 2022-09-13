
export default {
    name: 'LoginComponent',
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            rules: {
                required: v => !!v || 'Required',
                min: v => (v && v.length >= 3) || 'Min 3 characters',
                max: v => (v && v.length <= 15) || 'Max 15 characters',
                minpass: v => (v && v.length >= 5) || 'Min 5 characters',
                maxpass: v => (v && v.length <= 20) || 'Max 20 characters',
                name: v => {
                    const namepattern = /[^A-Za-z0-9]/;
                    return (
                        (!namepattern.test(v)) ||
                        "No special characters"
                    )
                }
            },
            show: false,
            valid: true,
        }
    },
    methods: {
        validate() {
            console.log(this.user.username);
            console.log(this.user.password);
            this.$refs.form.validate();

        },
        reset() {
            console.log(this.$refs.form);
            this.$refs.form.reset();
        },
        login() {
            this.$store.dispatch('LOGIN_USER', {
                success: () => {
                    this.$router.push(this.$route.query.redirect || '/');
                },
                error: () => {
                    console.warn('user loggin failed.');
                },
                user: this.user
            })
        }
    }
}