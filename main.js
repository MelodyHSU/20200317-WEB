const clock = {
  

    data() {
        return {
            h: 99,
            m: 99,
            s: 99
        }
    },

    methods: {
        updateClock() {
            var data = new Date();
            console.log(date);
            
        }
    },
    mounted() {
        this.updateClock();
    }
};

Vue.createApp(clock).mount("#clock");



