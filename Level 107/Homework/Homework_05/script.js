// 5) შექმენით ფუნქცია, რომელიც მიიღებს n რაოდენობის სახელს და დაბეჭდავს მათ. შემდეგ შექმენით სახელების სია, დაშალეთ ის და გადაეცით არგუმენტად შექმნილ ფუნქციას.(დაგჭირდებათ reast & spread ოპერატორები)


function getNames(...names) {
    console.log(names)
    names.map(name => {
        console.log(name)
    })
}

let nameList = ['Ana', 'Nini', 'Gio']
getNames(...nameList)