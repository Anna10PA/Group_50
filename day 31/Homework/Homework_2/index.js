const input = document.querySelector("#color")
input.oninput = () => {
    document.body.style.backgroundColor = input.value
}