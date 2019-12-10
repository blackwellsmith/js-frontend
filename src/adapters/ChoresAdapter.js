class ChoresAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/chores'
    }
    getChores() {
      return fetch(this.baseUrl).then(res => res.json())  
    }

    createChore(value) {
        //console.log("before fetch")
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
                },
            body: JSON.stringify({ name: value[0], description: value[1] })
        }).then(res => res.json())
        //console.log("after fetch")
    }

    updateChore(value, id) {
        console.log("before fetch")
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
                },
            body: JSON.stringify({ name: value[0], description: value[1] })
        }).then(res => res.json())
        
    }

    deleteChore(id) {
        console.log("before fetch")
        console.log(id)
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
            //headers: {'content-type': 'application/json'}
        }).then(res => res.json())
        
    }
}