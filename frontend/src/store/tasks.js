import { defineStore } from 'pinia'
export const useTask = defineStore("task", {
    state: () => {
        return {
            check: "1",
            filter: "name",
            listTask: []
        }
    },
    getters: {
        filterPrivate() {
            const arr = [...this.listTask]
            return arr.sort((a, b) => a.key - b.key)

        },
        filterPublic() {
            const arr = [...this.listTask]
            return arr.sort((a, b) => b.key - a.key)
        }
    },
    actions: {
        addTasks(value) {
            this.listTask.push(value)
        },
        removeTask(id) {
            this.listTask = this.listTask.filter(value => {
                return value.id !== id
            })
        }
    }
})