// 2)შექმენით ცვლადი სადაც მომხმარებელი შემოიყვანს საათს, თქვენი დავალებაა გაიგოთ ეს საათი რომელ დღის მონაკვეთს ეკუთვნის(დილა,შუადღე,საღამო,ღამე

let clock = Number(prompt("Enter Number: "))

switch(true){
    case 12 > clock  :
        alert('dila')
        break
    case 17 > clock:
        alert('shuadge') 
        break
    case 20 > clock:
        alert('sagamo')
        break
    case 24>= clock:
        alert('game')
        break
    default:
        alert('maseti dro ar arsebobs')
}