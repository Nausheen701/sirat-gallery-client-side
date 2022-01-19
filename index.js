const base_url = "http://localhost:3000"
const artService = new ArtService(base_url)

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // ...all of your initial functions that "kick off" your application
    artService.getArts()
    Art.alphaSort()
    Art.renderForm()
    Art.artForm.addEventListener('submit', handleSubmit)
    
});


function handleSubmit(event){
    event.preventDefault()
    artService.createArt()
    event.target.reset()
}