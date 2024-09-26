const accessKey ='AGYzAnA6jskkrEKXMnbZ9cXeNLkrKsqEo_AzVTZ2vl8';

const submitForm = document.getElementById('submit-form');
const inputBox = document.getElementById('input-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');


let keyword ='';
let page = 1;

async function searchImage(){
    keyword = inputBox.value ;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML ='';
    }

    const results = data.results;
    results.map((result)=>{
        const image = document.createElement('img');
        image.className ='w-full h-60 object-cover rounded-lg';
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.className = 'p-4 border-2 border-slate-300 rounded-lg';
        imageLink.href = result.links.html;
        imageLink.target ="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
       
    })
    showMoreBtn.classList.remove("hidden");
}
submitForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    page =1;
    searchImage();
});

showMoreBtn.addEventListener('click',()=>{
    page++;
    searchImage();
});