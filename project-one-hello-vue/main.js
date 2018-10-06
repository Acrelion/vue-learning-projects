new Vue({
    //the element to be manipulated
    el: '#app',
    //the data we need use to populate the element
    data: {
        title: 'Hello Vue!'
    },
    //methods (this is an event handler, binded by the vue directive on input event)
    methods: {
        changeTitle: function(event) {
            /**
             * all data properties are accessible by this as Vue
             * proxies them to the upper most scope of the Vue object
             * -bind the title to the event target value, which is input
             * -input is an event called for each key stroke
             */
            this.title = event.target.value;
        }
    }
});