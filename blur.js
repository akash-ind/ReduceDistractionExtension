
function removeDistractions()
{
    const url = document.URL;
    if(url == "https://www.youtube.com/")
    {
        let content = document.getElementById("page-manager");
        content.style.display = "none";
    }
    else{
        let content = document.getElementById("page-manager");
        content.style.display = "block";
    }
}
window.setInterval(removeDistractions, 5000);
