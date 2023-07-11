const images = document.querySelectorAll('.img')

images.forEach((img) => {
    img.addEventListener("mouseover", () => {
        removeActiveClasses()
        img.classList.add("active");
    })
})

function removeActiveClasses() {
    images.forEach((img) => {
        img.classList.remove("active")
    })
}