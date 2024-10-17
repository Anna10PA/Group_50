# 3) შექმნეით მეორე ფუნქცია რომელიც მომხმარებელს შეეკიტება სახელს შემდეგ კი მიესალმება მას მაგ. hello jumnbera

def name():
    name = input('enter name: ')
    print('Hello '+name) 
name()

# damatebit:
# 1
def name(name):
    print('Hello '+name)
name('Ana')

# 2
def profile(name, age, city, height):
    print(f'{name}, {age}, {city}, {height}')
profile('Ana', 15, 'Tbilisi', 1.62)

# 3
def profile(name, age, city, height):
    print(f'{name}, {age}, {city}, {height}')

profile('nini', 29, 'New_Your', 1.60)
profile('gio', 28, 'Tbilisi', 1.80)
profile('Ana', 15, 'Tbilisi', 1.62)



