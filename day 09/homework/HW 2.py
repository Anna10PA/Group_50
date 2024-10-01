"""level 9:
    2) შექმენით დროში მოგზაურობის პროგრამა, რომელიც მომხმარებელს შეეკითხება მის ამჟამინდელ ასაკს, ამჟამინდელ წელს, რამდენი წლით სურს დროში მოგზაურობა, შემდეგ კი პროგრამა დაბეჭდავს დროში მოგზაურობის შემდეგ რომელი წელი იქნება და რამდენი წლის იქნება მომხმარებელი დროში მოგზაურობის შემდეგ"""

# current
age=int(input("enter your current age: "))
year=int(input("enter current year: "))
time=int(input("how many years do you want to travel? "))

# travel
print("afer " + str(time) + " years, your age will be " + str(age + time) + " and the year will be "+ str(year +time))