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
            var date = new Date();
            console.log(date);
            this.h = date.getHours();
            this.m = date.getMinutes();
            this.s = date.getSeconds();

            
        }
    },
    mounted() {
        this.updateClock();
    }
};

Vue.createApp(clock).mount("#clock");



