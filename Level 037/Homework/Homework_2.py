'''   2) გააკეთეთ random student generator რომელსაც გადაეცემა ჯგუფის მოსწავლეებით სავსე სია და დაგვიბრუნებს რენდომულად განაწილებულ გუნდებს მზგავსად როგორც გავაკეთეთ წინა გაკვეთილზე'''

import random
student_list = ["ალექსანდრე ეგუტია" , "გიორგი პავლიაშვილი" , "გიორგი წიბლიაშვილი" ,"ზუკა ქორიძე" , "ლევან გენძეხაძე" , "ნიკა კოტრიკაძე" ,  'იაკობ დოღნაძე']

# student_list = []

# student = input("სახელი / გვარი: ")
# while student != 'საკმარისია':
#     student_list.append(student)
#     student = input("სახელი / გვარი: ")

# print('')
# print('')
# print(student_list)
# print('')
# print('')

# ask_remove = input("გინდა ვინმეს ამოშლა? : ")
# while ask_remove != 'არ მინდა':
#     student_list.remove(ask_remove)
#     ask_remove = input("კიდევ გინდა ამოშალო ვინმე? : ")
# print('')
# print(f'მოსწავლეთა რაოდენობა არის: {len(student_list)}')
# print(student_list)
# print('')
# print('')

result = []
student_group = []
member_number = int(input("შეიყვანე ჯგუფში რამდენი მოსწავლეც გინდა რომ იყოს: "))

if len(student_list) % member_number == 0:
    while student_list != []:
        random_student = random.choice(student_list)
        student_group.append(random_student)
        student_list.remove(random_student)

        if len(student_group) == member_number:
            result.append(student_group)
            student_group = []
else:
    while len(student_list) != len(student_list) % member_number:
        random_student = random.choice(student_list)
        student_group.append(random_student)
        student_list.remove(random_student)
        if len(student_group) == member_number:
            result.append(student_group)
            student_group = []
    result.append(student_list)
print('')
print('ჯგუფები შედგენილია')
print('')
print('')
for group in range(len(result)):   
    print('ჯგუფი '+str(group+1) + ': '+str(result[group]))
