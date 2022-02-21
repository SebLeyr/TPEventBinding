Vue.createApp({
    data() {
        return {
            texte : 'Affichage',
            texte2 : 'affichage deux'
        };
    },
    methods : {
        capterEventInput(event){
            console.log(event);
            this.texte = event.target.value;
        },
        capterEventKeyPress(event) {
            console.log(event);
            this.texte2 = event.target.value;
        },
    }
}).mount('#monApp');