'''7. დაწერე ფუნქცია, რომელიც იღებს ორ სტრინგს და მოახდინეთ კონკატენაცია'''

first_string = input("Enter word: ")
second_string = input("Enter second word: ")

def concatenation(word_1, word_2):
    return word_1 + word_2

print(concatenation(first_string, second_string))