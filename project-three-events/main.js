new Vue({
    el: '#app',
    data: {
        iterator: 1,
        x: 0,
        y: 0
    },
    methods: {
        increment: function(step, event) {
            this.iterator += step;
            console.log('L11,main.js | Console.log (event.target.textContent) ' + event.target.textContent);
        },
        updateCoordinates: function(event) {
            //Vue passes the event object to us (because of binding)!
            this.x = event.clientX;
            this.y = event.clientY;
        },
        logText: function (event) {
            console.log('L19,main.js | Console.log (event.target.value) ' + event.target.value);            
        }
    }
});