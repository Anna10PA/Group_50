'''     4) ერთიდან 100 მდე დაბეჭდეთ ყველა რიცხვი თან გვერძე მიუწერეთ ლუწია თუ კენტი  while loop ის გამოყენებით'''

number = 0 

while number <= 100:
    if number % 2 == 0:
        print(str(number) + ' luwia')
    else:
        print(str(number) + ' kentia')
    number = number + 1