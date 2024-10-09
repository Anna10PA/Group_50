const background = document.querySelector("#color")
background.oninput = () => {
    document.body.style.backgroundColor = background.value
}