new Vue({
    el: '#app',
    data: {
        toDoList: [
            { nameTask: 'Mangiare', taskType: 'must' },
            { nameTask: 'Prendere la panna', taskType: 'mayby' },
            { nameTask: 'Fare la doccia', taskType: 'should' }
        ],
        typeTask: ['mayby', 'must', 'should'],
        newTask: '',
        newTaskType: '',
        formCunter: 0
    },
    mounted() {
        this.goToNext()
    },
    methods: {
        push: function () {
            if (this.newTask == '' || !this.typeTask.includes(this.newTaskType)) {
                alert('inserisci meglio i dati')
            } else {
                this.toDoList.push({
                    nameTask: this.newTask,
                    taskType: this.newTaskType
                });
            }
            this.newTask = '';
            this.newTaskType = ''

        },
        remove: function (index) {
            this.toDoList.splice(index, 1)
        },
        goToNext: function () {
            this.formCunter++
            const focusElement = document.getElementById('form-' + this.formCunter)
            focusElement.focus()
        }
    }
})

alert