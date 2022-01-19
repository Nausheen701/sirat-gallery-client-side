class Art {
   
    static all = []
    static artsContainer = () => document.getElementById('arts-container')
    static artForm = document.getElementById('form-container')    

    constructor({id, title, artist, description, image_url, artist_id}){
        Object.assign(this, {id, title, artist, description, image_url, artist_id})
     
        this.element = document.createElement('li')
        this.element.addEventListener('click', this.handleClick)
       
        Art.all.push(this)
    }

    artHTML(){
        this.element.innerHTML = `
        <div>
        <h3><font face = "marker felt"><font color = "navy" class="art-title">${this.title}</font></font><br>
        <img data-id=${this.id} class="art-img" src=${this.image_url} width="200" height=auto/>
        </div>
        <button id='delete-bttn'>Delete</button>
        <br>
        <br>
        `
        return this.element
    }

    addToDom(){
        Art.artsContainer().append(this.artHTML())
        const img = this.element.querySelector('.art-img')
        img.addEventListener('click', this.showTheArtDeets)
    }

    static renderForm(){
        Art.artForm.innerHTML += `
        <form id="new-art-form">
        <font face = "big caslon"><font color = "darkgreen"> Title: <input type="text" id="title"><br>
        Artist : <input type="text" id="artist_name"><br>
        Description: <input type="text" id="description"><br>
        Image Url: <input type="text" id="image_url"> </font> </font>
        <input type="submit" id="create">
        </form>
        `
    }

    handleClick = () => {
        if (event.target.innerText === 'Delete') 
            artService.deleteArt(this.id, this.element)
    }
    
    showTheArtDeets = (event) => {
        Art.artsContainer().innerHTML = `
        <img src=${this.image_url} width="500" height=auto/> <br>
        <h3><font face = "marker felt"><font color = "navy">Title: ${this.title ? this.title : 'Untitled is so cliche'}</font></font><br>
        <font face = "big caslon"><font color = "darkgreen">Artist: ${this.artist ? this.artist.name : 'Who will claim this masterpiece?'} <br>
        Description: ${this.description ? this.description : 'Details forthcoming'}<br>
        Video tutorial coming soon!</font></font></h3><br>  
        <br>
        <a  id="back-bttn" href="#">Back</a>
        `
        const backBttn = document.getElementById('back-bttn')
        backBttn.addEventListener('click', this.goBack)
    }

    goBack = () => { 
        Art.artsContainer().innerHTML = ''
            // artService.getArts()
            Art.all.forEach((art) => {
                art.addToDom()    
            })
    }
    
    static alphaSort = () => {
    
        Art.artsContainer().innerHTML = ''
           const sortedArray = Art.all.sort((a,b) => {
            if (a.title.toUpperCase() < b.title.toUpperCase()
                ) return -1
            if (a.title.toUpperCase() > b.title.toUpperCase()
                ) return 1
            return 0
        })
        sortedArray.forEach((art) => {
            art.addToDom()
        })
    }