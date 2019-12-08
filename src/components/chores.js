class Chores {
    constructor() {
        this.chores = []
        this.adapter = new ChoresAdapter()
        this.initbindEventlisteners()
        this.fetchAndLoadChores()
    }

    initbindEventlisteners() {
        this.choresContainer = document.getElementById('chores-container')
        this.newChoreName = document.getElementById('new-chore-name')
        this.newChoreDescription = document.getElementById('new-chore-description')
        this.choreForm = document.getElementById('new-chore-form')
        this.choreForm.addEventListener('submit', this.createChore.bind(this))
    }
    createChore(e) {  
        //console.log("top of create Chore")
        e.preventDefault()
        const value = [this.newChoreName.value, this.newChoreDescription.value] 
        this.adapter.createChore(value).then(chore => { this.chores.push(new Chore(chore)) }) 
            //this.chores.push(new Chore(chore))
            console.log('before render in create chore')
            this.render()
        
    }

    fetchAndLoadChores() {
        this.adapter
            .getChores()
            .then(chores => {
            chores.forEach( chore => this.chores.push(new Chore(chore)))
        })
            .then(() => {
           this.render()
       }) 
    }

    render() {
        
        this.choresContainer.innerHTML = this.chores.map(chore => chore.renderLi()).join('')
    }
}