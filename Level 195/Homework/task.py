thisset = {"apple", "banana", "cherry"}

# add() - set-ში ელემენტის დამატება
thisset.add('item') 

# update() - set-ში ნებისმიერი ელემენტის დამატება როგორც წევრად
thisset.update([1, 2, 3])

# remove() - set-ში სახელის მიხედვით ელემენტის წაშლა (ელემენტი თუ არ არის ერორს გამოიწვევს)
thisset.remove('item')

# discard() - set-ში სახელის მიხედვით ელემენტის წაშლა (არ იწვევს ერორს)
thisset.discard(123)

# pop() - რენდომულად შლის set-დან ელემენტს
thisset.pop()

# clear() - მთლიანი set-ის გასუფთავება
# thisset.clear()

# del მთლიანად წაშლის
# del thisset


# union()  - აერთიანებს ორ set-ს და ახალს აბრუნებს
new_set = thisset.union({1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
# შეგვიძლია | დავწეროთ იგივეა რაც union()
new_set = thisset | {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}


# intersection() - აბრუნებს ისეთ ელემენტებს რომელიც ორივე set-შია საერთო
new_set = thisset.intersection({1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
# შეგვიძლია & დავწეროთ იგივეა რაც intersection()
new_set = thisset & {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}


# intersection_update() - იგივეა რაც intersection() ოღონდ ცვლის set-ს.
thisset.intersection_update({1, 2, 3, 4, 5, 6, 7, 8, 9, 10})


# difference() - ისეთ ელემენტებს გამოიტანს პირველი სეტიდან რომელიც არ არის მეორეში და ახალ სიას ქმნის
new_set = thisset.difference({'asd'})
# შეგვიძლია - დავწეროთ იგივეა რაც difference()
new_set = thisset - {'item-01'}


# difference_update() - ისეთ ელემენტებს გამოიტანს პირველი სეტიდან რომელიც არ არის მეორეში ცვლის პირველ სეტს.
thisset.difference_update({'asd'})
# შეგვიძლია ^ დავწეროთ იგივეა რაც difference_update()


# symmetric_difference_update() - ყველა განსხვავებულ ელემენტს გამოიტანს ორივე სეტიდან და ანახლებს პირველ სეტს.
thisset.symmetric_difference_update({1, 2, 3, 4, 5, 6, 7, 8, 9, 10})


# frozenset() - მონაცემტა ტიპი რომლის განახლებაც არ შეიძლება, ჰგავს set-ს. (list -> tuple ამათი მსგავსი კავშირი აქვთ.)
print(thisset)