'''10. დაწერე ფუნქცია, რომელიც იღებს სიას და აბრუნებს მასში მხოლოდ მარტივ რიცხვებს. '''

user_number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
new_list = []

def check(number):
    if number > 1:
        for i in range(2, num):
            if number % i == 0 and number != i:
                return False
        return True
    return None

for num in user_number_list:
    if check(num) == True:
        new_list.append(num)
print(new_list)
