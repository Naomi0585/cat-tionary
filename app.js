const images = document.querySelectorAll(".card img");
const descriptions = document.querySelectorAll(".card p");

images.forEach(img => {
    img.addEventListener("click", () => {
        // hide all descriptions
        descriptions.forEach(p => {
            p.computedStyleMap.display = "none";
        })
    })
})
 
//show the clicked cat's description
const catId = img.dataset.cat;
document.getElementById(catId).style.display = "block";

