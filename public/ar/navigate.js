window.addEventListener("DOMContentLoaded", init);

function init() {
    const params = new URLSearchParams(window.location.search)
    Array.from(document.querySelectorAll(".contents1,.contents2")).forEach((elem) => {
        const atag = elem.querySelector("a");
        const button = atag.querySelector("img")
        if(elem.id == params.get("from")) {
            button.src = "./navigate/photos/statpointbutton.jpg"
        } else {
            atag.href = "./?from=" + params.get("from") + "&to=" + elem.id
        }
    })
}