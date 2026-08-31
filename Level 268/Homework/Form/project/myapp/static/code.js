let code = document.querySelectorAll('input')[1]
let prevValue = ''

code.addEventListener('input', (e) => {
    let newValue = e.target.value

    if (!(newValue.length - 1 === prevValue.length || newValue.length + 1 === prevValue.length)) {
        fetch('')
        document.querySelector('p').textContent = 'you can not past code'
    } else {
        document.querySelector('p').textContent = ''
    }
    prevValue = newValue

})