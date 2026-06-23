let container = document.getElementById('canvas-container')

let scene = new THREE.Scene()  // 3d სცენას ვქმნით
let camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000)

// 1. ხედვის კუთხეა - 45
// 2. პროპორცია რომ არ გაიწელოს ფიგურა - container.clientWidth / container.clientHeight 
// 3. არის მინიმალური px რაც შეიძლება იყოს დაპატარავებისას,
// 4. მაქსიმალური px რაც შეიძლება იყოს გაზრდისას,

camera.position.set(0, 0, 15) // ხედია, 1 არის x, 2 - y, 3 - z

let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }) 
// WebGLRenderer - ხატავს ელემენტს, მას გადაეცემა ობიექტი არგუმენტად და მას გადავცემთ ამ შემთხვევაში 2 property-ს. პირველი არის antialias რაც ფიგურის კუთხეებს უზრუნველყოფს, px დაეტყოს თუ არა. alpa არის ჩრდილი, ფიგურას უნდა ჰქონდეს თუ არა
renderer.setSize(container.clientWidth, container.clientHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
container.appendChild(renderer.domElement)

let controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.enableZoom = false

let ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

let dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
dirLight.position.set(5, 10, 7)
dirLight.castShadow = true
dirLight.shadow.mapSize.width = 2048
dirLight.shadow.mapSize.height = 2048
scene.add(dirLight)

let textCanvas = document.createElement('canvas')
textCanvas.width = 512
textCanvas.height = 512
let ctx = textCanvas.getContext('2d')

ctx.fillStyle = '#0000aa'
ctx.fillRect(0, 0, textCanvas.width, textCanvas.height)

ctx.font = 'bold 46px sans-serif'
ctx.fillStyle = '#ffffff'
ctx.textAlign = 'center'
ctx.fillText('FiftyGroup.co', textCanvas.width / 2, textCanvas.height / 2)

let textTexture = new THREE.CanvasTexture(textCanvas)

let sideMaterial = new THREE.MeshStandardMaterial({
    color: 0x0000aa,
    roughness: 0.6,
    metalness: 0.1
})

let logoMaterial = new THREE.MeshStandardMaterial({
    map: textTexture,
    roughness: 0.6,
    metalness: 0.1
})

let materials = [
    sideMaterial, sideMaterial, sideMaterial, sideMaterial, logoMaterial, logoMaterial
]

let bagGroup = new THREE.Group()

let bagGeometry = new THREE.BoxGeometry(4, 5, 2)
let bagBody = new THREE.Mesh(bagGeometry, materials)
bagBody.castShadow = true
bagBody.receiveShadow = true
bagGroup.add(bagBody)

let handleMaterial = new THREE.MeshStandardMaterial({
    color: 0xddddff,
    roughness: 0.5
})

let handleGeometry = new THREE.TorusGeometry(1, 0.05, 16, 100, Math.PI)

let frontHandle = new THREE.Mesh(handleGeometry, handleMaterial)
frontHandle.position.set(0, 2.5, 0.9)
frontHandle.castShadow = true
bagGroup.add(frontHandle)

let backHandle = new THREE.Mesh(handleGeometry, handleMaterial)
backHandle.position.set(0, 2.5, -0.9)
backHandle.castShadow = true
bagGroup.add(backHandle)

scene.add(bagGroup)

let floorGeometry = new THREE.PlaneGeometry(50, 50)
let floorMaterial = new THREE.ShadowMaterial({ opacity: 0.2 })
let floor = new THREE.Mesh(floorGeometry, floorMaterial)
floor.rotation.x = -Math.PI / 2
floor.position.y = -2.5
floor.receiveShadow = true
scene.add(floor)

function animate() {
    requestAnimationFrame(animate)
    bagGroup.rotation.y += 0.005
    controls.update()
    renderer.render(scene, camera)
}


animate()