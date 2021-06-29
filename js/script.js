new Vue({
    el: '#app',
    data: {
        toDoList: [
            'Mangiare',
            'Prendere la panna'
        ],
        newTask: ''
    },
    methods: {
        push: function () {
            this.toDoList.push(this.newTask);
            this.newTask = '';
        },
        remove: function (index) {
            this.toDoList.sl
        }
    }
})