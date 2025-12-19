# შეამოწმე არის თუ არა dic-ში key სახელად Year


bike = {
    "brand": "Yamaha",
    "model": "R1",
    "year": 2023,
    "speed": "300 km/h"
}

# Task 01
print('Yes' if "Year" in bike else "No")


# Task 02
print("yes" if bike.get("Year") else "No")