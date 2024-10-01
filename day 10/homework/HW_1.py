"""1) ისწავლეთ random-ი პითონში(ბიბლოეთეკა)"""


from random import sample
names=["Ana", "nikolozi", "saba", "koko", "lui", "manana", "gio", "nini", "nitsa"]
name_outcome = sample(names,3)
print(name_outcome)

# python-ში არსებობს ბევრი ბიბლიოთეკა. მათ შორის არის random ბიბლიოთეკა. ამ ბიბლიოთეკის საშუალებით რენდომულად არის შესაძლებელი ამოარჩიოს ან დაალაგოს.
#ზემოთ, შექმნილი მაქვს ცვლადი სახელად name. და [] ჩავწერე "სახელები", რომლებიდანაც უნდა ამოარჩიოს რენდომულად.
# ამის შემდეგ შევქმენი ცვლადი რომელსაც name_outcome დავარქვი და მის მნიშვნელობად დავწერე random.sample(name,3). ანუ რენდომულად ამოარჩევს ცვლადი მნიშვნელიდან ნებისმიერ 3 სახელს და print ფუნქციის საშუალებით დაიპრინტება.

import random
names=["Ana", "nikolozi", "saba", "koko", "lui", "manana", "gio", "nini", "nitsa"]
name_outcome=random.choice(names)
print(name_outcome)
#სახელებიდან ნებისმიერს ამოარჩევს რენდომულად