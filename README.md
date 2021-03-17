# 20200317-WEB
20200317的上課網站
# 範例
 https://melodyhsu.github.io/20200317-WEB/.

 # CDN
 、、、


 、、、

 # 說明
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
        // this.updateClock();

        setInterval(this.updateClock(), 1000);
    }
};

Vue.createApp(clock).mount("#clock");