'''2) python - შექმენით რიცხვებით სავსე სია შემდეგ კი შექმენით პროგრამა რომელიც დაგვიბეჭდავს ამ სიიდან უდიდესს, გაიხსენეთ ბატონი ნიკას მოცემული დავალება გამოგადგებათ'''


list = [1, 20, 12489, 19002, 3, -394, 230, 120345, 30, 40, 50, 80]
first_rang = list[0]

for element in range(len(list)):
    if list[element] > first_rang:
        first_rang = list[element]
print(first_rang, ' არის ყველაზე დიდი რიცხვი')