
const base_url = "http://localhost:3000"
const artService = new ArtService(base_url)


 Art.artForm.addEventListener('submit', handleSubmit)


artService.getArts()
Art.renderForm()



function handleSubmit(){
    event.preventDefault()
    artService.createArt()
    event.target.reset()
    //  this last line clears the form 

}