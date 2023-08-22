const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const searchResults = document.getElementById("search-results");
const showMoreBtn = document.getElementById("show-more-btn");
const accessKey = "cXsdzasThI89Tq2bX9HzYsR0jsWji4h-Ki0tY4hUfIE"

let keyword = ''
let page = 1

async function searchImages(){
    keyword = searchInput.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    if(page===1){
        searchResults.innerHTML = ""
    }
    const results = data.results
    results.map((element)=>{
        const image = document.createElement("img")
        image.src = element.urls.regular

        const imageLink = document.createElement("a")
        imageLink.href = element.links.download
        imageLink.target = "_blank"

        imageLink.appendChild(image)
        searchResults.appendChild(imageLink)
    })
    if(searchResults.innerHTML!=""){
        showMoreBtn.style.display = "block"
    }
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    page = 1
    searchImages()
})

showMoreBtn.addEventListener("click",()=>{
    page++
    searchImages() 
})


//download the image once img is clicked//


function downloadImage() {
    const a = document.createElement("a")
    a.target = '_blank'
    a.href = image.src
    a.download = "Hd_image.png"
    a.style.display = "none"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
