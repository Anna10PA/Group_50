# 2) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ while loop ის გამოყენებით 1-დან მომხმარების შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვი და თან გვერძე მიუწერეთ ლუწია თუ კენტი

num = int(input("Enter: "))
i = 0
while i < num:
    i = i + 1
    if i % 2 == 0:
        print(str(i) + " is even ")
        # print(f"{i} is even ")
    else:
        print(str(i) + " is odd ")   
        # print(f"{i}  is odd ")

