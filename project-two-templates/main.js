new Vue({
    el: '#app',
    data: {
        title: 'Templates project',
        text: 'Some text, printed out by printText method call.',
        link: {
            address: 'https://duckduckgo.com/',
            linkText: 'DuckDuckGo'
        },
        readyHtml: '<span>I am ready html code. Not escaped by Vue!</span>'
    },
    methods: {
        printText: function () {
            return this.text;
        }
    }
});