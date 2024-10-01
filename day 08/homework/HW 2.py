"""2) შექმენით პროგრამა რომელსაც შეეძლება დიალოგი თქვენთან (აირჩიეთ ნებისმიერი თემა) input გამოყენებით"""


print("Hello, I am Ana from a ART company,")
name=input("please enter your name: ")
print("Hello "+name)

a=input("Do you need help? (yes or no) ")
if a=="no":
    print("Goodbye then")

elif a=="yes":
    print("How can I help you? ")

b=input("Do you want paints or pencils? ")
if b=="pencils":
    input("i think you will like acrylic pencils. But please contact us by email for the rest of the information.")
    print("no problem. email is at the beginning of the site. Goodbye ")
    
elif b=="paints":
    input("I think you will like whatercolor paints. But please contact us by email for the rest of the information. ")
    print("no problem. email is at the beginning of the site. Goodbye ")

else:
    print("ERROR")
