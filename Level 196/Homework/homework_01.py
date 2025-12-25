# 1) მოცემულია სია: nums = [10, 20, 30], მომხმარებელს შეაყვანინე ინდექსი და დაბეჭდე შესაბამისი ელემენტი. თუ ინდექსი არ არის რიცხვი გამოიტანე ერორი, თუ ინდექსი სცდება სიის ზომას გამოიტანე ერორი, თუ ყველაფერი სწორია დაბეჭდე ელემენტი, ნებისმიერ შემთხვევაში დაბეჭდე "შემოწმება დასრულდა"


nums = [10, 20, 30]

try:
    index = int(input("Enter index: "))

except IndexError as error:
    print(error)

except ValueError as error:
    print(error)

else: 
    print(nums[index])