
const searchIcon= document.getElementById('search-icon');
const searchInput=document.getElementById('search-input');
const navLinks=document.getElementById('nav-links');

searchIcon.addEventListener('click',()=>{
    if(searchInput.style.display==='none' || searchInput.style.display===''){
        navLinks.style.display='none';
        searchInput.style.display='block';
        searchInput.focus();

    }
    else{
        navLinks.style.display='flex';
        searchInput.style.display='none';
    }
})
