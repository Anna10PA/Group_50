# შექმენი ლექსიკონი (dict), სადაც key-ს და მნიშვნელობას გამოიტან ცალცალკე და წყვილებად.

bike = {
    "brand": "Yamaha",
    "model": "R1",
    "year": 2023,
    "speed": "300 km/h"
}

# task 01
for key in bike.keys():
    print(key)

# task 02
for value in bike.values():
    print(value)

# task 03
for item in bike.items():
    print(item)

# task 04
for key, value in bike.items():
    print(f"{key} - {value}")
