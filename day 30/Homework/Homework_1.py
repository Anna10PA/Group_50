"""   1) შექმენით სია რომელშიც იქნება მინიმუმ 10 სახელი შემდეგ ამ სიიდან ამოშალეთ ისეთი სახელები რომლის სიგრძეც იქნება 10ზე მეტი და დააბრუნეთ გაფილტრული სია გამოიყენეთ for loop და ნასწავლი ფუნქციები """

names = ['jimshera', 'shvarchika mayvala', 'Ana', 'anastasiaa', 'taso', 'keso', 'nitca', 'mayvala', 'manana', 'vaxo']

names_2 = []

for i in range(len(names)):
    if len(names[i]) < 10:
        names_2.append(names[i])  
        
print(names_2)