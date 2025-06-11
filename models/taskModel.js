export default class Task {
    constructor(id, title, description = '', completed = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    markAsCompleted() {
        this.completed = true;
    }

    markAsPending() {
        this.completed = false;
    }

    update({ title, description }) {
        if (title !== undefined) this.title = title;
        if (description !== undefined) this.description = description;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            completed: this.completed
        };
    }
}
