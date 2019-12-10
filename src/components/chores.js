class Chores {
    constructor() {
        this.chores = []
        this.adapter = new ChoresAdapter()
        this.initbindEventlisteners()
        this.fetchAndLoadChores()
    }

    initbindEventlisteners() {
        this.choresContainer = document.getElementById('chores-container')
        //choresContainer = document.getElementById('chores-container')
        //this.button = document.getElementById('btn')
        //this.button = document.getElementsByTagName('button')
        //this.button = this.choresContainer.getElementById('btn')
        this.body = document.querySelector('body')
        this.newChoreName = document.getElementById('new-chore-name')
        this.newChoreDescription = document.getElementById('new-chore-description')

        this.choreForm = document.getElementById('new-chore-form')
        this.choreForm.addEventListener('submit', this.createChore.bind(this))
        //this.choresContainer.addEventListener('dblclick', this.handleChoreClick.bind(this)) 
        //this.body.addEventListener('blur', this.updateChore.bind(this), true)
        //this.choresLi.addEventListener('dblclick', console.log(this))
        //this.button.addEventListener('click', console.log(this))
        //console.log(this)
        //console.log(this.button)
        this.choresContainer.addEventListener('click', this.choreDelete.bind(this))
    }

    choreDelete(e) {
        console.log(this)
        const li = e.target.parentNode
        const id = li.dataset.id
        if (e.target.nodeName === 'BUTTON') { e.target.parentNode.remove(); console.log("in if") }
        this.adapter.deleteChore(id).then(() => { console.log(`test ${this}`) })
        const newThis = this.chores.filter(obj => obj.id != id)
        this.chores = []
        newThis.forEach(chore => this.chores.push(chore))
        console.log(this)
        
    }
        
    



    updateChore(e) {
        const li = e.target
        li.contentEditable = false
        li.classList.remove('editable')
        const newValue = li.innerHTML.split("&gt;&gt;&gt;")
        const id = li.dataset.id
        //console.log(id)
        this.adapter.updateChore(newValue, id)
        
    }

    createChore(e) {  
        
        e.preventDefault()
        const value = [this.newChoreName.value, this.newChoreDescription.value] 
        this.adapter.createChore(value).then(chore => {
            this.chores.push(new Chore(chore))
            this.render()
        }) 
        this.newChoreName.value = ""
        this.newChoreDescription.value = ""
        //console.log(this) 
    }

    handleChoreClick(e) {
        this.toggledChore(e)
    }

    toggledChore(e) {
        const li = e.target
        li.contentEditable = true
        li.focus()
        li.classList.add('editable')
    }

    updateChore(e) {
        const li = e.target
        li.contentEditable = false
        li.classList.remove('editable')
        const newValue = li.innerHTML.split("&gt;&gt;&gt;")
        const id = li.dataset.id
        //console.log(id)
        this.adapter.updateChore(newValue, id)
        
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