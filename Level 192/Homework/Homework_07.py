# dic-დან ამოშალე რამდენიმე key 

bike = {
    "brand": "Yamaha",
    "model": "R1",
    "year": 2023,
    "speed": "300 km/h",
    "color": 'Black'
}

bike.pop('color')
del bike['speed']

print(bike)