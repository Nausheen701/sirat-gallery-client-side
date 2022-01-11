class Art {
    // remember objects
    static all = []
        // this is from the first fetch request & a method will need to be set to delete from front end
    static artsContainer = document.getElementById('arts-container')
    static artForm = document.getElementById('form-container')
    

    constructor({id, title, artist, description, image_url, artist_id}){
        this.id = id
        this.title = title
        this.artist = artist
        this.description = description
        this.image_url = image_url
        this.artist_id = artist_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
            // dataset is an attribute of the html element
        this.element.id = `art-${this.id}`
        this.element.addEventListener('click', this.handleClick)
       
        Art.all.push(this)
        // this refers to the newly create object
    }

    // create the inner html for this.element
    artHTML(){
        this.element.innerHTML += `
        <div>
        <img data-id=${this.id} class="art-img" src=${this.image_url} width="500" 
        height=auto/>
            <h3><font face = "marker felt"><font color = "navy">${this.title}</font></font><br>
            <font face = "big caslon"><font color = "darkgreen">${this.artist ? this.artist.name : 'Artist Unknown'} <br>
            ${this.description}</font></font></h3><br>
        </div>
       
        <button id='delete-bttn'>Delete</button>
        <br>
        <br>
        `
        return this.element
    }


    addToDom(){
        Art.artsContainer.append(this.artHTML())
    }


    static renderForm(){
        Art.artForm.innerHTML += `
        <form id="new-art-form">
        <font face = "big caslon"><font color = "darkgreen"> Title: <input type="text" id="title"><br>
        Artist : <input type="text" id="artist_name"><br>
        Description: <input type="text" id="description"><br>
        Image Url: <input type="text" id="image_url"> </font> </font>
        <input type="submit" id="create">
        <form>
        `
    }

//     artShow(){
//      const id = event.target.dataset.id
//      fetch(`http://localhost:3000/arts/${id}`)
//     .then(resp => resp.json())
//     .then(art => {
//         const {title, image_url, artist, description} = art
//         artsContainer.innerHTML = ''
//         artsContainer.innerHTML += `
//         <img src=${image_url} />
//         Title: ${title}
//         <br>
//         Artist: ${artist}
//         <br>
//         Description: ${description}
//         <br>
//         <br>
//         <a  id="back-bttn" href="#">Back</a>
//         `
//         const backBttn = document.getElementById('back-bttn')
//         backBttn.addEventListener('click', goBack)
//     })
//     }  
//  goBack(){
//     artsContainer.innerHTML = ''
//     getArts()
//  }

    handleClick = ()  => {
        if (event.target.innerText === 'Delete'){
            // this.element.remove()
            artService.deleteArt(this.id, this.element)
        }
    }

    
}