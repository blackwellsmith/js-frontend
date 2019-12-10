class Chore {
    constructor(choreJSON) {
        this.id = choreJSON.id
        this.name = choreJSON.name 
        this.description = choreJSON.description
    } 
    
    renderLi() {
        return `<li id='chores' data-id='${this.id}'>${this.name} >>> ${this.description} 
        <button id='btn' data-id='${this.id}' type="button">remove chore when finished</button></li>`
    }                                                                                          
}

//<input id="btn" data-id='${this.id}' type="button" value="remove when finished" onclick="changeClass(this.id);"/>