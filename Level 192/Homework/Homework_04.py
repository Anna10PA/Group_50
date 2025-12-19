# შექმენი ლექსიკონი (dict), სადაც ერთ-ერთი არსებულ Key-ს მნიშვნელობას გაანახლებ და ახალს დაამატებ.

bike = {
    "brand": "Kawasaki",
    "model": "Ninja H2R",
    "year": 2022
}

bike["brand"] = "Ducati"
bike.update({"model": "Panigale V4"})
bike["speed"] = "350 km/h"


print(bike)