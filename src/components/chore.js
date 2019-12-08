class Chore {
    constructor(choreJSON) {
        this.id = choreJSON.id
        this.name = choreJSON.name 
        this.description = choreJSON.description
    } 
    
    renderLi() {
        return `<li>${this.name} >>> ${this.description}</li>`
    }
}