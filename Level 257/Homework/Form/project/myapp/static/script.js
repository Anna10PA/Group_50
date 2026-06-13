// animation bg

let canva = document.querySelector('canvas')

canva.width = window.innerWidth
canva.height = window.innerHeight

let c = canva.getContext('2d')

function Shape(x, y, dx, dy, size, type) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.size = size
    this.type = type

    this.draw = function () {
        c.beginPath()

        c.shadowBlur = 15
        c.lineWidth = 2

        if (this.type === 'circle') {
            c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
            c.shadowColor = 'rgb(0, 255, 4)'
            c.strokeStyle = 'rgb(19, 227, 0)'
            c.stroke()
        }
        else if (this.type === 'square') {
            c.shadowColor = 'rgb(38, 0, 255)'
            c.strokeStyle = 'rgb(0, 115, 255))'
            c.strokeRect(this.x, this.y, this.size, this.size)
        }
        else if (this.type === 'line') {
            c.shadowColor = 'rgb(255, 0, 242)'
            c.strokeStyle = 'rgb(227, 0, 121)'
            c.moveTo(this.x, this.y)
            c.lineTo(this.x + this.size, this.y + this.size)
            c.stroke()
        }
    }

    this.update = function () {
        if (this.x > window.innerWidth || this.x < 0) {
            this.dx = -this.dx
        }
        if (this.y > window.innerHeight || this.y < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy

        this.draw()
    }
}

let arr = []
for (let i = 0; i < 65; i++) {
    let randomFigur = Math.floor(Math.random() * 3)

    let size = Math.floor(Math.random() * 15) + 5
    let x = Math.random() * (window.innerWidth - size * 2) + size
    let y = Math.random() * (window.innerHeight - size * 2) + size

    let dx = (Math.random() - 0.5) * 1.5
    let dy = (Math.random() - 0.5) * 1.5
    if (dx === 0) dx = 1
    if (dy === 0) dy = 1

    let type
    if (randomFigur === 0) {
        type = 'circle'
    } else if (randomFigur === 1) {
        type = 'square'
    } else {
        type = 'line'
    }

    arr.push(new Shape(x, y, dx, dy, size, type))
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)

    for (let i of arr) {
        i.update()
    }
}

animate()