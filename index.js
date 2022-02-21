Vue.createApp({
    data() {
        return {
            texte : 'Affichage',
            texte2 : 'affichage deux'
        };
    },
    methods : {
        capterEventInput(event){
            this.texte = event.target.value;
        },
        capterEventKeyPress(event) {
            this.texte2 = event.target.value;
        },
        capterEventClick(event) {
            alert("Alerte générale");
        }
    }
}).mount('#monApp');