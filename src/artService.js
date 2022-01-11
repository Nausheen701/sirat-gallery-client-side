class ArtService{

    // sets properties for the object like the initialize method
    constructor(endpoint){
        this.endpoint = endpoint
        // this is accepting the base url as an endpoint 
        // this.endpoint is set equal to what we pass in
    }


    // 1: Read/Index action 

    getArts(){
        fetch(`${this.endpoint}/arts`)
        .then(resp => resp.json())
        .then(arts => {
            for (const art of arts){
                const a = new Art(art)
                a.addToDom()
            }
        })
    }

    createArt(){
        const art = {
            title: document.getElementById('title').value,
            artist_name: document.getElementById('artist_name').value,
            description: document.getElementById('description').value,
            image_url: document.getElementById('image_url').value,
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(art)
        }

        fetch(`${this.endpoint}/arts`, configObj)
        .then(resp => resp.json())
        .then(art => {
            const a = new Art(art)
            a.addToDom()
        })
    }


    deleteArt(id, element){
            fetch(`${this.endpoint}/arts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => {
            element.remove() 
            alert(json.message)
        })
       
    }

}

